/**
 * Created by nick on 19-Mar-17.
 */
// load the todo model
// var Todo = require('../public/services/todos');
var config = require('../config.json');
// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {
         var collection = req.db.collection(config.collection.owners);
         collection.find().toArray(function (err, results) {
              console.log('results: ', results[0].user);//results[0].user
            //
             var user = results[0].user;
            // user.stringify = JSON.stringify(user);
            res.send(user);
            // res.render('index', {
            //     title: 'j52',
            //     result: results
            // });
         });
        //res.json([{id:'1',text:'todos1'},{id:'2',text:'todos2'}]);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {
        var collection = req.db.collection(config.collection.owners);
        collection.insert({
            "id": "3",
            "text": "todos3"
        }, function(err, doc) {
            res.json(doc);
        });

        //res.json([{id:'1',text:'todos1'},{id:'2',text:'todos2'},{id:'3',text:'todos3'}]);
    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        var collection = req.db.collection(config.collection.owners);
        collection.find().toArray(function (err, results) {
            console.log('results: ', results[0].user);//results[0].user
            //
            var user = results[0].user;
            // user.stringify = JSON.stringify(user);
            res.send(user);
            // res.render('index', {
            //     title: 'j52',
            //     result: results
            // });
        });
        // res.json([{id:'1',text:'todos1'}]);
    });

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        //res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};