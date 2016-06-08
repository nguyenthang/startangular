var express = require('express');
module.exports = function(){
  var app = express();
  //app.set(express.static(__dirname + '/public'));
  app.set('views', './public/views');
  app.set('view engine', 'ejs');

  require('../routes/index.server.route.js')(app);
  return app;
}
