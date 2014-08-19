import Ember from "ember";
import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({  
  firebase: new Firebase('https://glaring-fire-229.firebaseio.com')
});