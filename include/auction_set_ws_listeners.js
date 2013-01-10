 if(window.WebSocket) {
   webSocket = new WebSocket("ws://savesickchild.org:8080/project-16-websocket-auction//child-auction/auction");
   webSocket.onopen = function() {
     console.log("connection open...");         //<1>
     getAuctionsList();
   };
   webSocket.onclose = function(closeEvent) {
      // notify user that connection was closed
     console.log("close code " + closeEvent.code);
   };
   webSocket.onmessage = function(messageEvent) {
     console.log("data from server: " + messageEvent.data);
     if(typeof messageEvent.data === "string") {
       handleMessage(messageEvent.data);
     }
   };
   return webSocket.onerror = function() {
    // notify user about connection error
     console.log("websocket error");
   };
 }