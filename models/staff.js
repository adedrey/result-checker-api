const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const staffSchema = new Schema({
    file_no : {
        type: String,
        required: true,
        unique: true
    },
    registered: {
        type: Date,
        default: Date.now()
    }
});
staffSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Staff', staffSchema);