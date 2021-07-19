const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const testSchema = new Schema({
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
        result_type: {
            type: String,
            required: true
        },
        result: [{
            matric_no: {
                type: String,
                required: true
            },
            score: {
                type: Number,
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
testSchema.index({"data.result.matric_no" : 'text'});
module.exports = mongoose.model('Test', testSchema);