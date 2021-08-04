var fetch = require('node-fetch');
var connection = require('../server')
var config = require('../db/config.json')
var mysql = require('mysql');
require('dotenv').config();

var connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

const getjson = async (url) => {
  
      fetch(url)
        .then(res => res.json())
        .then(json => {
          var values = [];
         
          for (var i = 0; i < json.records.length; i++){
              values.push([json.records[i].recordid, json.records[i].fields.gc_obo_nature_c,
              json.records[i].fields.gc_obo_gare_origine_r_name,
              new Date(Date.parse(json.records[i].fields.date)),
              json.records[i].fields.gc_obo_nom_recordtype_sc_c,
              json.records[i].fields.gc_obo_type_c,
              json.records[i].fields.gc_obo_gare_origine_r_code_uic_c,
              ]);
            
          //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
          connection.query('INSERT IGNORE INTO Records (recordid,gc_obo_nature_c,gc_obo_gare_origine_r_name,date,gc_obo_nom_recordtype_sc_c,gc_obo_type_c,gc_obo_gare_origine_r_code_uic_c) VALUES ?',
              [values],
      
              function (err, result) {
                  if (err) {
                      
                      console.log(err);
                  }
                  else {
                      
                      /*console.log("rows inserted !");*/
                      
                  }
              }
          )
            }
            console.log("done!");
            
        })
       
        
    
    
  };


  module.exports.getjson = getjson;