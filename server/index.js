
var express = require('express');
var app = express();
var mysql = require('mysql');
const { getjson } = require('../DAO/getjson');
var getRecordsRoute = require('../routes/recordsRoute');
var typesCountRoute = require('../routes/typesRoute');
var garesCountRoute = require('../routes/garesRoute');
var cors = require("cors");
require('dotenv').config();

/* Utilisation de la librairie node cors afin de pouvoir utiliser les routes de l'API au niveau du front-end*/
app.use(cors());

/* Exploitation par l'application des trois routes créées aux chemins suivants correspondants.*/
app.use('/api/records', getRecordsRoute);
app.use('/api/records/typescount', typesCountRoute);
app.use('/api/records/garescount', garesCountRoute);

const port = process.env.PORT || 5000;

/* Variable connection pour accéder aux identifiants de la bdd et s'y connecter.
*/
var connection =  mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

/*Etablir la connection au serveur mysql*/
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

/* Appel à la méthode DAO getjson() avec l'url des données records de l'API en paramètre */
getjson('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&rows=1000&sort=date');




