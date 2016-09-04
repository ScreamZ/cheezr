var Router = require('falcor-router');
var Promise = require('promise');

var jsonGraph = require('falcor-json-graph');
var $ref = jsonGraph.ref;
var $error = jsonGraph.error;

var formatResult = require('./format-data')
var data = require('./data')

var CheezrRouterBase = Router.createClass([
  {
    // Query chunk to match
    route: "productsById[{integers:productIds}]['title', 'description', 'imageUrl']",

    // Query action (get, set, call)
    get: function (pathSet) {

      // Always return a Promise (the data retrieving is async)
      return new Promise((resolve, reject) => {

        // Here, it's up to us to define how we retrieve the data
        resolve(formatResult(data, pathSet))
      })
    }
  }
]);

var CheezrRouter = function() {
    CheezrRouterBase.call(this);
};
CheezrRouter.prototype = Object.create(CheezrRouterBase.prototype);

module.exports = function(userId) {
    return new CheezrRouter();
};
