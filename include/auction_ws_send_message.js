var getAuctionsList = function() {
        var auctionListMessage = new AuctionMessage("AUCTIONS_LIST", 'gime', "-1"); // <1>
        if(webSocket.readyState === 1) {        // <2>
            webSocket.send(auctionMessage.toJson());
        } else {
            return console.log("offline");
        }
    };