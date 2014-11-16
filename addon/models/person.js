import DS from "ember-data";

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({

  firstName: attr('string'),

  lastName: attr('string'),

  aliasName: attr('string'),

  birthday: attr('date'),

  profile: belongsTo('profile')

});
