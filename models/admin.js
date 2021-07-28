const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const adminSchema = new Schema({
  username : {
    required : true,
    type : String,
    unique : true
  },
  hash: {
    type: String
  },
  salt: {
      type: String
  },
});

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);
