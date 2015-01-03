import Ember from "ember";

var alias = Ember.computed.alias;

export default Ember.Mixin.create({

    classNames: ['input-group'],

    layout: Ember.Handlebars.compile([
        '<span class="input-group-addon">',
        ''
    ].join('\n'))

})