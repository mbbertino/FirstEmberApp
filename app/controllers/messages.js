import Ember from 'ember';


export default Ember.ArrayController.extend({

  init: function() {
    this.set('message', Ember.Object.create());
  },
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts message by timestamp
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('message', {
        title: this.get('message.title'),
        body: this.get('message.body'),
        timestamp: new Date()
      });
      newPost.save();
    }
  }
});