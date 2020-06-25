const calculateBtn = document.querySelector (".calculateBtn");

const billTotalElement = document.querySelector (".billTotal");

const billStringField = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector (".total");



function totalPhoneBill (billString) {

var billItems = billString.split (",");

var billTotal = 0;

for (var i=0;i<billItems.length;i++){
var billItem = billItems[i].trim ();

if (billItem === "call"){
billTotal += 2.75;
}

else if (billItem === "sms"){
billTotal += 0.75;

}

}

var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;

}


function styleTotalColor (roundedBillTotal) {
const currentTotal = Number (roundedBillTotal);

billTotalSpanElement.classList.remove ("danger");
billTotalSpanElement.classList.remove ("warning");

if (currentTotal >= 30 ) {
billTotalSpanElement.classList.add ("danger");


} else if (currentTotal >= 20 && currentTotal < 30 ) {
billTotalSpanElement.classList.add ("warning");

}
}


function calculateBtnClicked(){

var billString = billStringField.value;
const roundedBillTotal = totalPhoneBill (billString);



billTotalElement.innerHTML = roundedBillTotal;
styleTotalColor (roundedBillTotal);
}

calculateBtn.addEventListener ("click", calculateBtnClicked);
