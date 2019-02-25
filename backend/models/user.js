var mongoose = require('mongoose');
var User = mongoose.model('User', {
    userName: {
        type: String,
        required: true,
        //     minlength: 3,
        //     trim: true
    },
    name: {
        type: String,
        required: true,
        // minlength: 1,
        // trim: true
    },
    firstName: {
        type: String,
        required: true,
        // minlength: 1,
        // trim: true
    },
    address: {
        type: String,
        required: false,
        // minlength: 3,
        // trim: true,
    },
    email: {
        type: String,
        required: true,
        // minlength: 5,
        // trim: true,
    },
    phone: {
        type: String,
        required: false,
        // minlength: 3,
        // trim: true
    },
    password: {
        type: String,
        required: true,
        // minlength: 3,
        // trim: true,
    },
    reservations: {
        type: Array
    }
});

module.exports = {
    User
};