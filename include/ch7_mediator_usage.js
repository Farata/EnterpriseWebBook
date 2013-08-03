define(["mediator", "pricePanel", "orderPanel"], function(Mediator, PricePanel, OrderPanel) {
    "use strict";
    return (function() {
        document.getElementById("priceInput").addEventListener("change", function() {   // <1>
            if ( !! this.value) {
                return Mediator.broadcast("BidClick", [this.value]);     // <2>
            }
        });
        Mediator.registerComponent("pricePanel", new PricePanel());     // <3>
        Mediator.registerComponent("orderPanel", new OrderPanel());
    })();
});