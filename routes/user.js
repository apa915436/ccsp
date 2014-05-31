var User = require('../models/user.js');

// console.log(User);

exports.index = function(req, res) {
	console.log(req.session);
	req.session.ct = req.session.ct ? req.session.ct + 1 : 1;
	User.find({}, function(err, users) {
		// console.log(users);
		res.json(users);
	})
};

exports.new = function(req, res) {
	res.send('new forum');
};

exports.create = function(req, res) {
	var newUser = req.body;
	User.create(newUser, function(err, user){
		console.log(err, user);
		req.session.user = user;
		if(err){
			res.end(err);
		}else{
			var redirect = '<html><meta http-equiv="refresh" content="3;url=/home" />'
			var flash = '<h1>' + req.body.name + ' 成功註冊!</h1></html>';
			res.end(redirect+flash);
		}
	});
};

exports.show = function(req, res) {
	res.send('show forum ' + req.params.forum);
};

exports.edit = function(req, res) {
	res.send('edit forum ' + req.params.forum);
};

exports.update = function(req, res) {
	res.send('update forum ' + req.params.forum);
};

exports.destroy = function(req, res) {
	res.send('destroy forum ' + req.params.forum);
};

exports.login = function(req, res) {
	console.log(req.session);
	// req.session.ct = req.session.ct ? req.session.ct + 1 : 1;
	User.find({
		id: req.body.id,
		password: req.body.password
	}, function(err, users) {
		console.log(users);
		if(users.length){
			req.session.user = users[0];
			res.redirect("/home");
			res.json(req.session.user);
		}else{
			res.json({"err":"don't cheat me!"});
		}
	})
};

exports.logout = function(req, res) {
	delete req.session["user"];
	var redirect = '<html><meta http-equiv="refresh" content="3;url=/home" />'
	var flash = '<h1>成功登出!</h1></html>';
	res.end(redirect+flash);
};

exports.profile = function(req, res) {
	console.log(req.session);
	// req.session.ct = req.session.ct ? req.session.ct + 1 : 1;
	User.find({
		id: req.seesion.user.id,
	}, function(err, users) {
		console.log(users);
		if(users.length){
			req.session.user = users[0];
			res.redirect("/profile");
			res.json(req.session.user);
		}else{
			res.json({"err"});
		}
	})
};