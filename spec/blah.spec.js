describe('musixmatch', function(){

  var mm = require('../mmeasy').create();

  it('should convert 00:22.00 to seconds', function(){
    var secs = mm.convert("00:22.00");
    expect(secs).toEqual(22.00);
  });
  
  it("should convert 00:36.00 to seconds", function(){
  	var secs = mm.convert("00:36.00");
  	expect(secs).toEqual(36.00);
  })
  
  it("should convert 01:43.00 to seconds", function(){
  	var secs = mm.convert("01:43.00");
  	expect(secs).toEqual(103.00);
  })
  

});

