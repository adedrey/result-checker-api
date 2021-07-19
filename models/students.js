const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    matric_no : {
        type: String,
        required: true,
        unique: true
    },
    registered: {
        type: Date,
        default: Date.now()
    }
});
studentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Student', studentSchema);