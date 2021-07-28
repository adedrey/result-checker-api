const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const lecturerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    staff_no: {
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
    email: {
        type: String
    },
    hash: {
        type: String
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        default: "academic"
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
lecturerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Lecturer', lecturerSchema);