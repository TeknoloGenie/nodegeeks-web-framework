import Ember from "ember";

var get = Ember.get;

export default Ember.Mixin.create({

    tagName: 'ul',

    classNames: ['dropdown-menu'],

    itemViewClass: Ember.View.extend({
        tagName: 'li',
        template: Ember.Handlebars.compile('<a role="menuitem" {{bind-attr href=view.content.href}}>{{view.content.label}}</a>')
    }),

    disabledViewClass: Ember.View.extend({
        tagName: 'li',
        classNames: ['disabled'],
        template: Ember.Handlebars.compile('{{view.content.label}}')
    }),

    itemWithIconViewClass: Ember.View.extend({
        tagName: 'li',
        template: Ember.Handlebars.compile('<a role="menuitem" {{bind-attr href=view.content.href}}>{{icon view.content.icon}} {{view.content.label}}</a>')
    }),

    disabledWithIconViewClass: Ember.View.extend({
        tagName: 'li',
        template: Ember.Handlebars.compile('{{icon view.content.icon}}{{view.content.label}}')
    }),

    _populateContent: function() {
        /**
         * TODO: eventually we need to populate the content of the menu here
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