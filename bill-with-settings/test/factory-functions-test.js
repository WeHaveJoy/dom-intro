function billWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel=0;
    var theCriticalLevel= 0;

    var callCostTotal =0;
    var smsCostTotal =0; 

    function setCallCost(callCost){
        theCallCost = callCost;
    }

    function getCallCost(){
        return theCallCost;
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
   }

    function getSmsCost(){
        return theSmsCost;
    }

    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function makeCall(){
        callCostTotal += theCallCost;
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){
        return theCallCost;

    }

    function getTotalSmsCost(){


        return theSmsCost;
    }

    function sendSms(){

        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
        }
        
    }

    function hasReachedCriticalLevel(){
        return getTotalCost() >= getWarningLevel();
    }

    function totalClassName(){
            if(hasReachedCriticalLevel()){
                return "warning";
            }

            if(getTotalCost() >= getCriticalLevel()){
                return "critical";
            }
    }


    return{
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName
    }
}