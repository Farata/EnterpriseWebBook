var module;
var buttonClickHandler = function(event) {
    "use strict";
  if (module === "loading") {       // <1>
    return;
  }
  if (module !== null) {        // <2>
    module.render();
  } else {
    module = "loading";         // <3>
    require(["modules/widget1"], function(ModuleObject) { // <4>
      module = new ModuleObject();
      module.render();
    });
  }
};