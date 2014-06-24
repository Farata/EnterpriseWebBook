var myEventSource = (function() {
    'use strict';
    var eventSource;
    if ( !! window.EventSource) {
        eventSource =
            new EventSource
                ('http://localhost:8080/donate_web/api/donations/events');   <1>
    } else {
        // notify use that her browser doesn't support SSE
    }

    eventSource.addEventListener('open', function() {   <2>
        // Connection was opened.
    }, false);

    eventSource.addEventListener('create', function() {   <3>
        // do something with data
    }, false);

    eventSource.addEventListener('update', function() {   <4>
        // do something with data
    }, false);

    eventSource.addEventListener('error', function(e) {
        if (e.readyState === EventSource.CLOSED) {
            // Connection was closed.
        }
    }, false);

    return eventSource;
})();