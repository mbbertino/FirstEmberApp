import Ember from "ember";

export default Ember.Route.extend({
	beforeModel: function () {
		this.transitionTo('login')
	},
	init: function () {
	}
});