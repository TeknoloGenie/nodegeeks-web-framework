import Ember from "ember";

var alias = Ember.computed.alias;

export default Ember.Mixin.create({

    classNames: ['form-control'],

    property: alias('value')

})