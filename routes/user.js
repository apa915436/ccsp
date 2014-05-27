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
	// console.log("cc");
	// console.log(req.body);
	// console.log(req.params);
	// console.log(req.query);
	// console.log(query)
	var user = req.body;
	User.create(user);
// console.log(req);
	res.json(user);
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
	res.json({"msg":"you died!"});
};