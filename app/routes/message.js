import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return store.find('message', params.message_id);
  }
});