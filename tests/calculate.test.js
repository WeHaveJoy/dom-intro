describe("The calculate bill factory function", function () {
    it("should be able to set call cost", function () {
        
        assert.equal(8.25, totalPhoneBill('call,call,call'));
    })

        it("should be able to set sms cost", function () {
            
            assert.equal(3, totalPhoneBill('sms,sms,sms,sms'));
        })

});