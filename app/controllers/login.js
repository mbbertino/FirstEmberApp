import Ember from "ember";

export default Ember.Controller.extend({
	authed: false,
	currentUser: null,

	init: function() {		
    this.authClient = new window.FirebaseSimpleLogin(new window.Firebase("https://glaring-fire-229.firebaseio.com"), function(error, user) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (user) {
        this.set('authed', true);
        this.set('currentUser', user);
      } else {
        this.set('authed', false);      
      }
    }.bind(this));
  },

  checkAuth: function (){
  	console.log(
  	this.get('currentUser')
  		)
  },

	actions: {
    userLogin: function(email, password) {    	
    	this.authClient.login('password', {
			  email: email || this.email,
			  password: password || this.password
			  // rememberMe: remember
			});

			var previousTransition = this.get('previousTransition');
    	if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to messages page
        this.transitionToRoute('messages');
      }
    },

    logout: function() {    	
    	this.authClient.logout()
    },

    createUser: function(email, password){
	    this.authClient.createUser(email, password, function(error, user) {
			  if (error === null) 
			  	{
				  	console.log("User created successfully:", user);
				  	this.userLogin(email, password)
					} 

			  // Add in new user once authentication is fixed.
			  // --------------------------------------------------------
			  // var newUserRecord = this.store.createRecord('user', {
		    //     email: user.email, // or 
		    //     // email: user.getEmail(), 
		    // 		 // providerName: user.getProvider().name() // this is for the login type (pw, twitter, fb, etc)
		    //     uid: user.id, // or 
		    //     // uid: user.getUserId(),
		    //     timestamp: new Date()
		    //   }).save();
			  // --------------------------------------------------------
			  else 
			  	{
			  		console.log("Error creating user:", error);
			  	}
			});
	  }
  }
});