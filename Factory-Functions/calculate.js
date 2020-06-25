function totalPhoneBill (billString) {

    var billItems = billString.split (",");
    
    var billTotal = 0;
    
    for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim ();
    
    if (billItem === "call"){
    billTotal += 1.25;
    }
    
    else if (billItem === "sms"){
    billTotal += 0.25;
    
    }
    
    }
    
    var roundedBillTotal = billTotal.toFixed(2);
    return roundedBillTotal;
    
    }
    