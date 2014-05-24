var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    user_id    : String,
    name       : String,
    tel        : String,
    charity	   : Number,
    credit	   : Number,
    password   : String,
    updated_at : Date
});

mongoose.model( 'User', User );