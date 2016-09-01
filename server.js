var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger());
app.use('/static', express.static(__dirname + '/dist'));

app.get('/page*', function(req, res) {
	return res.sendFile('dist/index.html', {
		root: __dirname
	});
});

let data = [
  {
    id: 1,
    text: 'first message'
  },
  {
    id: 2,
    text: 'second message'
  },
  {
    id: 3,
    text: 'third message'
  }
];

app.get('/api/feed', function(request, response) {
  return response.status(200).send(data);
});

app.listen(3000);

console.log('http://localhost:3000/page');
