'use strict';

var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHeader(200, {
        "Content-Type": "application/json"
    });
    res.write(JSON.stringify({
        response: {
            message: "Hello World",
            timestamp: new Date()
        }
    }));
    res.end();
});

server.listen(8080, function(err) {
    if(err) console.log(err.message);
    else console.log('Server started on port 8080');
});