var mongoose = require('mongoose');

//Schema
var employeeSchema = mongoose.Schema({
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
  employee_ID: {
    type: String,
    required: true,
  },
});

var Employees = module.exports = mongoose.model('Employees', employeeSchema);

// get employees
module.exports.getEmployees = function (callback, limit) {
  Employees.find(callback).limit(limit);
};

// get employees passcode by username
module.exports.checkEmployeePass = function (username, callback) {
  let fields = { user_name: 1, passcode: 1, employees_ID: 1 };
  let query = { user_name: username.user_name };
  Employees.findOne(query, fields, callback);
};

// add employees
module.exports.addEmployee = function (employee, callback) {
  Employees.create(employee, callback);
};

// delete employees
module.exports.deleteEmployee = function (id, callback) {
  var query = { _id: id };
  Employees.findByIdAndRemove(query, callback);
};
