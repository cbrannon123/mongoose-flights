//routes

var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

/* GET /movies/new */
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);


module.exports = router;
