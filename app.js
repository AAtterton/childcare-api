var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

//Include modules
Kids = require('./models/kids');
Parents = require('./models/parents');
Reports = require('./models/reports');
Staff = require('./models/staff');

//Connection
mongoose.connect('mongodb://localhost/childcare');
var db = mongoose.connection;

//Get all kids
app.get('/api/kids', function (req, res) {
  Kids.getKids(function (err, kids) {
    if (err) {
      throw err;
    }

    res.json(kids);
  });
});

app.get('/api/parents', function (req, res) {
  Parents.getParents(function (err, parents) {
    if (err) {
      throw err;
    }

    res.json(parents);
  });
});

app.get('/api/staff', function (req, res) {
  Staff.getStaff(function (err, staff) {
    if (err) {
      throw err;
    }

    res.json(staff);
  });
});

app.get('/api/reports', function (req, res) {
  Reports.getReports(function (err, reports) {
    if (err) {
      throw err;
    }

    res.json(reports);
  });
});







// **Get routes**
app.get('/', function (req, res) {
  res.send('use api end point');
});

//  Kids
//Get all kids
// app.get('/api/kids', function (req, res) {
//   Kids.getKids(function (err, kids) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(kids);
//   });
// });

// //Get all kids names
// app.get('/api/kidsnames', function (req, res) {
//   Kids.getKidsNames(function (err, kidsnames) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(kidsnames);
//   });
// });
//
// // Get a single kid by ID
// app.get('/api/kids/:_id', function (req, res) {
//   Kids.getKidById(req.params._id, function (err, kid) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(kid);
//   });
// });

// Parents
// Get all parents
// app.get('/api/parents', function (req, res) {
//   Parents.getParents(function (err, parents) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(parents);
//   });
// });
//
// // Get a single parents by ID
// app.get('/api/parents/:_id', function (req, res) {
//   Parents.getParentById(req.params._id, function (err, parent) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(parent);
//   });
// });
//
// // Get a single parents by username
// app.get('/api/parents/user_name/:user_name/passcode/:passcode', function (req, res) {
//   Parents.getParentPassCodeByUserName(req.params, function (err, parent) {
//     if (err) {
//       throw err;
//     } else {
//       if (parent.passcode === req.params.passcode) {
//         parent.passcode = true;
//       } else {
//         parent.passcode = false;
//       }
//     }
//
//     res.json(parent);
//   });
// });

// Staff
// Get all staff
// app.get('/api/staff', function (req, res) {
//
//   Staff.getStaff(function (err, staff) {
//     // console.log(staff);
//     if (err) {
//       throw err;
//     }
//
//     res.json(staff);
//   });
// });

// Reports
// Get all reports

// app.get('/api/reports', function (req, res) {
//   Reports.getReports(function (err, reports) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(reports);
//   });
// });
//
// // Get a single reports by ID
// app.get('/api/reports/:_id', function (req, res) {
//   Reports.getReportById(req.params._id, function (err, report) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(report);
//   });
// });
//
// // **Post routes**
// // Add kid
// app.post('/api/kids', function (req, res) {
//   var kid = req.body;
//   Kids.addKid(kid, function (err, kid) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(kid);
//   });
// });
//
// // Add report
// app.post('/api/reports', function (req, res) {
//   var report = req.body;
//   Reports.addReport(report, function (err, report) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(report);
//   });
// });
//
// // Add parent
// app.post('/api/parents', function (req, res) {
//   var parent = req.body;
//   Parents.addParent(parent, function (err, kid) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(parent);
//   });
// });
//
// // **Put routes**
// // Update kid
// app.put('/api/kids/:_id', function (req, res) {
//   var id = req.params._id;
//   var kid = req.body;
//   Kids.updateKid(id, kid, {}, function (err, kid) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(kid);
//   });
// });
//
// // **Delete routes**
// app.delete('/api/kids/:_id', function (req, res) {
//   var id = req.params._id;
//   Kids.deleteKid(id, function (err, kid) {
//     if (err) {
//       throw err;
//     }
//
//     res.json(kid);
//   });
// });
//
app.listen(3000);
console.log('running on prot 3000');
