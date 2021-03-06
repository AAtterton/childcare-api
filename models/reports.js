var mongoose = require('mongoose');

//Schema
var reportSchema = mongoose.Schema({
  main_report: {
    type: String,
    required: true,
  },
  next_steps: {
    type: String,
    required: true,
  },
  report_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  kid: {
    type: String,
    required: true,
  },
  checked1: {
    type: String,
    required: true,
  },
  checked2: {
    type: String,
    required: true,
  },
  checked3: {
    type: String,
    required: true,
  },
  checked4: {
    type: String,
    required: true,
  },
  checked5: {
    type: String,
    required: true,
  },
  checked6: {
    type: String,
    required: true,
  },
  checked7: {
    type: String,
    required: true,
  },
});

var Reports = module.exports = mongoose.model('Reports', reportSchema);

// get reports
module.exports.getReports = function (callback, limit) {
  Reports.find(callback).limit(limit);
};

// get report by ID
module.exports.getReportById = function (id, callback) {
  Reports.findById(id, callback);
};

// add report
module.exports.addReport = function (report, callback) {
  Reports.create(report, callback);
};

// delete Staff
module.exports.deleteReport = function (id, callback) {
  var query = { _id: id };
  Reports.findByIdAndRemove(query, callback);
};
