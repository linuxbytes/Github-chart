var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.use('/', express.static(__dirname + '/'));

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry error because is not here :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});