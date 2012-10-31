var dataStream = new EventSource("http://www.example.com"); // <1>

dataStream.onopen = function(evt) {         // <2>
    console.log("open");
}
dataStream.onerror = function(evt) {
    console.log("error");
};

dataStream.onmessage = function(evt) {      // <3>
    // Process message
    console.log("message: " + evt.data);
}