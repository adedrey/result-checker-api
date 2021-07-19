const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coursesSchema = new Schema({
    department: {
        type: String,
        required: true
    },
    courses: [{
        course_code: {
            type: String,
            required: true
        },
        unit: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['C', 'R', 'E']
        },
        semester: {
            type: String,
            ennum: ['Rain', 'Harmattan']
        },
        title: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
        addedAt: {
            type: String,
            default: Date.now()
        },
    }],
    years: {
        type: Number,
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Course', coursesSchema);