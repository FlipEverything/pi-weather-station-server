var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Measure.findAll({ limit: 10, order: [['date', 'DESC']]}).then(function (measures) {
    measures.forEach(function (measure) {
      console.log(measure.get());
    });
  });

  models.Measure.findOne({ order: [['date', 'DESC']]}).then(function (measure) {
    console.log(measure.get())
    res.render('index', { title: 'Temperate monitor' , measure: measure.get(), moment: moment});
  });
});

module.exports = router;
