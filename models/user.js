var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Userschema = new Schema({
    user_id    : String,
    name       : String,
    tel        : String,
    charity	   : Number,
    credit	   : Number,
    password   : String,
    updated_at : Date
});

var User = mongoose.model( 'User', Userschema );

