const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        lowercase: true
    },
    matric_no: {
        type: String,
        required: true
    },
    jamb_no: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    moe:{
        type: String,
        enum: ['UME', 'DE'],
        required: true
    },
    yoe:{
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    image : {
        type : String,
    },
    created_on : {
        type : Date,
        default: Date.now()
    },
    is_active : {
        type : Boolean,
        default: true
    },
    resetToken: String,
    resetTokenExpiration: Date
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);