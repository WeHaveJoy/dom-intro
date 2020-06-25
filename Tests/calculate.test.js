describe('this test' , function(){
    it('should be able to set the call cost' , function(){
        let settingsBill = billWithSettings();
            settingsBill.setCallCost(1.25);
            assert.equal(1.25, settingsBill.getCallCost());

            settingsBill.setCallCost(2.50);
            assert.equal(2.50, settingsBill.getCallCost());
    });

    it('should be able to set the sms cost' , function(){
        let settingsBill = billWithSettings();
            settingsBill.setSmsCost(0.25);
            assert.equal(0.25, settingsBill.getCallCost());

            settingsBill.setSmsCost(0.50);
            assert.equal(0.50, settingsBill.getCallCost());
    });
});