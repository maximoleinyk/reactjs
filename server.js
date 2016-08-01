var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/src'));

app.get('/page*', function(req, res) {
	return res.sendFile('src/index.html', {
		root: __dirname 
	});
});

app.listen(3000);

console.log('http://localhost:3000/page');
