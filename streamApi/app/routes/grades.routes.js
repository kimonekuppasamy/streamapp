module.exports = app => {
    const grades = require("../controllers/grades.controller.js");
  
    // Retrieve all Grade routes
    app.get("/grades/2020", grades.getAll2020);
    app.get("/grades/2019", grades.getAll2019);
    app.get("/grades/av2019", grades.getAv2019);
    app.get("/grades/av2020", grades.getAv2020);
    app.get("/grades", grades.getAll);
  };