var mongoose = require( 'mongoose' );
var promise = require( 'promise');
var Supply   = mongoose.model('Supply');


exports.index = function (req, res) {
  	res.render('index', {title: 'Love Spreading'});
}

exports.home = function (req, res) {
  	res.render('home', {title: 'Love Spreading'});
}

exports.supply = function (req, res) {
 	// console.log('in latest model');
 	// console.log(req.params.id);
 	Supply.
 		find().
 		exec( function (err, items){
	    	if(err){
	      		console.error(err);
	    	};
	    	res.render('home',{items: items}); 
      	});	 	
}

exports.charity = function (req, res) {
	// console.log('in charity model');
 	Supply.
 		find().
 		exec( function (err, charity){
	    	if(err){
	      		console.error(err);
	    	};
	    	res.render('home',{charity: charity});
      	});
}


exports.upload = function (req, res) {
	res.render('upload',{title: 'Love Spreading'});
}

 // vote.save(function(err, newVote){
    
 //    var p = [];
 //    var voting = [];
 //    var sum = 0;
 //    Vote.aggregate(
 //      { $group: { _id: "$vote", num: {$sum : 1}}}
 //      , function (err, result) {
 //        if (err) console.log(err);
 //        console.log(result); // [ { maxBalance: 98000 } ]
 //        promise.all(result).then(function(values){
 //          for(var i = 0, len= values.length; i < len; i++){
 //            voting[values[i]._id] = values[i].num;
 //            sum += values[i].num;
 //          }
 //          for(var j = 0; j < 7; j++){
 //            p[j] = voting[j]/sum * 100;
 //            console.log("p: " + p[j]);
 //          }
 //          res.render('result', {
 //            votes: [p[0], p[1], p[2], p[3], p[4], p[5], p[6]]// Percentages
 //          });
 //        });
 //    });
 //  });



// exports.supply = function ( req, res ){

//   Suppply.
//     find().
//     sort( '-updated_at' ).
//     exec( function ( err, supplies ){
//       if( err ) return next( err );

//       res.render( 'supply', {
//           title : 'supply_list',
//           supplies: supplies
//       });
//     });
// };

// var utils    = require( '../utils' ); 
// var mongoose = require( 'mongoose' );
// var Todo     = mongoose.model( 'Todo' );

// exports.index = function ( req, res, next ){
//   var user_id = req.cookies ?
//     req.cookies.user_id : undefined;

//   Todo.
//     find({ user_id : user_id }).
//     sort( '-updated_at' ).
//     exec( function ( err, todos ){
//       if( err ) return next( err );

//       res.render( 'index', {
//           title : 'Express Todo Example',
//           todos : todos
//       });
//     });
// };

// exports.create = function ( req, res, next ){
//   new Todo({
//       user_id    : req.cookies.user_id,
//       content    : req.body.content,
//       updated_at : Date.now()
//   }).save( function ( err, todo, count ){
//     if( err ) return next( err );

//     res.redirect( '/' );
//   });
// };

// exports.destroy = function ( req, res, next ){
//   Todo.findById( req.params.id, function ( err, todo ){
//     var user_id = req.cookies ?
//       req.cookies.user_id : undefined;

//     if( todo.user_id !== req.cookies.user_id ){
//       return utils.forbidden( res );
//     }

//     todo.remove( function ( err, todo ){
//       if( err ) return next( err );

//       res.redirect( '/' );
//     });
//   });
// };

// exports.edit = function( req, res, next ){
//   var user_id = req.cookies ?
//       req.cookies.user_id : undefined;

//   Todo.
//     find({ user_id : user_id }).
//     sort( '-updated_at' ).
//     exec( function ( err, todos ){
//       if( err ) return next( err );

//       res.render( 'edit', {
//         title   : 'Express Todo Example',
//         todos   : todos,
//         current : req.params.id
//       });
//     });
// };

// exports.update = function( req, res, next ){
//   Todo.findById( req.params.id, function ( err, todo ){
//     var user_id = req.cookies ?
//       req.cookies.user_id : undefined;

//     if( todo.user_id !== user_id ){
//       return utils.forbidden( res );
//     }

//     todo.content    = req.body.content;
//     todo.updated_at = Date.now();
//     todo.save( function ( err, todo, count ){
//       if( err ) return next( err );

//       res.redirect( '/' );
//     });
//   });
// };

// // ** express turns the cookie key to lowercase **
// exports.current_user = function ( req, res, next ){
//   var user_id = req.cookies ?
//       req.cookies.user_id : undefined;

//   if( !user_id ){
//     res.cookie( 'user_id', utils.uid( 32 ));
//   }

//   next();
// };
