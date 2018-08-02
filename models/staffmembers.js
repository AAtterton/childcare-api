var mongoose = require('mongoose');

//Schema
var staffMembersSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
  staff_ID: {
    type: String,
    required: true,
  },
});

var StaffMembers = module.exports = mongoose.model('StaffMembers', staffMembersSchema);

// get kids
module.exports.getStaffMembers = function (callback, limit) {
  StaffMembers.find(callback).limit(limit);
};

// get staff passcode by username
module.exports.getStaffMembersPassCodeByUserName = function (username, callback) {
  let fields = { user_name: 1, passcode: 1, staff_ID: 1 };
  let query = { user_name: username.user_name };
  StaffMembers.findOne(query, fields, callback);
};
