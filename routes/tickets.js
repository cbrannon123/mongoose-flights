var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets')
//make controler first

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets/new', ticketsCtrl.create);
router.post('/flights/:fId/ticket/:tId', ticketsCtrl.delete);




module.exports = router;