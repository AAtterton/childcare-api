var mongoose = require('mongoose');

//Schema
var parentSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  passcode: {
    type: String,
    required: true,
  },
});

var Parents = module.exports = mongoose.model('Parents', parentSchema);

// get parents
module.exports.getParents = function (callback, limit) {
  Parents.find(callback).limit(limit);
};

// get parent by ID
module.exports.getParentById = function (id, callback) {
  Parents.findById(id, callback);
};

// get parent passcode by username
module.exports.getParentPassCodeByUserName = function (username, callback) {
  let fields = { user_name: 1, passcode: 1 };
  let query = { user_name: username.user_name };
  Parents.findOne(query, fields, callback);
};

// add parent
module.exports.addParent = function (parent, callback) {
  Parents.create(parent, callback);
};

// delete parent
module.exports.deleteParent = function (id, callback) {
  var query = { _id: id };
  Parents.findByIdAndRemove(query, callback);
};
