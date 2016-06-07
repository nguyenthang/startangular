// start express framework
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'))
.listen(3000);
console.log("Server is running at 3000");
