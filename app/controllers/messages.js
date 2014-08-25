import Ember from 'ember';


export default Ember.ArrayController.extend({
	needs: ['login'],

  init: function() {
    this.set('message', Ember.Object.create());
  },
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts message by timestamp
  actions: {
    publishPost: function() {
    	// try it without var newPost =  in front
      this.store.createRecord('message', {
        title: this.get('message.title'),
        body: this.get('message.body'),
        timestamp: new Date()
      }).save();
    },

    // Will need to move this to the auth parent controller after testing
    // ----------------------------------------------------
    logout: function(){

    	this.get('controllers.login').authClient.logout()
    }
    // ----------------------------------------------------
  }
});