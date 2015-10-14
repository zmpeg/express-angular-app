
const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const path = require('path');
const http = require('http');

const app = module.exports = express();

app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const env = process.env.NODE_ENV || 'development';

app.get('/', routes.index);

app.use(function(err, req, res, next) {
	if(err)
	{
		res.status(err.status).send(err.message);
	}
	else
	{
  	res.status(404).send("Not found");
	}
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});