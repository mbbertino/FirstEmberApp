import Ember from "ember";

export default Ember.Controller.extend({
	actions: {
    createUser: function() {
    	console.log(this.email);
    	console.log(this.password);
    	var email = this.email;
      var password = this.password;

    	var auth = new FirebaseSimpleLogin(new Firebase("https://glaring-fire-229.firebaseio.com"), function(error, user) {})
      auth.createUser(email, password, function(error, user) {
			  if (error === null) {
			    console.log("User created successfully:", user);
			  } else {
			    console.log("Error creating user:", error);
			  }
			});
    }
  }
});