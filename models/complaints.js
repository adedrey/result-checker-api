const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const complaintSchema = new Schema({
    case_type: {
        type: [],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    matric_no: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Complaint', complaintSchema);