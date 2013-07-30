define(function(require, exports, module) {
    "use strict";
    var AuctionDTO;
    module.exports = AuctionDTO = (function() {

        function AuctionDTO(_arg) {
            this.auctionState = _arg.auctionState;
            this.item = _arg.item;
            this.bestBid = _arg.bestBid;
            this.auctionId = _arg.auctionId;
        }

        AuctionDTO.prototype.toJson = function() {
            return JSON.stringify(this);
        };

        return AuctionDTO;
    })();

    return AuctionDTO;
});