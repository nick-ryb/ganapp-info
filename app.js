/**
 * Created by nick on 16-Jan-17.
 */
var config = require('./config.json');
var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var morganJson = require('morgan-json');
var cookieParser = require('cookie-parser');
var expressMongoDb = require('express-mongo-db');
var multer = require('multer');
//var upload = multer({dest: '../public/uploaded'});// for parsing multipart/form-data


var rfs = require('rotating-file-stream');
var stream = rfs('file.log', {
    size: '10M', // rotate every 10 MegaBytes written
    interval: '1d',  // rotate daily
    compress: 'gzip' // compress rotated files
});

// MongoDB

// var db = require('./model/db');
// db.initialize(function(err) {
//     if(err) throw err; // bad DB initialization
//
//     // Make our db accessible to our router
//     app.use(function (req, res, next) {
//         req.db = db;
//         next();
//     });
//
//     app.listen(3000, function () {
//         console.log('App listening on port 3000!')
//     });
// });

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

morgan.token('id', function getId(req) {
    return '123321';
})

morgan.token('date-time', function getId(req) {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    return datetime;
})

var formatMorganJson = morganJson(
    ':id :remote-addr :date-time :method :url :status :res[content-length] bytes :response-time ms :user-agent');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var logDirectory = path.join(__dirname, 'logs')
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)


// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(__dirname + '/access.log',{flags: 'a'});
// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
});


// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));// TRUE for parsing application/x-www-form-urlencoded
app.use(cookieParser());

// setup the logger
app.use(morgan(formatMorganJson,
    {
        stream: accessLogStream,
        skip: function (req, res) {
            return false;//res.statusCode == 304
        }
    }));
// app.use(morgan('combined', {stream: accessLogStream}))

// app.use(express.static(path.join(__dirname, 'public')));
var dbURI = 'mongodb://' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.dbname;
app.use(expressMongoDb(dbURI));
//app.use(multer({dest:'./uploads/'}).single('tz'));
// app.use(multer({
//     dest: './uploads/'
// }).any());

var publicDir = '/public/';

app.use('/public', express.static(__dirname + publicDir));
app.use('/styles', express.static(__dirname + publicDir + 'stylesheets/'));
app.use('/js', express.static(__dirname + publicDir + 'javascripts/'));
app.use('/views', express.static(__dirname + publicDir + 'templates/'));
app.use('/modals', express.static(__dirname + publicDir + 'templates/modals/'));
app.use('/controllers', express.static(__dirname + publicDir + 'controllers/'));
app.use('/services', express.static(__dirname + publicDir + 'services/'));

app.use('/', index);
app.use('/users', users);

// routes ======================================================================
require('./routes/routes.js')(app);

console.log(process.env.mode);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!')
});

module.exports = app;
