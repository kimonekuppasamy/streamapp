const sql = require("./db.js");

// constructor
const Grades = function(grades) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};

//get all details from db
Grades.getAll = result => {
  sql.query("SELECT * FROM gradeAv", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("grades: ", res);
    result(null, res);
  });
};
//get all details from 2020
Grades.getAll2020 = result => {
  sql.query("SELECT * FROM gradeAv where year = 2020", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("grades 2020: ", res);
    result(null, res);
  });
};
//get all details from 2019
Grades.getAll2019 = result => {
    sql.query("SELECT * FROM gradeAv where year = 2019", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("grades 2019: ", res);
      result(null, res);
    });
  };
//get an average from db 2019
  Grades.getAv2019 = result => {
    sql.query("SELECT AVG(average) Avg2019 FROM gradeAv where year = 2019", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("grades Av 2019: ", res);
      result(null, res);
    });
  };  
//get an average from db 2020
  Grades.getAv2020 = result => {
    sql.query("SELECT AVG(average) Avg2020 FROM gradeAv where year = 2020", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("grades Av 2020: ", res);
      result(null, res);
    });
  };

module.exports = Grades;