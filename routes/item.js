var mongoose = require( 'mongoose' );
var promise = require( 'promise');
var Supply   = mongoose.model('Supply');
var Need   = mongoose.model('Need');


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
