var mongoose = require('mongoose');

//Schema
var photosSchema = mongoose.Schema({
  uri: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
});

var Photos = module.exports = mongoose.model('Photos', photosSchema);

// get photos
module.exports.getPhotos = function (callback, limit) {
  Photos.find(callback).limit(limit);
};

// get photo by ID
module.exports.getPhotoById = function (id, callback) {
  Photos.findById(id, callback);
};

// add photo
module.exports.addPhoto = function (photo, callback) {
  Photos.create(photo, callback);

};

// delete photo
module.exports.deletePhoto = function (id, callback) {
  var query = { _id: id };
  Photos.findByIdAndRemove(query, callback);
};
