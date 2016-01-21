describe('isString', function(){
    it("will determine if input is a string", function(){
      expect(isString("string")).to.equal(true);
    });

    it("will determine if input is not a string", function(){
      expect(isString(5)).to.equal(false);
    });
});
