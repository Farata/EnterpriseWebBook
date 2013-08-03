define(function() {
    "use strict";
    return (function() {
        var components;

        function Mediator() {}

        components = {};

        Mediator.registerComponent = function(name, component) { // <1>
            var cmp;
            for (cmp in components) {
                if (components[cmp] === component) {
                    break;
                }
            }
            component.setMediator(Mediator);            // <2>
            components[name] = component;               // <3>
        };

        Mediator.broadcast = function(event, args, source) {
            var cmp;
            if (!event) {
                return;
            }
            args = args || [];
            for (cmp in components) {
                if (typeof components[cmp]["on" + event] === "function") {      // <4>
                    source = source || components[cmp];
                    components[cmp]["on" + event].apply(source, args);
                }
            }
        };
        return Mediator;
    })();
});