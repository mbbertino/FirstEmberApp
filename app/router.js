import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
	this.resource('login');
	this.resource('register');
	this.resource('messages');
		this.route('message', { path: 'messages/:message_id' });
});

export default Router;
