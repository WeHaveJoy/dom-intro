describe("The calculate bill factory function", function () {
    it("should be able to set call cost", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        assert.equal(2.75, calculateBill.getCallCost());

        let calculateBill2 = calculate();
        calculateBill2.setCallCost(1.85);
        assert.equal(1.85, calculateBill2.getCallCost());
    })

    it("should be able to set sms cost", function () {
        let calculateBill = calculate();

        calculateBill.setSmsCost(0.75);
        assert.equal(0.75, calculateBill.getSmsCost());

        let calculateBill2 = calculate();
        calculateBill2.setSmsCost(0.65);
        assert.equal(0.65, calculateBill2.getSmsCost());
    })

    it("should be able to set sms and call cost", function () {
        let calculateBill = calculate();

        calculateBill.getCallCost(2.75);
        calculateBill.getSmsCost(0.85);

        calculateBill.setSmsCost(0.85);
        calculateBill.setCallCost(2.75);


        assert.equal(0.85, calculateBill.getSmsCost());
        assert.equal(2.75, calculateBill.getCallCost());

        let calculateBill2 = calculate();

        calculateBill2.setCallCost(1.75);
        calculateBill2.setSmsCost(0.65);

        assert.equal(1.75, calculateBill2.getCallCost());
        assert.equal(0.65, calculateBill2.getSmsCost());

    })

    it("should be able to set warning level", function () {

        let calculateBill = calculate();

        calculateBill.setWarningLevel(20);

        assert.equal(20, calculateBill.getWarningLevel());

    })


    it("should be able to set danger level", function () {

        let calculateBill = calculate();

        calculateBill.setDangerLevel(30);

        assert.equal(30, calculateBill.getDangerLevel());

    })



    it("should be able to set warning and danger level", function () {

        let calculateBill = calculate();

        calculateBill.setWarningLevel(20);
        calculateBill.setDangerLevel(30);

        assert.equal(20, calculateBill.getWarningLevel());
        assert.equal(30, calculateBill.getDangerLevel());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        calculateBill.setSmsCost(0.75);
        calculateBill.setWarningLevel(20);
        calculateBill.setDangerLevel(30);

        calculateBill.makeCall();
        calculateBill.makeCall();
        calculateBill.makeCall();

        assert.equal(8.25, calculateBill.getTotalCost());
        assert.equal(8.25, calculateBill.getTotalCallCost());
        assert.equal(0.00, calculateBill.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        calculateBill.setSmsCost(0.75);
        calculateBill.setWarningLevel(20);
        calculateBill.setDangerLevel(30);

        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.sendSms();

        assert.equal(2.25, calculateBill.getTotalCost());
        assert.equal(0.00, calculateBill.getTotalCallCost());
        assert.equal(2.25, calculateBill.getTotalSmsCost());
    })

    it("should be able to send sms's and also make calls", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        calculateBill.setSmsCost(0.75);
        calculateBill.setWarningLevel(20);
        calculateBill.setDangerLevel(30);

        calculateBill.makeCall();
        calculateBill.makeCall();
        calculateBill.makeCall();
        calculateBill.makeCall();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.sendSms();

        assert.equal(14.00, calculateBill.getTotalCost());
        assert.equal(11.00, calculateBill.getTotalCallCost());
        assert.equal(3.00, calculateBill.getTotalSmsCost());
    });
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        calculateBill.setSmsCost(0.75);
        calculateBill.setWarningLevel(5);
        calculateBill.setDangerLevel(10);

        calculateBill.makeCall();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.makeCall();
        assert.equal("warning", calculateBill.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        calculateBill.setSmsCost(0.75);
        calculateBill.setWarningLevel(5);
        calculateBill.setDangerLevel(10);

        calculateBill.makeCall();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.makeCall();
        calculateBill.makeCall();
        assert.equal("danger", calculateBill.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        calculateBill.setSmsCost(0.75);
        calculateBill.setWarningLevel(5);
        calculateBill.setDangerLevel(20);

        calculateBill.makeCall();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.makeCall();
        calculateBill.makeCall();
        calculateBill.makeCall();

        assert.equal(11.00, calculateBill.getTotalCallCost());
        assert.equal(2.25, calculateBill.getTotalSmsCost());
        assert.equal("warning", calculateBill.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let calculateBill = calculate();

        calculateBill.setCallCost(2.75);
        calculateBill.setSmsCost(0.75);
        calculateBill.setWarningLevel(5)
        calculateBill.setDangerLevel(10);

        calculateBill.makeCall();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.sendSms();
        calculateBill.makeCall();
        calculateBill.makeCall();

        assert.equal(8.25, calculateBill.getTotalCallCost());
        assert.equal(2.25, calculateBill.getTotalSmsCost());
        assert.equal("danger", calculateBill.totalClassName());

    });
});