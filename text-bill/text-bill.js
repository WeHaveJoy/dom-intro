const billTypeTextElem = document.querySelector(".billTypeText");
const addToBillBtnElem = document.querySelector(".addToBillBtn");
const callTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalElem = document.querySelector(".totalOne");



const txtBill = phoneBill();


function buttonClicked() {


  var billTypeEntered = billTypeTextElem.value.trim();


  txtBill.textBillTotal(billTypeEntered)


  callTotalElem.innerHTML = txtBill.getCallTotal();


  smsTotalElem.innerHTML = txtBill.getSmsTotal();


  
  totalElem.classList.add(txtBill.styleColor());



       totalElem.innerHTML = txtBill.getTotal();



}


addToBillBtnElem.addEventListener("click", buttonClicked);




