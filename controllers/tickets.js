const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newTicket,
    //addToFlight,
}

// async function addToFlight(req,res) {
//     const flight = await Flight.findById(req.params.id);
//     console.log(flight);
    
    
// }

async function newTicket(req, res) {
    const tickets = await Ticket.find({});
    res.render("tickets/new", {title: "Add Ticket", tickets});
}