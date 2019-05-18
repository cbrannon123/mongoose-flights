//controllers

//retrieves flight model
var Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create
};

function create(req, res) {
    Flight = Flight(req.body)
    console.log(Flight);
    res.render('flights/new')
    
}

function newFlight(req, res) {
    res.render('flights/new')
}    