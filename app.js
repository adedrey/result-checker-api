const express = require('express');
const connectDB = require('./config/database');
const bodyParser = require('body-parser');
const Admin = require('./models/admin');
const path = require('path')
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const lecturerRouter = require('./routes/lecturer');
const app = express();

// COnnect to DB
connectDB();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', express.static(path.join(__dirname, "frontend")))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, AdminAuthorization, UserAuthorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, CONNECT, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/staff', lecturerRouter);
app.use('/api', authRouter);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
})
module.exports = app;