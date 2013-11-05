define(["otherContent"], function(otherContent) { // <1>
    var wayToGive;

    console.log("otherContent module is loaded");
    wayToGive = function() {
        return {
            render: function() {
                var dataUrl, newContainerID, whatWeDoButton;

                whatWeDoButton = "way-to-give";
                newContainerID = "way-to-give-container";
                dataUrl = "assets/html-includes/way-to-give.html";
                otherContent.getNewContent(whatWeDoButton, newContainerID, dataUrl); // <2>
                return console.log("way-to-give module is rendered");
            },
            init: function() {
                return console.log("way-to-give init");
            }
        };
    };
    return wayToGive; // <3>
});