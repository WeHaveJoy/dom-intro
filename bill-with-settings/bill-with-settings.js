var callElement = document.querySelector(".callTotalSettings");
var smsElement = document.querySelector(".smsTotalSettings");
var callTotalThree = 0;
var smsTotalThree = 0;
var totalBillCost = 0;



var callCostElement = document.querySelector(".callCostSetting");

var smsCostElement = document.querySelector(".smsCostSetting");
var warningSettings = document.querySelector(".warningLevelSetting");
var criticalSettings = document.querySelector(".criticalLevelSetting");


var callCostValue = 0;
var smsCostValue = 0;
var warningLevel = 0;
var criticalLevel = 0;


var addButton = document.querySelector(".checkedButton");


var updateButton = document.querySelector(".updateSettings");



var total = document.querySelector(".totalSettings");



function settingsBill(){
    callCostValue = Number(callCostElement.value);
    smsCostValue = Number(smsCostElement.value);
    warningLevel = Number(warningSettings.value);
    criticalLevel = Number(criticalSettings.value);

    totalColor(totalBillCost);
}

updateButton.addEventListener('click', settingsBill);



function radioSettings(){
    var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        if(checkedBtn){
            var billItemType= checkedBtn.value;
            if(totalBillCost < criticalLevel){
                if(billItemType === "call"){
                    callTotalThree += callCostValue;
                }
                else if(billItemType=== "sms"){
                    smsTotalThree += smsCostValue;
                }
            }
        }
        
    callElement.innerHTML = callTotalThree.toFixed(2);
    smsElement.innerHTML = smsTotalThree.toFixed(2);
    totalBillCost = callTotalThree + smsTotalThree;
    total.innerHTML = totalBillCost.toFixed(2);
    
    
    totalColor(totalBillCost);
}

addButton.addEventListener('click', radioSettings);


function totalColor(totalBillCost){
     total.classList.remove("danger");
     total.classList.remove("warning");

     if(totalBillCost >= warningLevel && totalBillCost < criticalLevel){
        total.classList.remove("danger");
        total.classList.add("warning");
     }else if(totalBillCost >= criticalLevel){
        total.classList.remove("warning");
        total.classList.add("danger");
     }
}

