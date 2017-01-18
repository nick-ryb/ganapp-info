/**
 * Created by nick on 16-Jan-17.
 */
var config = require('./config.json');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// MongoDB
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

var db;

// Connection URL. This is where your mongodb server is running.
var uri = 'mongodb://localhost:27017/data';
//mongodb://localhost:27017/sadik-dev1
var url = "mongodb://mustang53:l77n18b82@ds055855.mlab.com:55855/ganapp";
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, database) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        db = database;
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);
        var collection = database.collection('test_owners');
        // do some work here with the database.

        app.listen(3000, function () {
            console.log('Example app listening on port 3000!')
        });

        //Close connection
        // db.close();
    }
});


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



module.exports = app;
