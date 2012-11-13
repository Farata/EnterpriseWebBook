var ws;
if(window.WebSocket) {    // <1>
    console.log("WebSocket object is supported in your browser");   

    ws = new WebSocket("ws://www.websockets.org/echo"); // <2>
    ws.onopen = function() { console.log("onopen"); 
    };  // <3> 
     
    ws.onmessage = function(e) {
        console.log("echo from server : " + e.data);  // <4>
    };

    ws.onclose = function() { // <5>
        output("onclose"); 
    };
    ws.onerror = function() { output("onerror");  // <6>
    };

} else {
    output("WebSocket object is not supported in your browser");
}