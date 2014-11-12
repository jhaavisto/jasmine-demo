
var customMatchers = {
  toBeBatman: function(util, customEqualityTesters) {
    return {
      compare: function(actual) {
        var result = {};
        result.pass = actual.name() === "Mr. Clark Kent";
        if (result.pass) {
          result.message = "Expected " + actual.name() + " to be Batman";
        } else {
          result.message = "Expected " + actual.name() + " to be Batman, but he was not";
        }
        return result;
      }
    };
  }
};


describe('User might be Batman', function () {

  beforeEach(function () {
    user = new User();
    jasmine.addMatchers(customMatchers);
  });

  it("and Clark be tested", function() {
    user.setLastName('Kent');
    user.setFirstName('Clark');
    expect(user).toBeBatman()
  });

  it("and Robin be tested", function() {
    user.setLastName('Robin');
    user.setFirstName('Hood');
    expect(user).not.toBeBatman()
  });
});




