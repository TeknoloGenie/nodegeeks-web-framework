import DS from "ember-data";

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({

  settings: belongsTo('settings'),

  analytics: belongsTo('analytics'),

  administrator: belongsTo('profile')

});
