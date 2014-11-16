import DS from "ember-data";

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({

  name: attr('string'),

  path: attr('string'),

  isNested: attr('boolean'),

  resource: belongsTo('resource'),

  page: belongsTo('page'),

  permissions: hasMany('permission')

});
