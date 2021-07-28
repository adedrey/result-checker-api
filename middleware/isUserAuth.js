const jwt = require('jsonwebtoken')
const path = require('path');
const fs = require('fs');
const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, PRIV_KEY);
        req.userId = decodedToken.sub;
        // console.log()
        next()
    } catch(error){
        console.log(err);
        res.status(401).json({
            message : 'User Auth Failed'
        });
    }
}