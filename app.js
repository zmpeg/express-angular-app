
const express = require('express');
const routes = require('./routes');
const path = require('path');
const http = require('http');

const app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

const env = process.env.NODE_ENV || 'development';

app.get('/', routes.index);

app.use(function(req, res) {
  res.status(404).send("Not found");
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});