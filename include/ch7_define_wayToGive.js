define(["newContentLoader"], function(contentLoader) { // <1>
    var wayToGive;

    console.log("way-to-give module is loaded");
    wayToGive = function() {
        return {
            render: function() {
                contentLoader.getNewContent("way-to-give", // <2>
                                            "way-to-give-container",
                                            "assets/html-includes/way-to-give.html");
                return console.log("way-to-give module is rendered");
            },
            init: function() {
                return console.log("way-to-give init");
            }
        };
    };
    return wayToGive;   // <3>
});