const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const assignmentSchema = new Schema({
    department: {
        type: String,
        required: true
    },
    course_code: {
        type: String,
        required: true
    },
    staff_no: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    submission_date: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    assignments: {
        users: [{
            userId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            attachment: {
                type: String,
                required: true
            },
            attachmentId: {
                type: String
            }
        }]
    }
});


module.exports = mongoose.model('Assignment', assignmentSchema);