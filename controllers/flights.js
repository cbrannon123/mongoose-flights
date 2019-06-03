//controllers

//retrieves flight model
var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    deleteFlight
    
    
}



function deleteFlight(req, res) {
    Flight.findByIdAndDelete({_id: req.params.id}, function(err, flight) {
        flight.save();
        console.log(flight);
        res.redirect('back');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
       res.render('flights/show', {title: 'DETAILS', flight, tickets});
        })
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (flights.length < 1) {
            res.render('flights/new');
        }
        res.render('flights/index', {flights});
        
    });
}

function create(req, res) {
    if (req.body.departs === "") {
        req.body.departs = undefined
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        //console.log(flight);
        res.redirect('/flights');
    });
    
}

function newFlight(req, res) {
    res.render('flights/new');
}    