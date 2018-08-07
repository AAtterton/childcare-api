var mongoose = require('mongoose');

//Schema
var kidsSchema = mongoose.Schema({
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
});

var Kids = module.exports = mongoose.model('Kids', kidsSchema);

// get kids
module.exports.getKids = function (callback, limit) {
  Kids.find(callback).limit(limit);
};

// get kids names
module.exports.getKidsNames = function (callback) {
  var query = { };
  var fields = { first_name: 1, last_name: 1, _id: 0 };
  Kids.find(query, fields, callback);
};

// get kid by ID
module.exports.getKidById = function (id, callback) {
  Kids.findById(id, callback);
};

// add kid
module.exports.addKid = function (kid, callback) {
  Kids.create(kid, callback);
};

// update kid
module.exports.updateKid = function (id, kid, options, callback) {
  var query = { _id: id };
  var update = {
    first_name: kid.first_name,
    last_name: kid.last_name,
    dob: kid.dob,
  };
  Kids.findOneAndUpdate(query, update, options, callback);
};

// delete kid
module.exports.deleteKid = function (id, callback) {
  var query = { _id: id };
  Kids.findByIdAndRemove(query, callback);
};
