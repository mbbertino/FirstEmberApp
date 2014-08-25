import DS from 'ember-data';

export default DS.Model.extend({
	email: DS.attr('string'),
  userID: DS.attr('string'),
  dateJoined: DS.attr('number')
});
