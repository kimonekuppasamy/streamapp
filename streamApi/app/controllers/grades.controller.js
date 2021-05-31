const Grades = require("../models/grades.model.js");


// Retrieve all Grades from the database.
exports.getAll = (req, res) => {
  Grades.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving grades."
        });
      else res.send(data);
    });
};

// Retrieve all Grades from the database for 2020
exports.getAll2020 = (req, res) => {
    Grades.getAll2020((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving grades."
          });
        else res.send(data);
      });
};

// Retrieve all Grades from the database for 2019
exports.getAll2019 = (req, res) => {
    Grades.getAll2019((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving grades."
          });
        else res.send(data);
      });
};

// Retrieve average of Grades from the database for 2019
exports.getAv2019 = (req, res) => {
    Grades.getAv2019((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving grades."
          });
        else res.send(data);
      });
};

// Retrieve average of Grades from the database for 2020
exports.getAv2020 = (req, res) => {
    Grades.getAv2020((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving grades."
          });
        else res.send(data);
      });
};