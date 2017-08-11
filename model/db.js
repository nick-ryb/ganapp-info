/**
 * Created by nick on 11-Mar-17.
 */
var config      = require('../config.json');
var dbURI         = 'mongodb://' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.dbname;
var MongoClient = require('mongodb').MongoClient;
var db          = null;

var isDev       = false;

if(isDev)// development
    dbURI = 'mongodb://127.0.0.1:27017/data';//config.demodb.host;

var express = require('express');
var app = express();

module.exports = {

    initialize: function(next){
        // initialization actions, there can be many of these
        this.initializeDB(next);
    },

    initializeDB: function(next){
        MongoClient.connect(dbURI, function(err, conn) {
            if(err){
                console.log(err.message);
                throw new Error(err);
            } else {
                db = conn;
                //cb(db);
                module.exports.db = db;
            }
            next();
        });       
    }
}
// module.exports = function(cb){
//     if(db){
//         cb(db);
//         return;
//     }

    // MongoClient.connect(dbURI, function(err, conn) {
    //     if(err){
    //         console.log(err.message);
    //         throw new Error(err);
    //     } else {
    //         db = conn;
    //         //cb(db);
    //         app.listen(3000, function () {
    //             console.log('App listening on port 3000!')
    //         });
    //     }
    // });
// };

process.on('SIGINT', function() {
    db.close();
});

