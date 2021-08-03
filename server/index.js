
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var config = require('../db/config.json')
var mysql = require('mysql');
const { getjson } = require('../DAO/getjson');
var fetch = require('node-fetch');

/*const { mapjson } = require('../db/mapjson');*/
/*var jsonRouter = require('../routes/recordsjsonRoute');*/
var jsontosqlRouter = require('../routes/postrecordsRoute');

/*app.use('/api/records', jsonRouter);*/
/*app.use('/api/records/post', jsontosqlRouter);*/
// Configure MySQL connection

connection =  mysql.createConnection({
  host: config.dbhost,
  user: config.dbuser,
  password: config.dbpassword,
  database: config.dbname
});

//Establish MySQL connection
connection.connect(function (err) {
  if (err)
    throw err
  else {
    console.log('Connected to MySQL');
    // Start the app when connection is ready
    app.listen(3000);
    console.log('Server listening on port 3000');
  }
});

getjson('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&rows=100&sort=date');




