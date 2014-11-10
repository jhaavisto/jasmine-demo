describe('User', function () {
  var user;
  beforeEach(function () {
    user = new User();
  });

  it("should create new instance", function() {
    expect(user).toBeDefined();
  });

  it("should set fname separately", function() {
    user.setFirstName('Clark');
    expect(user.name()).toBe('Clark')
  });

  it("should set fname separately", function() {
    user.setLastName('Kent');
    expect(user.name()).toBe('Kent')
  });

  it("should catenate full name", function() {
    user.setLastName('Kent');
    user.setFirstName('Clark');
    expect(user.name()).toBe('Mr. Clark Kent')
  });
});
