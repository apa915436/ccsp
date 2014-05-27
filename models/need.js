var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Need = new Schema({
//     need_id    : String,
//     needer_id  : String,
//     needer_name: String,
//     amount	   : Number,
//     description: String,
//     catogory   : String,
//     updated_at : Date
// });

var NeedSchema = new Schema({
    name  : Number,
    updated_at : Date
});

mongoose.model( 'Need', NeedSchema );