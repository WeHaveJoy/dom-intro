const type = document.querySelector (".billTypeText");
const button = document.querySelector (".addToBillBtn");
const callT = document.querySelector (".callTotalOne");
const smsT = document.querySelector (".smsTotalOne");
const total = document.querySelector (".totalOne");


function phoneBill (billString){


    var callsTotal = 0
    var smsTotal = 0 

    function textBillTotal(billTypeEntered) {
        
        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
    }

    function getCallTotal() {
         

        return callsTotal;


    }

    function getSmsTotal() {
        return smsTotal;
    }
    function getTotal() {
        return smsTotal + callsTotal;
    }
      
    function styleColor() {

        if (getTotal() >= 50) {
            return "danger"
        }
        else if (getTotal() >= 30) {
            return "warning"
        }
    }

        return {

        textBillTotal,
        getCallTotal,
        getSmsTotal,
        getTotal,
        styleColor,
    }
}




