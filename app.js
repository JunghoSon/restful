// app.js

// [LOAD PACKAGES]
var express    = require('express'),
	app        = express(),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose'),
	Book       = require('./models/book');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var router = require('./routes')(app, Book);

// [RUN SERVER]
var server = app.listen(port, function(){
	console.log('Express server has started on port ' + port);
});

// [CONFIGURE mongoose]
// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
	console.log('Connected to mongod server');
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');