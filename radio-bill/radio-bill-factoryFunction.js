function RadioBill() {

    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 30;
    var theCriticalLevel = 50;

    var totalCost = 0;
    

    function getCallCost() {
        return theCallCost;
    }

   function radioBtns(billItemType){
       if(billItemType === "call"){
           theCallCost += 2.75
       } else if(billItemType === "sms"){
           theSmsCost += 0.75
       }
   }

    function getSmsCost() {
        return theSmsCost;
    }

    function getTotalCost() {

        totalCost = theCallCost + theSmsCost;

        return totalCost;
    }

    function styleTotalColor(){

        if(getTotalCost() >= theCriticalLevel){
            return "danger"
        } else if(getTotalCost() >= theWarningLevel){
            return "warning"
        }
        return "";
    }
    
    
    return {
        getCallCost,
        radioBtns,
        getSmsCost,
        getTotalCost,
        styleTotalColor
    }
}
