require('./db'); // TODO [DB] : Connect to database


var express = require('express');
var http = require('http');
var path = require('path');
// var flash = require('connect-flash');
var mongoose = require('mongoose');
var passport = require('passport');
var routes  = require( './routes' );
// var supply = require('./supply');


// require('./config/passport'); // TODO [FB] : Passport configuration

var app = express();
// var Vote = mongoose.model('Vote'); // TODO [DB] : Get Vote model

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/public/html'));
app.set('view engine', 'ejs');
// app.use(express.favicon());
// app.use(express.logger('dev'));
app.use(express.json());
// app.use(express.urlencoded());
app.use(express.methodOverride());
// app.use(express.cookieParser(process.env.COOKIE_SECRET));
// app.use(express.session());

// https://github.com/jaredhanson/passport#middleware
// app.use(passport.initialize());
// app.use(passport.session());
// // Session based flash messages
// app.use(flash());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

// Routes
app.get('/', routes.index)
app.get('/home',routes.home)
app.get('/latest',routes.latest)
app.get('/charity',routes.charity)
app.get('/upload', routes.upload);
app.post('/login', routes.login);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
