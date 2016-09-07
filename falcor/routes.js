var Router = require('falcor-router');
var Promise = require('promise');
var Kuzzle = require('kuzzle-sdk');

var jsonGraph = require('falcor-json-graph');
var $ref = jsonGraph.ref;
var $error = jsonGraph.error;

var kuzzle = new Kuzzle('http://localhost:7512', {defaultIndex: 'cheezr'})
var formatResult = require('./format-data')

var CheezrRouterBase = Router.createClass([
  {
    // Query chunk to match
    route: "productsById[{keys:productIds}]['title', 'description', 'imageUrl', 'price']",

    // Query action (get, set, call)
    get: function (pathSet) {

      // Always return a Promise (the data retrieving is async)
      return new Promise((resolve, reject) => {

        // Here, it's up to us to define how we retrieve the data
        kuzzle.dataCollectionFactory('products', 'cheezr')
          .advancedSearchPromise({
            query: {
              ids: {
                values: pathSet.productIds
              }
            }
          })
          .then((res) => {
            resolve(

              // Format data for Falcor response
              formatResult(res, pathSet)
            )
          })
          .catch((err) => {
            reject(new Error('An error occurred while fetching the requested products'))
          })
        })
    }
  }
]);

var CheezrRouter = function() {
    CheezrRouterBase.call(this);
};
CheezrRouter.prototype = Object.create(CheezrRouterBase.prototype);

module.exports = function() {
    return new CheezrRouter();
};
