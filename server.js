// require Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// require Article Schema
var Article = require('./models/Article.js');

// Create Instance of Express
var app = express();

// set an initial PORT for port listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// serve static content
app.use(express.static(process.cwd() + './public'));

// Database Configuration
// -------------------------------------------------
// make a connection
mongoose.connect('mongodb://localhost/nytreact');
// make a function for db connect
var db = mongoose.connection;
// console log any mongoose errors
db.on('error', function(err){
  console.log('Mongoose Error: ', err);
});
// once logged in to the db using mongoose successful, console log sucess message
db.once('open', function(){
  console.log('Mongoose connection successful')
});

// -------------------------------------------------