define(function() {
    "use strict";
    return (function() {
        var components = {};    // <1>

        function Mediator() {}

        Mediator.registerComponent = function(name, component) { // <2>
            var cmp;
            for (cmp in components) {
                if (components[cmp] === component) {
                    break;
                }
            }
            component.setMediator(Mediator);            // <3>
            components[name] = component;               // <4>
        };

        Mediator.broadcast = function(event, args, source) {    // <5>
            var cmp;
            if (!event) {
                return;
            }
            args = args || [];
            for (cmp in components) {
                if (typeof components[cmp]["on" + event] === "function") {      // <6>
                    source = source || components[cmp];
                    components[cmp]["on" + event].apply(source, args);
                }
            }
        };
        return Mediator;
    })();
});