import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
	this.route('login');
	this.route('register');
	this.resource('messages');
		this.route('message', { path: '/:message_id' });
});

export default Router;
