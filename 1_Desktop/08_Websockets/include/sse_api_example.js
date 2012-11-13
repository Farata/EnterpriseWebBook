var source;
if( !! window.EventSource) {
    source = new EventSource('/donate_web/api/donations/events');  // <1>
} else {
    console.log("sse not supported")
}

source.addEventListener('open', function(e) {                   // <2>
    // Connection was opened.
}, false);

source.addEventListener('create', function(e) {                 // <3>
    console.log(e.data);
}, false);

source.addEventListener('remove', function(e) {                 // <4>
    console.log(e.data);
}, false);

source.addEventListener('error', function(e) {
    if(e.readyState == EventSource.CLOSED) {
        // Connection was closed.
    }
}, false);