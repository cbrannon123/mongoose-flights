

var mongoose = require('mongoose');
//short cut
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true, 
        min: 10, max: 9999
    },
    departs: {
        type: Date
    }, 
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    destinations: {
        type: [destinationSchema]
    }
        
    

        
        
    
});

//complile the schema into a modle and export
module.exports = mongoose.model('Flight', flightSchema);











