var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Server is working')
});

app.listen(3004);
console.log('App is runing on port 3004');
