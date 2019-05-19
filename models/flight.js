

var mongoose = require('mongoose');
//short cut
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: Date
});

//complile the schema into a modle and export
module.exports = mongoose.model('Flight', flightSchema);











