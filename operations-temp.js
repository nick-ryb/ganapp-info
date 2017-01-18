/*find and print*/
collection.find().toArray(function (err, results) {
    console.dir(results);
    // Let's close the db
    db.close();
});

/*insert*/
collection.insert(childData, function (err, docs) {
    collection.count(function (err, count) {
        //console.log(format("count = %s", count));
        db.close();
    });
});

/*update*/
collection.update = function (req, res) {
    var id = req.params.id;
    var body = req.body;
    delete body._id;
    collection.findAndModify({_id: id}, {$set: body}, {multi: false}, function (err, bug) {
        if (err) res.json(500, err);
        else if (bug) res.json(bug);
        else res.send(404);
    });
};

collection.update({
        tz: 398643554
    },
    {
        $set: {
            "history.25/2/2015.food.10:35": "24"
        }
    }, {upsert: false}
);


/*remove*/
collection.remove({tz: 398643554}, function (err) {
    if (err) res.json(500, err);
    else res.send(204);
});

