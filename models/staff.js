var mongoose = require('mongoose');

//Schema
var staffSchema = mongoose.Schema({
  first_name: {
    type: String,
    // required: true,
  },
});

var Staff = module.exports = mongoose.model('Staff', staffSchema);

// get kids
module.exports.getStaff = function (callback, limit) {
  Staff.find(callback).limit(limit);
};
