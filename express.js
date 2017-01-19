var express = require('express');

module.exports = function(app) {

  require('./endpoints')(app);

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
};
