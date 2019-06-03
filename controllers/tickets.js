var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create: createTicket,
    delete: deleteTicket

}

function deleteTicket(req, res, next) {
    Ticket.remove({_id: req.params.tId}, function(err, ticket) {
        if (!err) res.redirect('back');
        else res.redirect("back")
    });
}

function createTicket(req, res) {
  Ticket.create(
    {
      flight: req.params.id,
      seat: req.body.seat,
      price: req.body.price
    },
    function(err, ticket) {
      Ticket.findOne(ticket._id).populate('flight').exec(function(err, ticket){
        //console.log(ticket)
      });
      res.redirect(`/flights/${ticket.flight}`);
      console.log('ticket.flight.airline: ', ticket)
    });
}
          
    


function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {flight });
    });
}