var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

//Include modules
Kids = require('./models/kids');
Parents = require('./models/parents');
Reports = require('./models/reports');
Employees = require('./models/employees');

//Connection
mongoose.connect('mongodb://localhost/childcare');
var db = mongoose.connection;

// **Get routes**
app.get('/', function (req, res) {
  res.send('use api end point');
});

app.get('/api/', function (req, res) {
  res.send('use specific end point (parents/kids/reports/employees)');
});

// **Kids**
// Get all kids
app.get('/api/kids', function (req, res) {
  Kids.getKids(function (err, kids) {
    if (err) {
      throw err;
    }

    res.json(kids);
  });
});

//Get all kids names
app.get('/api/kidsnames', function (req, res) {
  Kids.getKidsNames(function (err, kidsnames) {
    if (err) {
      throw err;
    }

    res.json(kidsnames);
  });
});

// Get a single kid by ID
app.get('/api/kids/:_id', function (req, res) {
  Kids.getKidById(req.params._id, function (err, kid) {
    if (err) {
      throw err;
    }

    res.json(kid);
  });
});

// **Parents**
// Get all parents
app.get('/api/parents', function (req, res) {
  Parents.getParents(function (err, parents) {
    if (err) {
      throw err;
    }

    res.json(parents);
  });
});

// Get a single parents by ID
app.get('/api/parents/:_id', function (req, res) {
  Parents.getParentById(req.params._id, function (err, parent) {
    if (err) {
      throw err;
    }

    res.json(parent);
  });
});

// Get a single parents by username and check passcode
app.get('/api/parents/user_name/:user_name/passcode/:passcode', function (req, res) {
  Parents.getParentPassCodeByUserName(req.params, function (err, parent) {
    if (err) {
      throw(err);
    } else {
      if (parent == null) {
        parent = {
          user_name: false,
          passcode: false,
        };
        res.json(parent);
      } else {
        if (
          parent.user_name === req.params.user_name &&
          parent.passcode === req.params.passcode) {
          parent.user_name = true;
          parent.passcode = true;
        } else {
          parent.user_name = false;
          parent.passcode = false;
        }

        res.json(parent);
      }
    }

  });
});

// **Employees**
// Get all employees
app.get('/api/employees', function (req, res) {
  Employees.getEmployees(function (err, employees) {
    if (err) {
      throw err;
    }

    res.json(employees);
  });
});

// Get a single employee by username and check passcode
app.get('/api/employees/user_name/:user_name/passcode/:passcode/employee_id/:employee_id', function (req, res) {
  Employees.checkEmployeePass(req.params, function (err, employee) {
    if (err) {
      throw err;
    } else {
      if (employee == null) {
        employee = {
          user_name: false,
          passcode: false,
          employee_ID: false,
        };
        res.json(employee);
      } else {
        if (
          employee.user_name === req.params.user_name &&
          employee.passcode === req.params.passcode &&
          employee.employee_ID === req.params.employee_ID) {
          employee.user_name = true;
          employee.passcode = true;
          employee.employee_ID = true;
        } else {
          employee.user_name = false;
          employee.passcode = false;
          employee.employee_ID = false;
        }
      }

      res.json(employee);
    }
  });
});

// **Reports**
// Get all reports
app.get('/api/reports', function (req, res) {
  Reports.getReports(function (err, reports) {
    if (err) {
      throw err;
    }

    res.json(reports);
  });
});

// Get a single reports by ID
app.get('/api/reports/:_id', function (req, res) {
  Reports.getReportById(req.params._id, function (err, report) {
    if (err) {
      throw err;
    }

    res.json(report);
  });
});

// **Post routes**
// Kids
app.post('/api/kids', function (req, res) {
  var kid = req.body;
  Kids.addKid(kid, function (err, kid) {
    if (err) {
      throw err;
    }

    res.json(kid);
  });
});

// Reports
app.post('/api/reports', function (req, res) {
  var report = req.body;
  Reports.addReport(report, function (err, report) {
    if (err) {
      throw err;
    }

    res.json(report);
  });
});

// Parents
app.post('/api/parents', function (req, res) {
  var parent = req.body;
  Parents.addParent(parent, function (err, kid) {
    if (err) {
      throw err;
    }

    res.json(parent);
  });
});

// Employees
app.post('/api/employees', function (req, res) {
  var employee = req.body;
  Employees.addEmployee(employee, function (err, employee) {
    if (err) {
      throw err;
    }

    res.json(employee);
  });
});

// **Put routes**
// Kids
app.put('/api/kids/:_id', function (req, res) {
  var id = req.params._id;
  var kid = req.body;
  Kids.updateKid(id, kid, { new: true }, function (err, kid) {
    if (err) {
      throw err;
    }

    res.json(kid);
  });
});

// Reports
app.put('/api/reports/:_id', function (req, res) {
  var id = req.params._id;
  var report = req.body;
  Reports.updateReport(id, report, { new: true }, function (err, report) {
    if (err) {
      throw err;
    }

    res.json(report);
  });
});

// Parents
app.put('/api/parents/:_id', function (req, res) {
  var id = req.params._id;
  var parent = req.body;
  Parents.updateParent(id, parent, { new: true }, function (err, parent) {
    if (err) {
      throw err;
    }

    res.json(parent);
  });
});

// Employees
app.put('/api/employees/:_id', function (req, res) {
  var id = req.params._id;
  var employee = req.body;
  Employees.updateEmployees(id, employee, { new: true }, function (err, employee) {
    if (err) {
      throw err;
    }

    res.json(employee);
  });
});

// **Delete routes**
// Kids
app.delete('/api/kids/:_id', function (req, res) {
  var id = req.params._id;
  Kids.deleteKid(id, function (err, kid) {
    if (err) {
      throw err;
    }

    res.json(kid);
  });
});

// Employees
app.delete('/api/employees/:_id', function (req, res) {
  var id = req.params._id;
  Employees.deleteEmployee(id, function (err, employee) {
    if (err) {
      throw err;
    }

    res.json(employee);
  });
});

// Parents
app.delete('/api/parents/:_id', function (req, res) {
  var id = req.params._id;
  Parents.deleteParent(id, function (err, parent) {
    if (err) {
      throw err;
    }

    res.json(parent);
  });
});

// Reports
app.delete('/api/reports/:_id', function (req, res) {
  var id = req.params._id;
  Reports.deleteReport(id, function (err, report) {
    if (err) {
      throw err;
    }

    res.json(report);
  });
});

app.listen(3000);
console.log('running on prot 3000');
