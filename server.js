var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

app.use(bodyParser.json());
app.use(logger());
app.use('/static', express.static(__dirname + '/dist'));

app.get('/page*', function(req, res) {
	return res.sendFile('dist/index.html', {
		root: __dirname
	});
});

var data = [];

app.get('/api/feed', function(request, response) {
  return response.status(200).send({
    data: data,
    total: data.length
  });
});

app.post('/api/feed', function(request, response) {
  var id = data.length + 1;
  var newObject = {
    id: id,
    text: request.body.text
  };

  return response.status(200).send(newObject);
});

app.put('/api/feed/:id', function(request, response) {
  data.forEach(function(item) {
    if (item.id !== request.body.id) {
      return;
    }
    item.text = request.body.text;
  });

  return response.status(200).send(request.body);
});

app.del('/api/feed/:id', function(request, response) {
  data = data.filter(function(item) {
    return item.id !== request.body.id;
  });
  return response.status(204);
});

app.listen(3000);

console.log('http://localhost:3000/page');
