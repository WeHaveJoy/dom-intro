describe('this test' , function(){
    it('should be able to set the call cost' , function(){
        let settingsBill = billWithSettings();
            settingsBill.setCallCost(1.85);
            assert.equal(1.85, settingsBill.getCallCost());

            settingsBill.setCallCost(2.75);
            assert.equal(2.75, settingsBill.getCallCost());
    });

    it('should be able to set the sms cost' , function(){
        let settingsBill2 = billWithSettings();
            settingsBill2.setSmsCost(0.85);
            assert.equal(0.85, settingsBill2.getCallCost());

            settingsBill2.setSmsCost(0.75);
            assert.equal(0.75, settingsBill2.getSmsCost());

});

it('should be able to set the sms and call cost' , function(){
    let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);
      
        assert.equal(2.75, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

    let settingsBill2 = billWithSettings();
        settingsBill.setCallCost(1.75);
        settingsBill.setSmsCost(0.65);
    
        assert.equal(1.75, settingsBill.getCallCost());
        assert.equal(0.65, settingsBill.getSmsCost());   

});

it('should be able to set the warning level and the call cost' , function(){
    let settingsBill = billWithSettings();

        settingsBill.setWarningLevel(20);
       
      
        assert.equal(20, settingsBill.getWarningLevel());
        assert.equal(2.75, settingsBill.getCallCost());


    });

    it('should be able to set the critical level' , function(){
        let settingsBill = billWithSettings();
    
            settingsBill.setCriticalLevel(30);
           
          
            assert.equal(30, settingsBill.getCriticalLevel());
       
            
        });

        it('should be able to set the critical level & warning level' , function(){
            let settingsBill = billWithSettings();
        
             settingsBill.setWarningLevel(15);   
             settingsBill.setCriticalLevel(25);
               
                assert.equal(15, settingsBill.getWarningLevel());
                assert.equal(25, settingsBill.getCriticalLevel());


});       

});

describe('this test' , function(){
    it('should use the call cost set' , function(){
        let settingsBill = billWithSettings();

            settingsBill.setSmsCost(0.85);
            settingsBill.setCallCost(2.25);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(6.75, settingsBill.getTotalCost());
            assert.equal(6.75, settingsBill.getTotalCallCost());
            assert.equal(0, settingsBill.getTotalSmsCost());

            
        });

        it('should be able to use the call cost set for 2 calls at 1.35 each' , function(){
            let settingsBill = billWithSettings();
        
            settingsBill.setSmsCost(0.85);
            settingsBill.setCallCost(1.35);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(2.70, settingsBill.getTotalCost());
            assert.equal(2.70, settingsBill.getTotalCallCost());
            assert.equal(0, settingsBill.getTotalSmsCost());



        });

        it("should be able to send 2 sms's at 0.85 each" , function(){
            let settingsBill = billWithSettings();
        
            settingsBill.setSmsCost(0.85);
            settingsBill.setCallCost(1.35);

            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(1.70, settingsBill.getTotalCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
            assert.equal(0, settingsBill.getTotalCallCost());



        });

        it("should be able to send 2 sms's at 0.85 each & make 1 call at 1.35" , function(){
            let settingsBill = billWithSettings();
        
            settingsBill.setSmsCost(0.85);
            settingsBill.setCallCost(1.35);

            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();

            assert.equal(3.05, settingsBill.getTotalCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
            assert.equal(1.35, settingsBill.getTotalCallCost());

    });
});


describe("warning & critical level", function(){

    it("it should return the class name of 'warning' if the warning level has been reached", function(){
       let settingsBill = billWithSettings;
       
       settingsBill.setSmsCost(0.85);
       settingsBill.setCallCost(1.35);
        settingsBill.setWarningLevel(5);

       settingsBill.makeCall();   
       settingsBill.makeCall(); 
       settingsBill.makeCall();   
       settingsBill.makeCall();   
  

        assert.equal("warning", settingsBill.totalClassName());

    });

        it("it should return the class name of 'critical' if the critical level has been reached", function(){
            let settingsBill = billWithSettings;
            
            settingsBill.setSmsCost(0.85);
            settingsBill.setCallCost(2.50);
             settingsBill.setCriticalLevel(10);
     
            settingsBill.makeCall();   
            settingsBill.makeCall(); 
            settingsBill.makeCall();   
            settingsBill.makeCall();   
       
     
             assert.equal("critical", settingsBill.totalClassName());

            });

        it("it should stop the Total Call cost from increasing when the critical level has been reached", function(){
                let settingsBill = billWithSettigs;
                
                settingsBill.setSmsCost(0.85);
                settingsBill.setCallCost(2.50);
                settingsBill.setCriticalLevel(10);
         
                settingsBill.makeCall();   
                settingsBill.makeCall(); 
                settingsBill.makeCall();   
                settingsBill.makeCall();   
                settingsBill.makeCall();  
           
         
                 assert.equal("critical", settingsBill.totalClassName());
                 assert.equal(10, settingsBill.getTotalCallCost());
         
     
});
});    
