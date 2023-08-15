// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// const fetch = require('node-fetch');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// GET Route to retrieve projectData
const getData = (req, res) => {
  res.send(projectData);
};
app.get('/weather/projectData', getData);


// POST Route to store date, temp and user input in projectData
app.post('/weather/projectdata', (req, res) => {
  const {date, temp, content} = req.body
  projectData[date] = {
    temp,
    content,
  }
  res.status(201).send()
});

// Setup Server
const port = 8000
const server = app.listen(port, listening);
function listening() {
  console.log(` Running Server is running on http://localhost:${port}`);
  
}
