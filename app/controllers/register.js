import Ember from "ember";

export default Ember.Controller.extend({
	actions: {
    createUser: function() {    	
    	this.controllerFor('login').createUser(this.email, this.password)
    }
  }
});