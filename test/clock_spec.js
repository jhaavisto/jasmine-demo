describe('timeOuts', function () {
  
  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("causes a timeout to be called synchronously", function() {
    
    setTimeout(function() {
      timerCallback();
    }, 100);

    jasmine.clock().tick(50);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(51);

    expect(timerCallback).toHaveBeenCalled();
  });

});
