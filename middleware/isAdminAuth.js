const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, PRIV_KEY);
        req.adminId = decodedToken.sub;
        // console.log(req.adminId);
        next()
    } catch(error){
        res.status(401).json({
            message : 'Admin Auth Failed'
        });
    }
}
