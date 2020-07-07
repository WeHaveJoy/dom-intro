describe("The Text bill factory function", function () {
    it("should be able to add call cost", function () {
        
        assert.equal(13.75, totalPhoneBill('call,call,call,call,call'));
    })

        it("should be able to add sms cost", function () {
            
            assert.equal(4.50, totalPhoneBill('sms,sms,sms,sms,sms,sms'));
        })
    
});