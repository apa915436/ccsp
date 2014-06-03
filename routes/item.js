var mongoose = require( 'mongoose' );
var promise = require( 'promise');
var Supply   = mongoose.model('Supply');
var Need   = mongoose.model('Need');
var Trans = mongoose.model('Trans');
var User = mongoose.model('User');
var trans_index =0;


exports.item = function (req, res) {
 	console.log('charity or not',req.params.charity);
 	console.log('in more model ',req.params.id);
 	console.log('in item page',req.params.id);
 	if(req.params.charity==0){

 		Supply.
 			find({supply_id: req.params.id}).
 			sort( '-updated_at' ).
	 		exec( function (err, item){
		    	if(err){
		      		console.error(err);
		    	};
		    	console.log(item);
				res.render('item', {
					title: 'Love Spreading',
					item: item[0],
					user: req.session.user,
				})
		    });
 	}
 	else{
	 	Need.
	 		find({need_id: req.params.id}).
	 		sort( '-updated_at' ).
	 		exec( function (err, item){
		    	if(err){
		      		console.error(err);
		    	};
		    	console.log(item);
		    	res.render('item', {
					title: 'Love Spreading',
					item: item[0],
					user: req.session.user,
				})
		    });       		 	
 	}
}

exports.deal = function(req, res){
	console.log(req.body);
	console.log("user session check: " + req.session.user);
	console.log('trans_id before save', trans_index);
	var detail = {
		trans_id   		: trans_index++,	
		supply_id  		: req.body.supply_id,
		supplier_id  	: req.body.supplier_id,
		supplier_name	: req.body.supplier_name,
		item_name  		: req.body.item_name,
    	buyer_id   		: req.body.name,
    	amount	   		: req.body.amount,
    	credit	   		: req.body.credit * req.body.amount,
    	method     		: req.body.method,
      	updated_at 		: Date.now()
      };
    console.log('credit', detail.credit);
    console.log('buyer',detail.buyer_id);
    var buyer , seller;
    console.log('seller',detail.supplier_id);
	User.
	 	find({id: detail.buyer_id}).
	 	exec( function (err, user1){
		    	if(err){
		      		console.error(err);
		    	};
		    	console.log(user1);
		    	buyer = user1[0];
			    var buyer_credit_before = buyer.credit;
			    console.log('buyer credit before', buyer.credit);
			    var buyer_credit_after = buyer.credit - detail.credit;
			    console.log('buyer credit after', buyer_credit_after);
			    buyer.credit = buyer_credit_after;
			    buyer.save( function(err, buyer, count){
			    	if( err ) return next( err );
			    	console.log(buyer.credit);
			    })
		    });

	User.
	 	find({id: detail.supplier_id}).
	 	exec( function (err, user2){
		    	if(err){
		      		console.error(err);
		    	};
		    	console.log(user2);
		    	seller = user2[0];
			    var seller_credit_before = seller.credit;
			    console.log('seller credit before', seller.credit);
			    var seller_credit_after = seller.credit + detail.credit;
			    console.log('seller credit after', seller_credit_after);
   			    seller.credit = seller_credit_after;
			    seller.save( function(err, seller, count){
			    	if( err ) return next( err );
			    	console.log(seller.credit);
			    })

		    }); 
	
	new Trans(detail)
	.save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('transaction successfully');
    	console.log('item trans_id',detail.trans_id);
    	console.log(detail);
    	res.render('deal_done', {
					title: 'Love Spreading',
					user: seller,
					item: detail,
					user: req.session.user
				})
    });
}
