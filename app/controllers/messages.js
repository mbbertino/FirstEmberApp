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
      this.store.createRecord('message', {
        title: this.title,
        body: this.body,
        timestamp: new Date()
      }).save();
    },
   
    logout: function(){
    	this.get('controllers.login').send('logout')
    }
  }
});