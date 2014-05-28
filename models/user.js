var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Userschema = new Schema({
	id: String,
	password: String,
	name: String,
	tel: String,
	charity: Number,
	credit: Number,
	updated_at: Date,
	create_at: Date
});

var User = mongoose.model('User', Userschema);

module.exports = User;