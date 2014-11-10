function User () {
}

User.prototype = {
 
  setFirstName: function(fname) {
    this.firstname = fname;
  },

  setLastName: function(lname) {
    this.lastname = lname;
  },

  name: function() {
    var ret = [];
    if (this.firstname) {
      ret.push(this.firstname);
    }
    if (this.lastname) {
      ret.push(this.lastname);
    }
    if(ret.length >= 2){
      ret.unshift('Mr.'); // side effect
    }
    return ret.join(' ');
  }
};
