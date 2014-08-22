import Ember from "ember";

export default Ember.Route.extend({
	needs: ['login'],

	beforeModel: function(transition) {
    var loginController = this.controllerFor('login'); 
    console.log(loginController.authed)   

    // if (!loginController.authed) {
	   //  // loginController.set('previousTransition', transition);
	   //  // this.transitionTo('login');
    // }
  },
});