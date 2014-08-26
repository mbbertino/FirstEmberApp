import Ember from 'ember';


export default Ember.ArrayController.extend({

  init: function() {
    this.set('message', Ember.Object.create());
  },
  actions: {
    publishPost: function() {
    	// try it without var newPost =  in front
      this.store.createRecord('message', {
        title: this.get('message.title'),
        body: this.get('message.body'),
        timestamp: new Date()
      }).save();
    },
   
    logout: function(){
    	this.get('controllers.login').send('logout')
    }
  }
});