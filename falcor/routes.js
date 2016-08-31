var Router = require('falcor-router');
var Promise = require('promise');

var jsonGraph = require('falcor-json-graph');
var $ref = jsonGraph.ref;
var $error = jsonGraph.error;

var CheezrRouterBase = Router.createClass([
  {
    route: "productsById[{integers:productIds}]['title', 'description', 'imageUrl']",
    get: function (pathSet) {
      return new Promise(function (resolve, reject) {
          resolve([{
              path: ['productsById', 0, 'title'],
              value: 'Parmigiano 26 mesi'
            },
            {
              path: ['productsById', 0, 'description'],
              value: 'Bande de nazes'
            },
            {
              path: ['productsById', 0, 'imageUrl'],
              value: 'https://cdn.meme.am/images/300x/15579139.jpg'
            }
          ]),
          reject('An error occurred while fetching the requested products')
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
