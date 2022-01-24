const fs = require('fs');
const path = require('path');
const Student = require('../models/users');
const Staff = require('../models/lecturer');
const Admin = require('../models/admin');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};


module.exports = (passport) => {
    passport.use('student', new JwtStrategy(options, (payload, done) => {
        Student.findOne({_id: payload.sub})
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false)
            }
        })
        .catch(err => done(err))
    }));
    passport.use('staff', new JwtStrategy(options, (payload, done) => {
        Staff.findOne({_id: payload.sub})
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false)
            }
        })
        .catch(err => done(err))
    }))
    passport.use('admin', new JwtStrategy(options, (payload, done) => {
        Admin.findOne({_id: payload.sub})
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false)
            }
        })
        .catch(err => done(err))
    }))
}