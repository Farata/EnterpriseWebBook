var source;
if( !! window.EventSource) {
    source = new EventSource('http://localhost:8080/donate_web/api/donations/events');  // <1>
} else {
    // notify use that her browser doesn't support SSE
}

source.addEventListener('open', function(e) {                   // <2>
    // Connection was opened.
}, false);

source.addEventListener('create', function(e) {                 // <3>
    // do something with data
}, false);

source.addEventListener('update', function(e) {                 // <4>
    // do something with data
}, false);

source.addEventListener('error', function(e) {
    if(e.readyState == EventSource.CLOSED) {
        // Connection was closed.
    }
}, false);