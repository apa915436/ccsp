var express = require('express');
var controllers = require('./controllers')
var http = require("http")

var host = '127.0.0.1';
var port = 5000;

express()
.set('view engine', 'ejs')
.use(express.bodyParser())
.use(express.methodOverride())
.use(express.static(__dirname, '/public'))
.get('/', controllers.index)
.listen(port, host);
