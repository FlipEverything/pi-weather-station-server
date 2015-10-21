var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Measure.findAll({ limit: 50, order: [['date', 'DESC']]}).then(function (measures) {
    var measureArray = [];
    measures.forEach(function (measure) {
      measureArray.push(measure.get());
    });
    res.render('index', { title: 'Temperate monitor' , measure: measureArray[0], moment: moment, measureArray: measureArray});
  });
});

module.exports = router;
