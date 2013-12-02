 if (window.WebSocket) {
   webSocket = new WebSocket("ws://localhost:8080/child-auction/auction");
   webSocket.onopen = function() {
     console.log("connection open..."); //<1>
     getAuctionsList();
   };
   webSocket.onclose = function(closeEvent) {
     // notify user that connection was closed
     console.log("close code " + closeEvent.code);
   };
   webSocket.onmessage = function(messageEvent) {
     console.log("data from server: " + messageEvent.data);
     if (typeof messageEvent.data === "string") {
       handleMessage(messageEvent.data);
     }
   };
   webSocket.onerror = function() {
     // notify user about connection error
     console.log("websocket error");
   };
 }