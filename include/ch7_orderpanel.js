define(function () {
    "use strict";
    return (function () {
        var mediator;
        mediator = {};
        function OrderPanel() {
        }

        OrderPanel.prototype.onPriceUpdate = function (price) {
            console.log("price updated to " + price);
        };

        OrderPanel.prototype.getMediator = function () {
            return mediator;
        };

        OrderPanel.prototype.setMediator = function (m) {
            mediator = m;
        };

        return OrderPanel;

    })();
});
