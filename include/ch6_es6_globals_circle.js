(function(exports) {
    "use strict";

    function area(radius) {
        return Math.PI * radius * radius;
    }

    function circumference(radius) {
        return 2 * Math.PI * radius;
    }
    exports.circle.area = area;
    exports.circle.circumference = circumference;
})(window);