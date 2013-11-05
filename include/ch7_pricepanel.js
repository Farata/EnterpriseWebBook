define(function() {
    "use strict";
    return (function() {
        var mediator;

        function PricePanel() {
        }

        PricePanel.prototype.setMediator = function(m) {    // <1>
            mediator = m;
        };

        PricePanel.prototype.getMediator = function() {     // <2>
            return mediator;
        };

        PricePanel.prototype.onBidClick = function(currentPrice) {      // <3>
            console.log("Bid clicked on price " + currentPrice);
            this.getMediator().broadcast("PlaceBid", [currentPrice]);
        };

        PricePanel.prototype.onAskClick = function() {      // <4>
            console.log("Ask clicked");
        };

        return PricePanel;
    })();
});