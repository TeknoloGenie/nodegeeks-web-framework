import DS from "ember-data";

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({

  description: attr('string'),

  name: attr('string'),

  timezone: attr('string'),

  url: attr('string'),

  logo: attr('file')

});
