var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Userschema = new Schema({
	id: String,
	password: String,
	email: String,
	name: String,
	tel: String,
	charity: { type:Number, default: 0},
	credit: { type: Number, default: 100 },
	updated_at: Date,
	create_at: Date
});

var User = mongoose.model('User', Userschema);

module.exports = User;