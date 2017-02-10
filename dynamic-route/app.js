var express = require('express');

var index = require('./routes/index');
var test = require('./routes/test');

var app = express();

require('routes/dynamic-route')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if (err.status === 404) {
  	return res.status(404).json({ url: 'NOT_FOUND' });
  }

  return res.status(err.status || 500).json({ url: 'ERROR' });
});

module.exports = app;
