const mongoose = require('mongoose');
const { postTestUploadResult } = require('../controllers/lecturer');
const Course = require('../models/courses');
const Result = require('../models/result');
const Test = require('../models/test');
const MongoDBURI = 'mongodb+srv://klez:' + process.env.MONGO_ATLAS_PW +'@cluster0-nm91y.mongodb.net/afit';
// const MongoDBURI = 'mongodb://127.0.0.1:27017/afit';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MongoDBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        // const result_new = new Test({
        //     session: '2019/2020',
        //     semester: 'Harmattan',
        //     data: []
        // })
        // const result_upload = await result_new.save();
        // console.log(result_upload);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;