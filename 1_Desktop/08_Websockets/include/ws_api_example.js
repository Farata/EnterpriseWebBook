var ws;
if(window.WebSocket) {   
    output("WebSocket supported in your browser");   

    ws = new WebSocket("ws://www.websockets.org/echo");

    // Set event handlers.
    ws.onopen = function() { output("onopen"); 
    };   

    ws.onmessage = function(e) {     
        // e.data contains received string.
             output("echo from server : " + e.data);
    };

    ws.onclose = function() {
        output("onclose"); 
    };
    ws.onerror = function() { output("onerror"); 
    };

} else {
    output("WebSocket not supported in your browser");
}