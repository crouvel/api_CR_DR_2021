
var express = require('express');
var app = express();
var mysql = require('mysql');
const { getjson } = require('../DAO/getjson');
var getRecordsRoute = require('../routes/recordsRoute');
var typesCountRoute = require('../routes/typesRoute');
var cors = require("cors");
require('dotenv').config();

/*const { mapjson } = require('../db/mapjson');*/
/*var jsonRouter = require('../routes/recordsjsonRoute');*/

app.use(cors());
app.use('/api/records', getRecordsRoute);
app.use('/api/records/typescount', typesCountRoute);
/*app.use('/api/records/post', jsontosqlRouter);*/
// Configure MySQL connection

const port = process.env.PORT || 5000;

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




