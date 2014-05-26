var mongoose = require('mongoose');
var signButton = $('#signIn');
var User = mongoose.model('user');
signButton.on('click',function () {
	var account = document.getElementById("account").value;
	var password = document.getElementById("password").value;
	db.User.find({user_id : account, password : password}, function(err, user){
		console.log(user);
	});

});