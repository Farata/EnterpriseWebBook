(function(circle) {
    "use strict";
    var area = circle.area;
    var circumference = circle.circumference;

    console.log("Area of the circle: " + area(2) + " meter squared");
    console.log("Circumference of the circle: " + circumference(5) + " meters");

})(window.circle);