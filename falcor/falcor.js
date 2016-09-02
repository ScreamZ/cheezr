// This file starts the server and exposes the Router at /model.json
var express = require('express');
var app = express();
var addFalcorToServer = require('./falcor-express');

app.use(express.static('.'));
addFalcorToServer(app);

var server = app.listen(9090, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("navigate to http://localhost:9090");
});
