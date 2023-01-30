const mongoose = require('mongoose');

const registrationPage = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
    },
    dob: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    password: {
        type: String,
    }
});

const registration = mongoose.model('registration', registrationPage);

module.exports = registration;
