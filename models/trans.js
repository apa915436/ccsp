var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Trans = new Schema({
    supply_id  : String,
    buyer_id   : String,
    amount	   : Number,
    credit	   : Number,
    method     : String,
    updated_at : Date
});

mongoose.model( 'Trans', Trans );