define(["mediator"], function() {
    "use strict";
    return (function() {
        var mediator = {};

        function PricePanel() {
        }

        PricePanel.prototype.onBidClick = function(currentPrice) {
            console.log("Bid clicked on price " + currentPrice);
            this.getMediator().broadcast("PriceUpdate", [currentPrice]);
        };

        PricePanel.prototype.onAskClick = function() {
            console.log("Ask clicked");
        };

        PricePanel.prototype.getMediator = function() {
            return mediator;
        };

        PricePanel.prototype.setMediator = function(m) {
            mediator = m;
        };

        return PricePanel;
    })();
});