/** Node App for the Phonebook Angular Back-end 
* @requires modules listed below
*/
var express = require('express');
var http = require('http');
var path = require('path');
var mongodb = require('mongodb');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var monk = require('monk');
var db = require('monk')('localhost:27017/pb_db');
var mongo = db.MongoClient;
var index = require('./routes/index');
var pb = require('./routes/user');
/** @constructs express app into @variable app*/
var app = express();
/**@param req - Request object handling
*@param res - Response to the request that came in
*@param next - transfer control to the next statement or middleware. */
app.use(function(req,res,next){
  /** Website to wish to allow to connect to node. */
  res.setHeader('Access-Control-Allow-Origin','*');
  /** Request Methods you wish to allow. */
  res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
  /** Request Headers you wish to allow. */
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
  /** Set to true if you need the website to include cookies in the requests sent
  * to the API (e.g. in case you use sessions) */
  res.setHeader('Access-Control-Allow-Credentials', true);
  /** Pass to next layer of middleware */
    next();
});
/** to attach the database object to whatever request is made.
* @param db passed to req object as @param req.db */
app.use(function(req,res,next){
  req.db = db;
  next();
});
/** use body parser to get data attached to the request. JSON format*/
app.use(bodyParser.json());
/** view engine set default to JADE, to display content pages. Not much use except for error pages.
* @link views - Views directory where all the JADE pages reside*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
/** @link index - for the index page JS and View. 
* @link pb - user.js for the contact functions. Useful in APIs structure and linking.*/
app.use('/',index);
app.use('/user',pb);
/** @catch 404 and forward to error handler */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/** error handlers
* development error handler
* will print stacktrace */
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
/** production error handler
* no stacktraces leaked to user */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
/** @exports @module app*/
module.exports = app;
