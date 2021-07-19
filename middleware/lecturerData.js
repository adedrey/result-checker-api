const Lecturer = require("../models/lecturer");
module.exports = (req, res, next) => {
    Lecturer.findOne({
        _id: req.staffId
      })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: 'An error occured. Unable to authenticate user'
          });
        }
  
        req.user = user;
        // console.log(req.user);
        next();
      }).catch(err => {
        res.status(500).json({
          message: 'An error occured. Unable to authenticate user'
        })
      })
  }