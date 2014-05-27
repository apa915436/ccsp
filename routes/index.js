var mongoose = require( 'mongoose' );
// var promise = require( 'promise');
var Supply   = mongoose.model('Supply');
var Need   = mongoose.model('Need');


exports.index = function (req, res) {
  	res.render('index', {title: 'Love Spreading'});
}

exports.home = function (req, res) {
  	res.render('home', {title: 'Love Spreading'});
}

exports.supply = function (req, res) {
 	// console.log('in latest model');
 	console.log('in server ',req.params.id);
 	Supply.
 		find({name: req.params.id}).
 		exec( function (err, items){
	    	if(err){
	      		console.error(err);
	    	};
	    	res.json(items);
	    });       		 	
}

exports.need = function (req, res) {
 	console.log('in need model');
 	console.log('in server ',req.params.id);
 	Need.
 		find({name: req.params.id}).
 		exec( function (err, items){
	    	if(err){
	      		console.error(err);
	    	};
	    	res.json(items);
	    });       		 	
}

exports.create = function ( req, res){
  	// console.log(req.body.name);
  	new Need({
      	name   : req.body.name,
      	updated_at : Date.now()
  	}).save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('insert need successed');
    	res.redirect( 'home' );
  	});

};

exports.more = function (req, res) {
 	console.log('in more model ',req.params.id);
 	Need.
 		find({_id: req.params.id}).
 		exec( function (err, item){
	    	if(err){
	      		console.error(err);
	    	};
	    	res.json(item);
	    });       		 	
}

exports.upload = function (req, res) {
	res.render('upload',{title: 'Love Spreading'});
}

