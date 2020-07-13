describe("The text bill factory function", function () {

    it("should be able to set call cost", function () {
        let txtBill = textBill();

        txtBill.setCallCost(4.00);
        assert.equal(4.00, txtBill.getCallCost());

        let txtBill2 = textBill();
        txtBill2.setCallCost(1.85);
        assert.equal(1.85, txtBill2.getCallCost());
    })

    it("should be able to set sms cost", function () {
        let txtBill = textBill();

        txtBill.setSmsCost(2.00);
        assert.equal(2.00, txtBill.getSmsCost());

        let txtBill2 = textBill();
        txtBill2.setSmsCost(0.65);
        assert.equal(0.65, txtBill2.getSmsCost());
    })

    it("should be able to set warning level", function () {

        let txtBill = textBill();

        txtBill.setWarningLevel(30);

        assert.equal(30, txtBill.getWarningLevel());

    })

    it("should be able to set danger level", function () {

        let txtBill = textBill();

        txtBill.setDangerLevel(50);

        assert.equal(50, txtBill.getDangerLevel());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let txtBill = textBill();

        txtBill.setCallCost(4.00);
        txtBill.setSmsCost(2.00);
        txtBill.setWarningLevel(30);
        txtBill.setDangerLevel(50);

        txtBill.makeCall();
        txtBill.makeCall();

        assert.equal(8, txtBill.getTotalCost());
        assert.equal(8, txtBill.getTotalCallCost());
        assert.equal(0.00, txtBill.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let txtBill = textBill();

        txtBill.setCallCost(4.00);
        txtBill.setSmsCost(2.00);
        txtBill.setWarningLevel(30);
        txtBill.setDangerLevel(50);

        txtBill.sendSms();
        txtBill.sendSms();

        assert.equal(4, txtBill.getTotalCost());
        assert.equal(0.00, txtBill.getTotalCallCost());
        assert.equal(4, txtBill.getTotalSmsCost());
    })
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let txtBill = textBill();

        txtBill.setCallCost(4.00);
        txtBill.setSmsCost(2.00);
        txtBill.setWarningLevel(30);
        txtBill.setDangerLevel(50);

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
       

        assert.equal("warning", txtBill.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let txtBill = textBill();

        txtBill.setCallCost(4.00);
        txtBill.setSmsCost(2.00);
        txtBill.setWarningLevel(30);
        txtBill.setDangerLevel(50);

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
       
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        

        assert.equal("danger", txtBill.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let txtBill = textBill();

        txtBill.setCallCost(4.00);
        txtBill.setSmsCost(2.00);
        txtBill.setWarningLevel(30);
        txtBill.setDangerLevel(50);

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        
       
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        
      

        assert.equal(28, txtBill.getTotalCallCost());
        assert.equal(6, txtBill.getTotalSmsCost());
        assert.equal("warning", txtBill.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let txtBill = textBill();

        txtBill.setCallCost(4.00);
        txtBill.setSmsCost(2.00);
        txtBill.setWarningLevel(30);
        txtBill.setDangerLevel(50);

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        
        
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        

        assert.equal(44, txtBill.getTotalCallCost());
        assert.equal(6, txtBill.getTotalSmsCost());
        assert.equal("danger", txtBill.totalClassName());

    });
});
