import Ember from "ember";

var get = Ember.get;

export default Ember.Mixin.create({

    tagName: 'ul',

    classNames: ['list-group'],

    itemViewClass: Ember.View.extend({
        tagName: 'li',
        classNames: ['list-group-item'],
        template: Ember.Handlebars.compile('<a {{bind-attr href=view.content.href}}>{{view.content.label}}</a>')
    }),

    linkItemViewClass: Ember.View.extend({
        tagName: 'a',
        classNames: ['list-group-item']
    }),

    disabledViewClass: Ember.View.extend({
        tagName: 'li',
        classNames: ['list-group-item'],
        template: Ember.Handlebars.compile('{{view.content.label}}')
    }),

    itemWithIconViewClass: Ember.View.extend({
        tagName: 'li',
        classNames: ['list-group-item'],
        template: Ember.Handlebars.compile('<a {{bind-attr href=view.content.href}}>{{view.content.label}}</a>')
    }),

    disabledWithIconViewClass: Ember.View.extend({
        tagName: 'li',
        classNames: ['list-group-item'],
        template: Ember.Handlebars.compile('{{icon view.content.icon}}{{view.content.label}}')
    }),

    _populateContent: function() {
        /**
         * TODO: eventually we need to populate the content of the breadcrumb here
         * taking into consideration if its a "historical" or "hierarchy" type
         * for now a content attribute is set in the template through the helper
         */
    }.on('willInsertElement'),

    createChildView: function(viewClass, attrs) {
        var ac = attrs.content;
        if (ac.isDisabled && !ac.hasIcon) {
            viewClass = get(this, 'disabledViewClass');
        } else if(ac.isDisabled && ac.hasIcon) {
            viewClass = get(this, 'disabledWithIconViewClass');
        } else if(ac.hasIcon) {
            viewClass = get(this, 'itemWithIconViewClass');
        } else {
            viewClass = get(this, 'itemViewClass');
        }
        return this._super(viewClass, attrs);
    }

});