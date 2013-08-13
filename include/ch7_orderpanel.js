define(function () {
    "use strict";
    return (function () {
        var mediator;
        mediator = {};
        function OrderPanel() {
        }

        OrderPanel.prototype.getMediator = function () {        // <1>
            return mediator;
        };

        OrderPanel.prototype.setMediator = function (m) {
            mediator = m;
        };

        OrderPanel.prototype.onPlaceBid = function (price) {     // <2>
            console.log("price updated to " + price);
            var priceTextElement = document.getElementById("priceText");
            priceTextElement.value = price;
        };

        return OrderPanel;

    })();
});
