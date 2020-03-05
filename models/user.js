const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    stravaID: {
        type: String,
        required: true,
        maxlength: 12,
        unique: true
    },

    refreshToken: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        unique: true
    }


});
