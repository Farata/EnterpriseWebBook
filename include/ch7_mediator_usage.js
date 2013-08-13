define(["mediator", "pricePanel", "orderPanel"], function(Mediator, PricePanel, OrderPanel) {   // <1>
    "use strict";
    return (function() {
        Mediator.registerComponent("pricePanel", new PricePanel());     // <2>
        Mediator.registerComponent("orderPanel", new OrderPanel());

        document.getElementById("priceInput").addEventListener("click", function() {   // <3>
            if ( !! this.value) {
                return Mediator.broadcast("BidClick", [this.value]);     // <4>
            }
        });
        
    })();
});