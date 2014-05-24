var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose.model('Supply', new Schema({
//     supply_id  : String,
//     supply_name: String,
//     amount	   : Number,
//     description: String,
//     catogory   : String,
//     credit	   : Number,
//     face       : String,
//     delivery   : String,
//     updated_at : Date
// }));

var Supply = new Schema({
    supply_id  : String,
    updated_at : Date
});

mongoose.model('Supply', Supply);