//Parse data from JSON POST and insert into MYSQL

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var config = require('./db/config.json')
var fetch = require('node-fetch');


// Configure MySQL connection
var connection = mysql.createConnection({
	host     : config.dbhost,
    user     : config.dbuser,
    password : config.dbpassword,
    database : config.dbname
  })

//Establish MySQL connection
connection.connect(function(err) {
   if (err) 
      throw err
   else {
       console.log('Connected to MySQL');
       // Start the app when connection is ready
       app.listen(3000);
       console.log('Server listening on port 3000');
 }
});

app.use(bodyParser.json())

/*app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+ '/myfile.html'));
});*/



var datajson = fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_type_c')
.then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
.then(data => console.log(data))
.catch(error => console.log('ERROR'));

/*var result = JSON.parse(datajson);*/

/*console.log(JSON.stringify(datajson).[1].[0]);*/
var values = [];

/*for(var i=0; i< datajson.length; i++)
  values.push([jsondata[i].name,jsondata[i].age]);

//Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
connection.query('INSERT INTO members (name, age) VALUES ?', [values], function(err,result) {
  if(err) {
     res.send('Error');
  }
 else {
     res.send('Success');
  }
});*/
