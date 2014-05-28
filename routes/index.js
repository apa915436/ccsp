var mongoose = require( 'mongoose' );
var promise = require( 'promise');
var Supply   = mongoose.model('Supply');
var Need   = mongoose.model('Need');
var need_index = 0;
var supply_index = 0;


exports.index = function (req, res) {
  	res.render('index', {title: 'Love Spreading'});
}

exports.home = function (req, res) {
  	res.render('home', {title: 'Love Spreading'});
}

exports.supply = function (req, res) {
 	// console.log('in latest model');
 	console.log('in supply catogory ',req.params.id);
 	Supply.
 		find({catogory: req.params.id}).
 		exec( function (err, items){
	    	if(err){
	      		console.error(err);
	    	};
	    	res.json(items);
	    });       		 	
}

exports.need = function (req, res) {
 	// console.log('in need model');
 	console.log('in need catogory ',req.params.id);
 	Need.
 		find({catogory: req.params.id}).
 		exec( function (err, items){
	    	if(err){
	      		console.error(err);
	    	};
	    	res.json(items);
	    });       		 	
}

exports.create = function ( req, res){
  	// console.log(req.body.name);
  	new Supply({
  		supply_id  : supply_index++,
      	item_name  : req.body.item_name, 
      	catogory   : req.body.catogory,
      	updated_at : Date.now()
  	}).save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('insert supply successed');
  	});
  	new Need({
  		need_id	   : need_index++,
      	item_name  : req.body.item_name, 
      	catogory   : req.body.catogory,
      	updated_at : Date.now()
  	}).save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('insert supply successed');
    });
  	res.redirect( 'home' );

};

exports.upload = function (req, res) {
	res.render('upload',{title: 'Love Spreading'});
}

exports.login = function(req, res){
	console.log("login function");
	var account = req.account;
	var password = req.password;
	console.log(account+ " " + password);
}