'use strict';

var http = require("http");

var response = {
    value: 'initial'
};
    

var server = http.createServer(function(req, res) {
    response.value = req.url;
    res.statusCode = 200;
    setTimeout(function() {
        res.end(response.value);
    }, 2000);
});

server.listen(8080, function(err) {
    if(err) console.log(err.message);
    else console.log('Server started on port 8080');
});