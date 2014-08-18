import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
	this.route('login')
	this.route('register')
});

export default Router;
