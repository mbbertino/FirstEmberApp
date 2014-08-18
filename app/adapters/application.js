// may need to add this into the index.html
// <!-- Firebase -->
// <script src="https://cdn.firebase.com/js/client/1.0.19/firebase.js"></script>
// <!-- EmberFire -->
// <script src="https://cdn.firebase.com/libs/emberfire/1.1.3/emberfire.min.js"></script>

// import DS from 'ember-data';

// import Ember from "ember";
// import DS from "ember-data";

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://glaring-fire-229.firebaseio.firebaseio.com')
});