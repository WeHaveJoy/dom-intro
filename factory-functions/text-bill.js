function textBill() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theDangerLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost;
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        return theSmsCost;
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function makeCall() {
        if(!hasReachedDangerLevel()){
            callCostTotal += theCallCost;
        }
        
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }
    function getTotalCallCost() {
        return callCostTotal;
    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function sendSms() {
        if (!hasReachedDangerLevel()) {
            smsCostTotal += theSmsCost;
        }
    }
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }


    function setDangerLevel(dangerLevel) {
        theDangerLevel = dangerLevel;
    }
    function getDangerLevel() {
        return theDangerLevel;
    }

    function hasReachedDangerLevel() {
        return getTotalCost() >= getDangerLevel();
    }

    function totalClassName() {
        if (hasReachedDangerLevel()) {
            return "danger";
        }
        if (getTotalCost() >= getWarningLevel()) {
            return "warning";
        }
    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotalCost,
        makeCall,
        getTotalCallCost,
        sendSms,
        getTotalSmsCost,
        setWarningLevel,
        getWarningLevel,
        setDangerLevel,
        getDangerLevel,
        totalClassName
    }

}
