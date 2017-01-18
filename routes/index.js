var express = require('express');
var router = express.Router();
var Handlebars = require('hbs');

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

/* GET home page. */
router.get('/', function(req, res, next) {
   var db = req.db;
  var collection = db.collection('test_owners');
  collection.find().toArray(function (err, results) {
    console.log('results: ',results[0].user);
    // Let's close the db

      var user = results[0].user;
       user.stringify = JSON.stringify(user);

    res.render('index', {
        title: 'j2',
        result: user.stringify
    });
    //db.close();
  });
    
});

module.exports = router;
