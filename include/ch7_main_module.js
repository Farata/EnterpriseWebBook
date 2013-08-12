define(["order!login", "order!donation", "order!svg-pie-chart", "modules/generic-module"], function() { // <1>
    "use strict";
    return (function() {
        var initModule, lazyLoadingEventHandlerFactory, module, modulesConfig, way_to_give, what_we_do, where_we_work, who_we_are, _i, _len;

        way_to_give = document.getElementById("way-to-give");
        what_we_do = document.getElementById("what-we-do");
        who_we_are = document.getElementById("who-we-are");
        where_we_work = document.getElementById("where-we-work");
        modulesConfig = [{      // <2>
            moduleId: "whoWeAre",
            button: who_we_are,
            containerId: "who-we-are-container",
            htmlContentUrl: "assets/html-includes/who-we-are.html"
        }, {
            moduleId: "whatWeDo",
            button: what_we_do,
            containerId: "what-we-do-container",
            htmlContentUrl: "assets/html-includes/what-we-do.html"
        }, {
            moduleId: "whereWeWork",
            button: where_we_work,
            containerId: "where-we-work-container",
            htmlContentUrl: "assets/html-includes/where-we-work.html"
        }, {
            moduleId: "wayToGive",
            button: way_to_give,
            containerId: "way-to-give-container",
            htmlContentUrl: "assets/html-includes/way-to-give.html"
        }];
        lazyLoadingEventHandlerFactory = function(moduleId, containerId, htmlContentPath) { // <3>
            return function(event) {
                var module;

                if (module === "loading") {
                    return;
                }
                if (typeof module !== "undefined" && module !== null) {
                    return module.render(event.target.id, containerId, htmlContentPath);
                } else {
                    module = "loading";
                    return require(["modules/generic-module"], function(GenericModule) {
                        module = new GenericModule(moduleId);
                        return module.render(event.target.id, containerId, htmlContentPath);
                    });
                }
            };
        };
        
        initModule = function(module) {     // <4>
            var handler;

            handler = lazyLoadingEventHandlerFactory(module.moduleId, 
                      module.containerId, module.htmlContentUrl);
            return module.button.addEventListener("click", handler, false);
        };

        for (_i = 0, _len = modulesConfig.length; _i < _len; _i++) {    // <5>
            module = modulesConfig[_i];
            initModule(module);
        }
        console.log("app is loaded");
    })();
});