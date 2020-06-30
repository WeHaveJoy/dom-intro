describe("The radio bill button factory function", function () {
    it("should be able to set call cost", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        assert.equal(2.75, radioBtn.getCallCost());

        let radioBtn2 = radioBill();
        radioBtn2.setCallCost(1.85);
        assert.equal(1.85, radioBtn2.getCallCost());
    })


    it("should be able to set sms cost", function () {
        let radioBtn = radioBill();

        radioBtn.setSmsCost(0.75);
        assert.equal(0.75, radioBtn.getSmsCost());

        let radioBtn2 = radioBill();
        radioBtn2.setSmsCost(0.65);
        assert.equal(0.65, radioBtn2.getSmsCost());
    })

    it("should be able to set warning level", function () {

        let radioBtn = radioBill();

        radioBtn.setWarningLevel(30);

        assert.equal(30, radioBtn.getWarningLevel());

    })

    it("should be able to set danger level", function () {

        let radioBtn = radioBill();

        radioBtn.setDangerLevel(50);

        assert.equal(50, radioBtn.getDangerLevel());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        radioBtn.setSmsCost(0.75);
        radioBtn.setWarningLevel(30);
        radioBtn.setDangerLevel(50);

        radioBtn.makeCall();
        radioBtn.makeCall();

        assert.equal(5.50, radioBtn.getTotalCost());
        assert.equal(5.50, radioBtn.getTotalCallCost());
        assert.equal(0.00, radioBtn.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        radioBtn.setSmsCost(0.75);
        radioBtn.setWarningLevel(30);
        radioBtn.setDangerLevel(50);

        radioBtn.sendSms();
        radioBtn.sendSms();

        assert.equal(1.50, radioBtn.getTotalCost());
        assert.equal(0.00, radioBtn.getTotalCallCost());
        assert.equal(1.50, radioBtn.getTotalSmsCost());
    })
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        radioBtn.setSmsCost(0.75);
        radioBtn.setWarningLevel(30);
        radioBtn.setDangerLevel(50);

        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();

        assert.equal("warning", radioBtn.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        radioBtn.setSmsCost(0.75);
        radioBtn.setWarningLevel(30);
        radioBtn.setDangerLevel(50);

        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();

        assert.equal("danger", radioBtn.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        radioBtn.setSmsCost(0.75);
        radioBtn.setWarningLevel(30);
        radioBtn.setDangerLevel(50);

        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();

        assert.equal(27.50, radioBtn.getTotalCallCost());
        assert.equal(4.50, radioBtn.getTotalSmsCost());
        assert.equal("warning", radioBtn.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        radioBtn.setSmsCost(0.75);
        radioBtn.setWarningLevel(30);
        radioBtn.setDangerLevel(50);

        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        radioBtn.makeCall();
        
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();
        radioBtn.sendSms();

        assert.equal(41.25, radioBtn.getTotalCallCost());
        assert.equal(9.00, radioBtn.getTotalSmsCost());
        assert.equal("danger", radioBtn.totalClassName());

    });
});