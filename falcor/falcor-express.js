var bodyParser = require('body-parser');
var FalcorServer = require('falcor-express');

modules.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/model.json', FalcorServer.dataSourceRoute(function(req, res) {
      return require('./falcor-routes')()
  }));
}
