define(["newContentLoader"], function(contentLoader) {       <1>
    "use strict";
    var genericModule;

    genericModule = function(moduleId) {      <2>
        return {
            render: function(button, containerId, dataUrl) {
                contentLoader.getNewContent(button, containerId, dataUrl);    <3>
                console.log("Module " + moduleId + " is rendered...");
            }
        };
    };
    return genericModule;
});