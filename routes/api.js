var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  res.status(400);
  res.json({
    type: 'error',
    message: 'Bad request.'
  });
});

router.get('/measure', function(req, res, next) {
  res.status(400);
  res.json({
    type: 'error',
    message: 'Bad request.'
  });
});

router.route('/measure').post(function(req, res) {
      models.Measure.create({
        date: req.body.date,
        gpsCoordinate: req.body.gpsCoordinate,
        temperature: req.body.temperature,
        humidity: req.body.humidity
      }).then(function(task) {
        res.json({
          type: 'success',
          message: 'Measure inserted!'
        })
        ;
      }).catch(function(err) {
        res.status(400);
        res.json(err);
      });
    });

module.exports = router;
