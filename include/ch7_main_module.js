define(['login',
    'donation',
    'campaigns-map',
    'svg-pie-chart',
    'modules/generic-module'  // <1>
], function() {
    var initComponent, onDemandLoadingClickHandlerFactory;
    onDemandLoadingClickHandlerFactory = function(config) {
        return function(event) {  // <2>
            if (config.amdInstance === 'loading') {
                return;
            }
            if (config.amdInstance != null) {
                config.amdInstance.render(event.target.id, config.containerId, config.viewUrl);
            } else {
                config.amdInstance = 'loading';
                require(['modules/generic-module'], function(GenericModule) {
                    var moduleInstance;
                    moduleInstance = new GenericModule(config.moduleId);
                    moduleInstance.render(event.target.id, config.containerId, config.viewUrl);
                    config.amdInstance = moduleInstance;
                });
            }
        };
    };
    initComponent = function(config) {
        config.button.addEventListener('click',
                                       onDemandLoadingClickHandlerFactory(config), // <3>
                                       false);
    };
    return (function() {
        var componentConfig,
            componentConfigArray,
            way_to_give, what_we_do,
            where_we_work,
            who_we_are, _i, _len;
        way_to_give = document.getElementById('way-to-give');
        what_we_do = document.getElementById('what-we-do');
        who_we_are = document.getElementById('who-we-are');
        where_we_work = document.getElementById('where-we-work');
        componentConfigArray = [{       // <4>
            moduleId: 'whoWeAre',
            button: who_we_are,
            containerId: 'who-we-are-container',
            viewUrl: 'assets/html-includes/who-we-are.html'
        }, {
            moduleId: 'whatWeDo',
            button: what_we_do,
            containerId: 'what-we-do-container',
            viewUrl: 'assets/html-includes/what-we-do.html'
        }, {
            moduleId: 'whereWeWork',
            button: where_we_work,
            containerId: 'where-we-work-container',
            viewUrl: 'assets/html-includes/where-we-work.html'
        }, {
            moduleId: 'wayToGive',
            button: way_to_give,
            containerId: 'way-to-give-container',
            viewUrl: 'assets/html-includes/way-to-give.html'
        }];
        for (_i = 0, _len = componentConfigArray.length; _i < _len; _i++) {
            componentConfig = componentConfigArray[_i];
            initComponent(componentConfig); // <5>
        }
        console.log('app is loaded');
    })();
});