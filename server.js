var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var items = require('./routes/items');

//DB config
const db = "mongodb://localhost:27017/twitter";


// view engine setup
//Bodyparser Middleware
// app.set('view engine', 'jade');
app.use(favicon());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connected'))


// Use Routes
//port address
app.use('/items', items);


//port Assignment
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));

module.exports = app;
