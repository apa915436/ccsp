var mongoose = require( 'mongoose' );
var promise = require( 'promise');
var Supply   = mongoose.model('Supply');
var Need   = mongoose.model('Need');
var Trans = mongoose.model('Trans');
var trans_index =0;


exports.item = function (req, res) {
 	console.log('charity or not',req.params.charity);
 	console.log('in more model ',req.params.id);
 	console.log('in item page',req.params.id);

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
	console.log('trans_id before save', trans_index);
	var detail = {
		trans_id   : trans_index++,	
		supply_id  : req.body.supply_id,
    	buyer_id   : req.body.name,
    	amount	   : req.body.amount,
    	credit	   : req.body.amount ,
    	method     : req.body.method,
      	updated_at : Date.now()
      };

	new Trans(detail)
	.save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('transaction successfully');
    	console.log('item trans_id',detail.trans_id);
    	console.log(detail);
    	res.render('deal_done', {
					title: 'Love Spreading',
					item: detail,
					user: req.session.user
				})
  	});
}

  //   	var redirect = '<html><meta http-equiv="refresh" content="1;url=/deal_done'+detail.trans_id+' " /> '
		// var flash = '<h1>交易成功!</h1></html>';
		// res.end(redirect+flash);
// exports.deal_done = function(req, res){
// 	res.render('deal_done',{
// 		title: 'Transaction Complete'
// 		item: detail,
// 		user: req.session.user
// 	});
// }