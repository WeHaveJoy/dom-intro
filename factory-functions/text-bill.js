//var type = document.querySelector (".billTypeText");
//var button = document.querySelector (".addToBillBtn");
//var callT = document.querySelector (".callTotalOne");
//var smsT = document.querySelector (".smsTotalOne");
//var total = document.querySelector (".totalOne");

var callsTotal = 0;
var smsTotal = 0;

function textBill (billString){
var billItems = billString.split (",");
var billTotal = 0;
for (var i=0;i<billItems.length;i++){
var billItem = billItems[i].trim ();
if (billItem === "call"){
billTotal += 1.75;
callsTotal += 1.75;
}
else if (billItem === "sms"){
billTotal += 0.75;
smsTotal += 0.75;
}
}
var roundedBillTotal = billTotal.toFixed (2);
callT.innerHTML = (callsTotal).toFixed (2);
smsT.innerHTML = (smsTotal).toFixed (2);
return roundedBillTotal;
}


button.addEventListener ("click", calculateBtnClicked);