
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var config = require('../db/config.json')
var mysql = require('mysql');
const { getjson } = require('../DAO/getjson');
var fetch = require('node-fetch');
require('dotenv').config();

/*const { mapjson } = require('../db/mapjson');*/
/*var jsonRouter = require('../routes/recordsjsonRoute');*/
var jsontosqlRouter = require('../routes/postrecordsRoute');

/*app.use('/api/records', jsonRouter);*/
/*app.use('/api/records/post', jsontosqlRouter);*/
// Configure MySQL connection

const port = process.env.PORT || 3000;
connection =  mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

//Establish MySQL connection
connection.connect(function (err) {
  if (err)
    throw err
  else {
    console.log('Connected to MySQL');
    // Start the app when connection is ready
    app.listen(port);
    console.log('Server listening on port ' + port);
  }
});

getjson('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&rows=1000&sort=date');




