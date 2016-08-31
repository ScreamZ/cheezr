// This file starts the server and exposes the Router at /model.json
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var FalcorServer = require('falcor-express');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('.'));

// Simple middleware to handle get/post
app.use('/model.json', FalcorServer.dataSourceRoute(function(req, res) {
    // Passing in the user ID, this should be retrieved via some auth system
    return require('./falcor-routes')()
}));

app.use(express.static('.'));

var server = app.listen(9090, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("navigate to http://localhost:9090");
});
