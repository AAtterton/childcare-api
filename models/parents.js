var mongoose = require('mongoose');

//Schema
var parentSchema = mongoose.Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  dob:{
    type: String,
    required: true
  },
});

var Parents = module.exports = mongoose.model('Parents', parentSchema);

// get parents
module.exports.getParents = function(callback, limit){
  Parents.find(callback).limit(limit);
};

// get parent by ID
module.exports.getParentById = function(id, callback){
  Parents.findById(id, callback);
};
