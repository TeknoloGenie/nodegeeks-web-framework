import Ember from "ember";

var set = Ember.set,
    get = Ember.get;

export default Ember.Mixin.create({

    tagName: 'span',

    library: 'glyphicon',

    classNameBindings: ['library', 'icon']

});