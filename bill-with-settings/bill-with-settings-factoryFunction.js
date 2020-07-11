const addButton = document.querySelector(".add");
const updateButton = document.querySelector(".updateSettings");

const billItem = document.querySelector(".billItemTypeWithSettings");
const smsCost = document.querySelector(".smsCostSetting");
const callCost = document.querySelector(".callCostSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const warningLevel = document.querySelector(".warningLevelSetting");

const callCostElem = document.querySelector(".callTotalSettings");
const smsCostSetting = document.querySelector(".smsTotalSettings");

const totalCostElemThree = document.querySelector(".totalSettings");

var settingsInstance = BillWithSettings();

function updated() {
  settingsInstance.setCallCost(Number(callCost.value));
  settingsInstance.setSmsCost(Number(smsCost.value));
  settingsInstance.setWarningLevel(Number(warningLevel.value));
  settingsInstance.setCriticalLevel(Number(criticalLevel.value));

  styleTotal()
}

function ButtonClicked() {
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (checkedRadioBtn) {
    var itemChecked = checkedRadioBtn.value;

    if (itemChecked === "call") {
      settingsInstance.makeCall()
    }
    else if (itemChecked === "sms") {
      settingsInstance.sendSms()

    }
  }
  callCostElem.innerHTML = settingsInstance.getTotalCallCost.toFixed(2);
  smsCostSetting.innerHTML = settingsInstance.getTotalSmsCost.toFixed(2);
  totalCostElemThree.innerHTML = settingsInstance.getTotalCost.toFixed(2);

  styleTotal()
}

function styleTotal() {

  totalCostElemThree.classList.remove("danger");
  totalCostElemThree.classList.remove("warning");
  totalCostElemThree.classList.add(settingsInstance.colorCode());
}

addButton.addEventListener("click", ButtonClicked);
updateButton.addEventListener("click", updated);