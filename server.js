// start express framework
var express1 = require('express');
var express = require('./public/config/express');
//var express = require('express');

var app = express();

app.use(express1.static(__dirname + '/public'))
//.listen(3000);

app.listen(3000);
module.exports = app;

console.log("Server is running at 3000");
