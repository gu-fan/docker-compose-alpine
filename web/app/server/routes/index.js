var express = require('express');
var router = express.Router();

var redis = require('redis');

/* redis */
var host = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1';
var port = process.env.REDIS_PORT_6379_TCP_PORT || 6379;
var client = redis.createClient(port, host);

router.get('/set', function(req, res, next) {
  client.set('name', req.query.name, function(err, result) {
    if (err) {
      return next(err);
    }

    res.send('set with: ' + req.query.name)

  });
}); 

router.get('/get', function(req, res, next) {
  client.get('name', function(err, result) {
    if (err) {
      return next(err);
    }

    res.send('get with: ' + result)
  });
}); 

module.exports = router;

