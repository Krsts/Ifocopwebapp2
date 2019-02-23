const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {
    ObjectId
} = require('mongodb');

// var {
//     mongoose
// } = require('./db/mongoose');
var {
    User
} = require('./models/user');
var {
    Appartement
} = require('./models/appartement');


var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
})

// Mongoose addendum 

// var express = require('express');
var mongoose = require('mongoose');
var gridfs = require('gridfs-stream');
var fs = require('fs');

var db_filename = "demo.jpg";
var local_file = "./gridfs.jpg";

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var app = express();
gridfs.mongo = mongoose.mongo;
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {

    var gfs = gridfs(connection.db);

    app.get('/', function(req, res) {
        res.send('Demo of MongoDB – GridFS by niralar.com');
    });

    // Writing a file from local to MongoDB
    app.get('/write', function(req, res) {
        var writestream = gfs.createWriteStream({
            filename: db_filename
        });
        fs.createReadStream(local_file).pipe(writestream);
        writestream.on('close', function(file) {
            res.send('File Created : ' + file.filename);
        });
    });

    // Reading a file from MongoDB
    app.get('/read', function(req, res) {
        // Check file exist on MongoDB
        gfs.exist({
            filename: db_filename
        }, function(err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                var readstream = gfs.createReadStream({
                    filename: db_filename
                });
                readstream.pipe(res);
            }
        });
    });

    // Delete a file from MongoDB
    app.get('/delete', function(req, res) {
        gfs.exist({
            filename: db_filename
        }, function(err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                gfs.remove({
                    filename: db_filename
                }, function(err) {
                    if (err) res.send(err);
                    res.send('File Deleted');
                });
            }
        });
    });

    // Get file information(File Meta Data) from MongoDB
    app.get('/meta', function(req, res) {
        gfs.exist({
            filename: db_filename
        }, function(err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                gfs.files.find({
                    filename: db_filename
                }).toArray(function(err, files) {
                    if (err) res.send(err);
                    res.send(files);
                });
            }
        });
    });
});

// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/daymeetings', {
//     useNewUrlParser: true
// });

// var db_filename = "demo.jpg";
// var local_file = "./gridfs.jpg";

// // mongoose.Promise = global.Promise;
// var fs = require('fs');
// var gridfs = require('gridfs-stream');
// var connection = mongoose.connection;
// // Grid.mongo = mongoose.mongo;
// var conn = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error :'));
// connection.once('open', function() {

//         var gfs = gridfs(connection.db);

//         app.get('/write', function(req, res) {
//             var writestream = gfs.createWriteStream({
//                 filename: db_filename
//             });
//             fs.createReadStream(local_file).pipe(writestream);
//             writestream.on('close', function(file) {
//                 res.send('File Created : ' + file.filename);
//             });
//         });

//         app.get('/read', function(req, res) {
//             gfs.exist({
//                 filename: db_filename
//             }, function(err, file) {
//                 if (err || !file) {
//                     res.send('File Not Found');
//                 } else {
//                     var readstream = gfs.createReadStream({
//                         filename: db_filename
//                     });
//                     readstream.pipe(res);
//                 }
//             });
//         });

//         app.get('/meta', function(req, res) {
//             gfs.exist({
//                 filename: db_filename
//             }, function(err, file) {
//                 if (err || !file) {
//                     res.send('File Not Found');
//                 } else {
//                     gfs.files.find({
//                         filename: db_filename
//                     }).toArray(function(err, files) {
//                         if (err) res.send(err);
//                         res.send(files);
//                     });
//                 }
//             })
//         })
//     })
// conn.on('open', function() {
//     console.log("open");
//     var gfs = Grid(conn.db);

//     var writestream = gfs.createWriteStream({
//         filename: 'mongo_file.txt'
//     });
//     fs.createReadStream('/home/etech/sourcefile.txt').pipe(writestream);

//     writestream.on('close', function(file) {
//         console.log(file.filename + 'Written to DB');
//     });

// });


// --Mongoose addendum



// USERS //

app.post('/users-list', (req, res) => {
        var user = new User({
            userName: req.body.userName,
            name: req.body.name,
            firstName: req.body.firstName,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });
        user.save().then((doc) => {
            res.send(doc);
        }, (e) => {
            res.status(400).send(e);
        });
    }),

    app.get('/users-list/', (req, res) => {

        User.find().then((users) => {
            res.send(
                users
            )
        }, (e) => {
            res.status(400).send(e);
        });
    }),

    app.get('/users-list/:userName', (req, res) => {
        User.find({
            userName: req.params.userName
        }).then((users) => {
            res.send(
                users
            )
        }, (e) => {
            res.status(400).send(e);
        });
    }),

    app.get('/users-list/:userName/:password', (req, res) => {
        User.find({
            userName: req.params.userName,
            password: req.params.password
        }).then((users) => {
            res.send(
                users
            )
        }, (e) => {
            res.status(400).send(e);
        });
    }),

    // app.put('/users-list/edit/:userName', (req, res) => {
    //     User.findOneAndUpdate({ userName: req.params.userName }, { name: "Bertrand" },
    //     function (err, user) {
    //             if (err) throw err;
    //             console.log(user);
    //         })});

    app.put('/users-list/edit/:id', (req, res) => {
        // console.log(req.body.userName)
        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function(err, user) {
            if (err) return res.status(500).send(err);
            // we have the updated user returned to us
            return res.send(user);
        })
    })

// app.route('/users-list/:user').put((req, res) => {
//     console.log(req.body);
//     res.send(200, req.body);
// });

//   app.put('users-list/:userName', (req, res) => {
//       console.log(req.userName);
//       User.find().then(users) => {
//           res.send(users)
//         }, (e) => {
//           res.status(400).send(e);
//         },

//-- USERS --//

// APPARTEMENTS //

app.post('/appartement-list', (req, res) => {
    var appartement = new Appartement({
        nom: req.body.nom,
        adresse: req.body.adresse,
        codePostal: req.body.codePostal,
        ville: req.body.ville,
        superficie: req.body.superficie,
        étage: req.body.étage,
        nombre_de_pièces: req.body.nombre_de_pièces,
        capacité: req.body.capacité,
        supplément_resturation: req.body.supplément_resturation,
        supplément_location_de_matériel: req.body.supplément_location_de_matériel,
        wifi: req.body.wifi,
        animaux_acceptés: req.body.animaux_accpetés,
        diffusion_de_musique: req.body.diffusion_de_musique,
        transports_en_commun: req.body.transports_en_commun,
        accès_handicapé: req.body.accès_handicapé,
        parking_public: req.body.parking_public,
        parking_privé: req.body.parking_privé,
        descriptif: req.body.descriptif,
        type_devenements_acceptés: req.body.type_devenements_acceptés,
        prestations_annexes: req.body.prestations_annexes,
        fumeur: req.body.fumeur,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        img4: req.body.img4,
        img5: req.body.img5
    });

    appartement.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/appartement-list/:nom', (req, res) => {
        // console.log(req.params);
        Appartement.find(req.params).then((appartements) => {
            res.send(
                appartements
            )
        }, (e) => {
            res.status(400).send(e);
        });
    }),

    app.get('/appartement-list', (req, res) => {
        Appartement.find().then((appartements) => {
            res.send({
                appartements
            })
        }, (e) => {
            res.status(400).send(e);
        });
    }),

    app.listen(3000, () => {
        console.log('Started on port 3000');
    }),

    module.exports = {
        app
    }

// app.put('/users-list/:id', (req, res) => {
//     User.findOneAndUpdate({
//             "userName": req.params.userName
//         }), {
//             $push: {
//                 "nom": req.body.nom
//             }
//         }, {
//             safe: true
//         },
//         function(err, prod) {
//             if (err) throw err;
//             console.log(prod);
//         }
// });

// app.get('/users-list' + id, (req, res) => {
//         User.findOne({
//             'userName': 'Babar'
//         }).then((user) => {
//             res.send({
//                 user
//             })
//         }, (e) => {
//             res.status(400).send(e)
//         });
//     }),

// app.get('/users-list', (req, res) => {
//         User.find({
//             userName: req.params.userName,
//             password: req.params.password
//         }).then((user) => {
//             res.send({
//                 user
//             })
//         }, (e) => {
//             res.status(400).send(e);
//         });
//     }),