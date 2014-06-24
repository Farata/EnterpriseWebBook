var ws;
(function(ws) {
    "use strict";
    if (window.WebSocket) {      <1>
        console.log("WebSocket object is supported in your browser");
        ws = new WebSocket("ws://www.websocket.org/echo");   <2>
        ws.onopen = function() {
            console.log("onopen");
        };    <3>
        ws.onmessage = function(e) {
            console.log("echo from server : " + e.data);   <4>
        };

        ws.onclose = function() {   <5>
            console.log("onclose");
        };
        ws.onerror = function() {
            console.log("onerror");    <6>
        };

    } else {
        console.log("WebSocket object is not supported in your browser");
    }
})(ws);