
/*var config = require('../db/config.json')
var mysql = require('mysql');

connection =  mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpassword,
    database: config.dbname
  });

const mapjson = async () => {
    new Promise((resolve, reject) => {
      const fetch_json = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_type_c');
      const response = await fetch_json.json();
      
      var values = [];
        for(var i=0; i< response.length; i++)
        values.push([response.records[i].recordid,response.records[i].fields.gc_obo_nature_c, 
            response.records[i].fields.gc_obo_gare_origine_r_name,
            new Date(Date.parse(response.records[i].fields.date)), 
            response.records[i].fields.gc_obo_nom_recordtype_sc_c,
            response.records[i].fields.gc_obo_type_c,
            response.records[i].fields.gc_obo_gare_origine_r_code_uic_c,
         ]);
        
        
        //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
        connection.query('INSERT IGNORE INTO Records (recordid, gc_obo_nature_c, gc_obo_gare_origine_r_name, date, gc_obo_nom_recordtype_sc_c, gc_obo_type_c, gc_obo_gare_origine_r_code_uic_c) VALUES ?', 
        [values], 
        
        function(err,result) {
          if(err) {
             
             reject(err);
          }
         else {
           
             resolve(result);
          }
    }
    )
    });
}

module.exports.mapjson = mapjson;*/
