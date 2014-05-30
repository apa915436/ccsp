var mongoose = require( 'mongoose' );
var promise = require( 'promise');
var Supply   = mongoose.model('Supply');
var Need   = mongoose.model('Need');
var Trans = mongoose.model('Trans');

exports.item = function (req, res) {
 	console.log('charity or not',req.params.charity);
 	console.log('in more model ',req.params.id);

 	if(req.params.charity==0){
 		Supply.
 			find({supply_id: req.params.id}).
	 		exec( function (err, item){
		    	if(err){
		      		console.error(err);
		    	};
		    	console.log(item);
				res.render('item', {
					title: 'Love Spreading',
					item: item,
					user: req.session.user
				})
		    });
 	}
 	else{
	 	Need.
	 		find({need_id: req.params.id}).
	 		exec( function (err, item){
		    	if(err){
		      		console.error(err);
		    	};
		    	console.log(item);
		    	res.render('item', {
					title: 'Love Spreading',
					item: item,
					user: req.session.user
				})
		    });       		 	
 	}
}

exports.deal = function(req, res){
	console.log(req.body);
	console.log("user session check: " + req.session.user);
	
	new Trans({
		supply_id  : String,
    	buyer_id   : req.session.user,
    	amount	   : req.body.amount,
    	credit	   : req.body.amount ,
    	method     : req.body.method,
      	updated_at : Date.now()
  	}).save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('upload supply successfully');
    	var redirect = '<html><meta http-equiv="refresh" content="3;url=/home" />'
		var flash = '<h1>成功上傳!</h1></html>';
		res.end(redirect+flash);
  	});
}

exports.uploadsupply = function(req, res){
	console.log(req.body);
	console.log("user session check: " + req.session.user);
	var face, delivery;
	if (req.body.Checkbox1 == "face") {
		face = req.body.face_location;
	}
	else{
		face = false;
	}
	if (req.body.Checkbox2 == "delivery") {
		delivery = req.body.delivery_cost;
	}
	else{
		delivery = false;
	}
	new Supply({
		supply_id       : supply_index++,
	    supplier_name	: req.body.name,
	    tel				: req.body.tel,
	    email			: req.body.email,
	    item_name		: req.body.item_name,
	    catogory   		: req.body.catogory,
	    amount	   		: req.body.amount,
	    credit	   		: req.body.credit,
	    face       		: face,
	    delivery   		: delivery,
      	updated_at 		: Date.now()
  	}).save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('upload supply successfully');
    	var redirect = '<html><meta http-equiv="refresh" content="3;url=/home" />'
		var flash = '<h1>成功上傳!</h1></html>';
		res.end(redirect+flash);
  	});
}