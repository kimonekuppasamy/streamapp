const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();
var cors = require("cors");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

require("./app/routes/grades.routes.js")(app);
// All other GET requests not handled before will return our React app
// serve index.html from the build folder
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});