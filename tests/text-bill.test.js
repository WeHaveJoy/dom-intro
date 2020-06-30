describe("The Text bill factory function", function () {
    it("should be able to set call cost", function () {
        let textBill = text();

        textBill.setCallCost(2.75);
        assert.equal(2.75, textBill.getCallCost());

        let textBill2 = text();
        textBill2.setCallCost(1.85);
        assert.equal(1.85, textBill2.getCallCost());
    })

    it("should be able to set sms cost", function () {
        let textBill = textB();

        textBill.setSmsCost(0.75);
        assert.equal(0.75, textBill.getSmsCost());

        let textBill2 = textB();
        textBill2.setSmsCost(0.65);
        assert.equal(0.65, textBill2.getSmsCost());
    })

    it("should be able to set sms and call cost", function () {
        let textBill = textB();

        textBill.getCallCost(2.75);
        textBill.getSmsCost(0.85);

        textBill.setSmsCost(0.85);
        textBill.setCallCost(2.75);


        assert.equal(0.85, textBill.getSmsCost());
        assert.equal(2.75, textBill.getCallCost());

        let textBill2 = textB();

        textBill2.setCallCost(1.75);
        textBill2.setSmsCost(0.65);

        assert.equal(1.75, textBill2.getCallCost());
        assert.equal(0.65, textBill2.getSmsCost());

    })

    it("should be able to set warning level", function () {

        let textBill = textB();

        textBill.setWarningLevel(20);

        assert.equal(20, textBill.getWarningLevel());

    })


    it("should be able to set danger level", function () {

        let textBill = textB();

        textBill.setDangerLevel(30);

        assert.equal(30, textBill.getDangerLevel());

    })



    it("should be able to set warning and danger level", function () {

        let textBill = textB();

        textBill.setWarningLevel(20);
        textBill.setDangerLevel(30);

        assert.equal(20, textBill.getWarningLevel());
        assert.equal(30, textBill.getDangerLevel());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let textBill = textB();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(20);
        textBill.setDangerLevel(30);

        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();

        assert.equal(8.25, textBill.getTotalCost());
        assert.equal(8.25, textBill.getTotalCallCost());
        assert.equal(0.00, textBill.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let textBill = textB();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(20);
        textBill.setDangerLevel(30);

        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();

        assert.equal(2.25, textBill.getTotalCost());
        assert.equal(0.00, textBill.getTotalCallCost());
        assert.equal(2.25, textBill.getTotalSmsCost());
    })

    it("should be able to send sms's and also make calls", function () {
        let textBill = textB();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(20);
        textBill.setDangerLevel(30);

        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();

        assert.equal(14.00, textBill.getTotalCost());
        assert.equal(11.00, textBill.getTotalCallCost());
        assert.equal(3.00, textBill.getTotalSmsCost());
    });
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let calculateBill = calculate();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(5);
        textBill.setDangerLevel(10);

        textBill.makeCall();
        textBill.sendSms();
        textBill.sendSms();
        textBill.makeCall();
        assert.equal("warning", textBill.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let textBill = textB();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(5);
        textBill.setDangerLevel(10);

        textBill.makeCall();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        assert.equal("danger", textBill.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let calculateBill = calculate();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(5);
        textBill.setDangerLevel(20);

        textBill.makeCall();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();

        assert.equal(11.00, textBill.getTotalCallCost());
        assert.equal(2.25, textBill.getTotalSmsCost());
        assert.equal("warning", textBill.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let testBill = textB();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(5)
        textBill.setDangerLevel(10);

        textBill.makeCall();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.makeCall();
        textBill.makeCall();

        assert.equal(8.25, textBill.getTotalCallCost());
        assert.equal(2.25, textBill.getTotalSmsCost());
        assert.equal("danger", textBill.totalClassName());

    });
});