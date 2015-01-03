import Ember from "ember";

var get = Ember.get, set = Ember.set;

export default Ember.Mixin.create({


    tagName: alias('aliasTagName'),

    aliasTagName: null,

    args: undefined,

    classNameBindings: ['size', 'color'],

    action: null,

    icon: null,

    route: null,

    //targetObject: null,

    label: 'Button',

    buttonType: 'button',

    renderedLayoutTemplate: null,

    click: function() {

        var buttonType = get(this, 'buttonType'),
            route = get(this, 'route'),
            args = get(this, 'args'),
            action = get(this, 'action');

        if(action) {
            this.container.lookup('controller:'+get(this, 'targetObject')).send(action, args);
        } else if (route) {
            this.send("transitionTo", route, get(this, 'params'));
        }
    },

    style: 'btn-default',

    layout: function() {
        var layoutTemplate = get(this, 'renderedLayoutTemplate');
        return Ember.Handlebars.compile(layoutTemplate);
    }.property(),

    _setupButton: function(){
        this._super();
        var buttonType = get(this, 'buttonType'),
            self = this,
            layoutTemplate,
            style,
            tagName;

        switch(buttonType) {
            case 'split':
                style = 'btn-group';
                tagName = 'div';
                var classes = 'btn ' + get(self, 'style'),
                    icon = get(self, 'listItems.icon');
                layoutTemplate =    [
                    '<button type="button" class="'+classes+'">{{label}}</button>' ,
                    '<button type="button" class="'+classes+' dropdown-toggle" data-toggle="dropdown" aria-expanded="false">' ,
                    '<span class="caret"></span>' ,
                    '<span class="sr-only">Toggle dropdown</span>' ,
                    '</button>' ,
                    '<ul class="dropdown-menu" role="menu">' ,
                    '{{#each listItems}}' ,
                    '{{#if action}}' ,
                    '<li>' ,
                    '<button type="button" {{action action args}} class="btn btn-link"> ' ,
                    '{{#if icon}}<span {{bind-attr class=icon}} aria-hidden="true"></span>{{/if}} {{label}}' ,
                    '</button>' ,
                    '</li>' ,
                    '{{else}}' ,
                    '<li>' ,
                    '<button type="button" {{action "transitionTo" route params}} class="btn btn-link"> ' ,
                    '{{#if icon}} <span {{bind-attr class=icon}} aria-hidden="true"></span>{{/if}}{{label}}' ,
                    '</button>' ,
                    '</li>' ,
                    '{{/if}}' ,
                    '{{/each}}' ,
                    '</ul>'].join('');
                break;
            default:
                tagName = 'button';
                style = 'btn' +' '+ get(self, 'style');
                layoutTemplate =    '{{#if icon}} <span {{bind-attr class=icon}} aria-hidden="true"></span>{{/if}}{{label}}';
        }
        set(self, 'aliasTagName', tagName);
        set(self, 'style', style);
        set(self, 'renderedLayoutTemplate', layoutTemplate);

    }.on('init'),

    actions: {

        alert: function(string) {
            alert(string);
        },

        log: function(string) {
            console.log(string);
        },

        transitionTo: function(route, params) {
            this.container.lookup('route:application').transitionTo(route, params)
        }

    }
})