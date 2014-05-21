require([], function() { // <1>
  'use strict';
  return (function() {
    var lazyLoadingEventHandlerFactory, wayToGiveHandleClick, wayToGiveModule, 
        way_to_give;
    way_to_give = document.getElementById('way-to-give');

    wayToGiveModule = null; // <2>

    lazyLoadingEventHandlerFactory = function(module, modulePath) {
      var clickEventHandler;
      clickEventHandler = function(event) {
        console.log(event.target);
        if (module === 'loading') { // <3>
          return;
        }
        if (module !== null) {
          return module.startAuction(); // <4>
        } else {
          module = 'loading'; // <5>
          return require([modulePath], function(ModuleObject) { // <6>
            module = new ModuleObject();
            return module.render(); // <7>
          });
        }
      };
      return clickEventHandler;
    };
    wayToGiveHandleClick = lazyLoadingEventHandlerFactory(wayToGiveModule, 
                                                          'modules/way-to-give');

    way_to_give.addEventListener('click', wayToGiveHandleClick, false); // <8>
  })();
});