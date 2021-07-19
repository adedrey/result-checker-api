const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const resultSchema = new Schema({
    session: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true,
        enum: ['Harmattan', 'Rain']
    },
    data: [{
        course_code: {
            type: String
        },
        title: {
            type: String
        },
        unit: {
            type: Number
        },
        status: {
            type: String
        },
        result: [{
            matric_no: {
                type: String,
                required: true
            },
            ca: {
                type: Number,
                required: true
            },
            exam: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            point: {
                type: Number,
                required: true
            },
            grade: {
                type: String,
                required: true
            },
            updatedAt: {
                type: Date,
                default: Date.now()
            }
        }],
    }],
    
    status: {
        type: Boolean,
        default: false
    },
    addedAt: {
        type: Date,
        default: Date.now()
    },

});
resultSchema.index({"data.result.matric_no" : 'text'});
module.exports = mongoose.model('Result', resultSchema);