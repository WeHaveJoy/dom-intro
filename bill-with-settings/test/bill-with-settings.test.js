describe("The bill with settings factory function", function () {

    it("It should be able to set the call cost", function () {
      let settingsBill = billWithSettings();
  
      settingsBill.setCallCost(1.85);
      assert.equal(1.85, settingsBill.getCallCost());
  
      let settingsBill2 = billWithSettings();
      settingsBill2.setCallCost(2.75);
      assert.equal(2.75, settingsBill2.getCallCost());
    });
    it("It should be able to set the sms cost", function () {
      let settingsBill = billWithSettings();
  
      settingsBill.setSmsCost(0.85);
      assert.equal(0.85, settingsBill.getSmsCost());
  
      let settingsBill2 = billWithSettings();
      settingsBill2.setSmsCost(0.75);
      assert.equal(0.75, settingsBill2.getSmsCost());
    });
  
    it("It should be able to set the sms and call cost", function () {
      let settingsBill = billWithSettings();
  
      settingsBill.setCallCost(2.75);
      settingsBill.setSmsCost(0.85);
  
      assert.equal(2.75, settingsBill.getCallCost());
      assert.equal(0.85, settingsBill.getSmsCost());
  
      let settingsBill2 = billWithSettings();
  
      settingsBill2.setCallCost(1.75);
      settingsBill2.setSmsCost(0.65);
  
      assert.equal(1.75, settingsBill2.getCallCost());
      assert.equal(0.65, settingsBill2.getSmsCost());
  
    });
    it("It should be able to set the warning level", function () {
      let settingsBill = billWithSettings();
  
      settingsBill.setWarningLevel(20)
      assert.equal(20, settingsBill.getWarningLevel());
  
  
    });
  
    it("It should be able to set the critical level", function () {
      let settingsBill = billWithSettings();
  
      settingsBill.setCriticalLevel(30)
      assert.equal(30, settingsBill.getCriticalLevel());
  
  
    });
  
    it("It should be able to set the warning & critical level", function () {
      let settingsBill = billWithSettings();
  
      settingsBill.setCriticalLevel(25)
      settingsBill.setWarningLevel(15)
  
      assert.equal(25, settingsBill.getCriticalLevel());
      assert.equal(15, settingsBill.getWarningLevel());
  
  
    });
  
  
    describe("use values", function () {
      it("should be able to use the call cost set", function () {
        let settingsBill = billWithSettings();
  
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(2.25)
        settingsBill.setSmsCost(1.00)
  
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
  
        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(2.25, settingsBill.getTotalCallCost());
        assert.equal(1, settingsBill.getTotalSmsCost());
  
      });
  
      it("should be able to use the call cost set for 2 calls at 1.35 each", function () {
        let settingsBill = billWithSettings();
  
  
        settingsBill.setCallCost(1.35)
        settingsBill.setSmsCost(0.85)
  
        settingsBill.makeCall();
        settingsBill.makeCall();
  
  
        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(1.35, settingsBill.getTotalCallCost());
        assert.equal(0.85, settingsBill.getTotalSmsCost());
  
      });
  
      it("should be able to send 2 sms's at 0.85 each", function () {
        let settingsBill = billWithSettings();
  
  
        settingsBill.setCallCost(1.35)
        settingsBill.setSmsCost(0.85)
  
        settingsBill.sendSms();
        settingsBill.sendSms();
  
  
        assert.equal(0.00, settingsBill.getTotalCost());
        assert.equal(1.35, settingsBill.getTotalCallCost());
        assert.equal(0.85, settingsBill.getTotalSmsCost());
  
      });
  
      it("should be able to send 2 sms's at 0.85 each & make 1 call at 1.35", function () {
        let settingsBill = billWithSettings();
  
  
        settingsBill.setCallCost(1.35)
        settingsBill.setSmsCost(0.85)
  
        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.sendSms();
  
  
        assert.equal(1.35, settingsBill.getTotalCost());
        assert.equal(1.35, settingsBill.getTotalCallCost());
        assert.equal(0.85, settingsBill.getTotalSmsCost());
  
      });
    });
  
    describe("warning & critical level", function () {
  
      it("it should return a class name of 'warning' if waring level is reached", function () {
        let settingsBill = billWithSettings();
        
  
        settingsBill.setCallCost(1.35)
        settingsBill.setSmsCost(0.85)
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);
  
  
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
  
  
        assert.equal("warning", settingsBill.totalClassName());
  
  
      });
  
      it("it should return a class name of 'critical' if critical level has been reached", function () {
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLevel(10);
  
        settingsBill.setCallCost(2.50)
        settingsBill.getSmsCost(0.85)
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);
  
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
  
  
        assert.equal("warning", settingsBill.totalClassName());
  
  
      });
      it("it should stop the total call cost from increasing when tge critical level has been reached", function () {
        let settingsBill = billWithSettings();
  
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(2.50)
        settingsBill.getSmsCost(0.85)
        settingsBill.setCriticalLevel(10);
  
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
  
        assert.equal("warning", settingsBill.totalClassName());
        assert.equal(2.50, settingsBill.getTotalCallCost());
  
  
      });
  
      it("it should allow the total to increase after reaching the critical level & then upping the critical level", function () {
        let settingsBill = billWithSettings();
  
  
        settingsBill.setCallCost(2.50)
        settingsBill.getSmsCost(0.85)
        settingsBill.setWarningLevel(8)
        settingsBill.setCriticalLevel(10);
  
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
  
        assert.equal("warning", settingsBill.totalClassName());
        assert.equal(2.50, settingsBill.getTotalCallCost());
  
        settingsBill.setCriticalLevel(20);
        assert.equal("warning", settingsBill.totalClassName());
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(2.50, settingsBill.getTotalCallCost());
      });
  
  
    });
  });
  