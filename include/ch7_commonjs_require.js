define(function(require, exports, module) {   <1>
    "use strict";
    module.exports = (function() {        <2>

        var dependency = require("dependencyId");     <3>

        function AuctionDTO(_arg) {
            this.auctionState = _arg.auctionState;
            this.item = _arg.item;
            this.bestBid = _arg.bestBid;
            this.auctionId = _arg.auctionId;
            dependency.doStuff();
        }

        AuctionDTO.prototype.toJson = function() {
            return JSON.stringify(this);
        };

        return AuctionDTO;
    })();
});