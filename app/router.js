import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
	this.resource('login');
	this.resource('auth', {path: ''}, function(){
		this.resource('register');
		this.resource('messages');
			this.resource('message', { path: 'message/:message_id' });

	});
});

export default Router;
