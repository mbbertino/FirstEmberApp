import Ember from "ember";

export default Ember.Controller.extend({
	needs: ['login'],

	actions: {
    createUser: function() {
    	this.get('controllers.login').send('createUser', this.email, this.password)
    }
  }
});