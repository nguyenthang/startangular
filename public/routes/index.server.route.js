module.exports = function(app){
  var indexController = require('../controller/index.server.controller');
  app.get('/', indexController.render);
}
