import Ember from "ember";

export default Ember.Controller.extend({

	init: function() {		
    this.authClient = new window.FirebaseSimpleLogin(new window.Firebase("https://glaring-fire-229.firebaseio.com"), function(error, user) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (user) {
      	// default logged in route
        this.redirectTransition()
      } else {
        // can add in another transition if needed
      }
    }.bind(this));
  },

  redirectTransition: function(transition) {  	
  	if (transition) {
      transition.retry();
    } else {
      // Default back to messages page
      this.transitionToRoute('messages')
    }
  },

	actions: {
    userLogin: function(email, password) {    	
    	console.log('woot')
    	this.authClient.login('password', {
			  email: email || this.email,
			  password: password || this.password
			  // rememberMe: remember
			}).then(this.redirectTransition(this.get('previousTransition')));			
    },

    logout: function() {    	
    	this.authClient.logout()
    },

    createUserRecord: function(user) {
      this.store.createRecord('user', {
        email: user.email,
        userID: user.id,
        dateJoined: new Date()
      }).save();          
    },

    createUser: function(email, password){
    	var that = this		  
	    this.authClient.createUser(email, password, function(error, user) {
			  if (error === null) 
			  	{
				  	that.send('createUserRecord', user)
				  	that.send('userLogin', email, password)
					} 
			  else 
			  	{
			  		console.log("Error creating user:", error);
			  	}
			});
	  }
  }
});