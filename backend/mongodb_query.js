var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect('/users-list'),
    function(err, db) {
        if (err) throw err;
        var dbo = db.db('daymeetings');
        var query = {
            userName: "Babar"
        };
        dbo.collection('users').find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close()
        });
    };