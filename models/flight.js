

var mongoose = require('mongoose');
//short cut
var Schema = mongoose.Schema;

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
    departs: Date
        
    

        
        
    
});

//complile the schema into a modle and export
module.exports = mongoose.model('Flight', flightSchema);











