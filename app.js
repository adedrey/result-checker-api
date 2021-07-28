const express = require('express');
const connectDB = require('./config/database');
// const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path')
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const lecturerRouter = require('./routes/lecturer');
const app = express();

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();


// COnnect to DB
connectDB();

// Pass the global passport object into the configuration function
require('./config/passport')(passport);

// This will initialize the passport object on every request
app.use(passport.initialize());

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Allows our Angular application to make HTTP requests to Express application
app.use(cors());

// When you run `ng build`, the output will go to the ./frontend directory
app.use('/', express.static(path.join(__dirname, "frontend")))

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization, AdminAuthorization, UserAuthorization"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, CONNECT, PATCH, PUT, DELETE, OPTIONS"
//     );
//     next();
// });

app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/staff', lecturerRouter);
app.use('/api', authRouter);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
})
module.exports = app;