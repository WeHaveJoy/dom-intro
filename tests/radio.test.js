describe("The radio bill", function () {
    it("should be able to get call cost", function () {
        let radioBtn = RadioBill();

        //radioBtn.setCallCost(2.75)
        assert.equal(0, radioBtn.getCallCost());

    })


    // it("should be able to get sms cost", function () {
    //     let radioBtn = RadioBill();

    //     radioBtn.setSmsCost(0.75);
    //     assert.equal(0.75, radioBtn.getSmsCost());

    //     let radioBtn2 = RadioBill();
    //     radioBtn2.setSmsCost(0.65);
    //     assert.equal(0.65, radioBtn2.getSmsCost());
    // })

    // it("should be able to set warning level", function () {

    //     let radioBtn = RadioBill();

    //     radioBtn.setWarningLevel(30);

    //     assert.equal(30, radioBtn.getWarningLevel());

    // })

    // it("should be able to set critical level", function () {

    //     let radioBtn = RadioBill();

    //     radioBtn.setCriticalLevel(50);

    //     assert.equal(50, radioBtn.getCriticalLevel());

    // })
});