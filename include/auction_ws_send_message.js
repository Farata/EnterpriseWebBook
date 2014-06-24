var getAuctionsList = function() {
    'use strict';
    var auctionListMessage = {
        type: 'AUCTIONS_LIST',
        data: 'gime',
        auctionId: '-1'
    };    <1>
    if (webSocket.readyState === 1) {   <2>
        webSocket.send(JSON.stringify(auctionListMessage));
    } else {
        console.log('offline');
    }
};