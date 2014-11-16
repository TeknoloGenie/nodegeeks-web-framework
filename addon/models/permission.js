import DS from "ember-data";

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({

  name: attr('string'),

  level: attr('number'),

  profiles: hasMany('profile'),

  routes: hasMany('route')

});
