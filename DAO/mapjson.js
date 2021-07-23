const { connection } = require("../server");


const mapjson = async (JSobjectjson) => {
    return new Promise((resolve, reject) => {
        var values = [];
        for(var i=0; i< JSojectjson.length; i++)
        values.push([JSobjectjson.records[i].recordid,JSobjectjson.records[i].fields.gc_obo_nature_c, 
            JSobjectjson.records[i].fields.gc_obo_gare_origine_r_name,
            new Date(Date.parse(JSobjectjson.records[i].fields.date)), 
            JSobjectjson.records[i].fields.gc_obo_nom_recordtype_sc_c,
            JSobjectjson.records[i].fields.gc_obo_type_c,
            JSobjectjson.records[i].fields.gc_obo_gare_origine_r_code_uic_c,
         ]);
        
        
        //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
        connection.query('INSERT INTO Records (recordid,gc_obo_nature_c,gc_obo_gare_origine_r_name,date,gc_obo_nom_recordtype_sc_c,gc_obo_type_c,gc_obo_gare_origine_r_code_uic_c) VALUES ?', 
        [values], 
        
        function(err,result) {
          if(err) {
             res.send('Error');
          }
         else {
             res.send('Success');
          }
    }
    )
    });
}

module.exports.mapjson = mapjson;