var express = require('express');
var app = express();
var port = 3000;

app.get('/profile', function (req, res) {
  res.json({name: 'Juan Perez', email: 'juanperez@gmail.com'});
})

app.post('/register', function (req, res) {
  var data = req.params;
  console.log(data);
  res.json({name: 'Juan Perez', email: 'juanperez@gmail.com'});
})

app.put('/login', function (req, res) {
  var data = req.params;
  console.log(data);
  res.json({name: 'Juan Perez', email: 'juanperez@gmail.com'});
})

app.listen(port, function () {
  console.log('Example app listening at http://localhost:'+ port);
})
