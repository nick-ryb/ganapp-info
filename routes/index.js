var express = require('express');
var config = require('../config.json');
var router = express.Router();

var path = require('path');



/* GET home page. */
router.get('/', function (req, res, next) {
    var collection = req.db.collection(config.collection.owners);
    var minute = 60 * 1000;
    res.cookie('remember', 1, { maxAge: minute });
    req.db.listCollections().toArray(function(err, collInfos) {
        if(err)console.log(err);
        else console.log(collInfos);

        for (var i = 0; i < collInfos.length ; i++) {
            if(collInfos[i].name == "test_owners2"){
                console.log('test_owners2 exists in : ' + i);
                break;
            }
        }
    });

    // req.db.createCollection('test_owners2',{strict:true},function(err,collection){
    //     if(err)console.log(err);
    //     else console.log(collection);
    // });

    collection.find().toArray(function (err, results) {
        console.log('results: ', results);//results[0].user

        // var user = results[0].user;
        // user.stringify = JSON.stringify(user);
        // // res.send({
        // //     title: 'j52',
        // //     result: results
        // // });
        // res.render('index', {
        //     title: 'j52',
        //     result: results
        // });
        res.sendFile(path.join(__dirname, '../views', 'layout.html'));
        // res.sendFile(path.join(__dirname, '../public/templates/modals', 'modal.html'));
        // res.sendfile('./views/layout.html');
    });
    // doing some stuff with the db


    // var adminDb = db.admin();
    //
    // // List all the available databases
    // adminDb.listDatabases(function(err, dbs) {
    //     test.equal(null, err);
    //     test.ok(dbs.databases.length > 0);
    //
    //
    //     //db.close();
    // });

    // db.getCollectionNames().forEach( function(collection_name) {
    //     if (collection_name.indexOf("system.") == -1)
    //         db[collection_name].drop();
    //     else
    //         db.collection_name.remove({});
    // });
    // db.collections(function(err, collections) {
    //     test.equal(null, err);
    //     test.ok(collections.length > 0);
    //
    //     if (collection_name.indexOf("system.") == -1)
    //         db[collection_name].drop();
    //     else
    //         db.collection_name.remove({});
    //
    //     db.close();
    // });
    // db.listCollections().toArray(function(err, collInfos) {
    //     if(err)console.log(err)
    //     else console.log(collInfos);
    //     // collInfos is an array of collection info objects that look like:
    //     // { name: 'test', options: {} }
    // });
    // collection.insertOne({k:1}, function(err, r) {
    //     test.equal(null, err);
    //     test.equal(1, r.insertedCount);
    //     // Finish up test
    //     db.close();
    // });
    //
    // collection.find().toArray(function (err, results) {
    //     console.log('results: ', results);//results[0].user
    //
    //     // var user = results[0].user;
    //     // user.stringify = JSON.stringify(user);
    //     // // res.send({
    //     // //     title: 'j52',
    //     // //     result: results
    //     // // });
    //     res.render('index', {
    //         title: 'j52',
    //         result: results
    //     });
    //
    //     //db.close();
    // });
    //
    // var findDocuments = function(db, callback) {
    //     // Get the documents collection
    //     var collection = db.collection('documents');
    //     // Find some documents
    //     collection.find({}).toArray(function(err, docs) {
    //         assert.equal(err, null);
    //         console.log("Found the following records");
    //         console.log(docs)
    //         callback(docs);
    //     });
    // }
    //
    // findDocuments(db, function() {
    //     db.close();
    // });

});

module.exports = router;
