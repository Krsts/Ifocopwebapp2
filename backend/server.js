const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
})

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
});

app.get('/users-list', (req, res) => {
    User.find().then((users) => {
        res.send({ users})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};