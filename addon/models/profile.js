import DS from "ember-data";

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({

  email: attr('string'),

  login: attr('string'),

  password: attr('string'),

  token: attr('string'),

  isActive: attr('boolean'),

  permission: belongsTo('permission'),

  person: belongsTo('person'),

  name: function() {
    return get(this, 'person.firstName') + " " + get(this, 'person.lastName');
  }.property('person.firstName', 'person.lastName')

});
