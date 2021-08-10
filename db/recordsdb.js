var mysql = require('mysql');
require('dotenv').config();

/* Variable connection pour accéder aux identifiants de la bdd et s'y connecter.
*/
var connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });


const recordsdb = () => {

    return new Promise((resolve, reject) => {
        connection.query(`SELECT DATE_FORMAT(date, "%d/%m/%Y %T") as Date, gc_obo_gare_origine_r_name as Gare, gc_obo_gare_origine_r_code_uic_c as "Code UIC", gc_obo_nature_c as "Nature de l'object", gc_obo_type_c as "Type" FROM Records ORDER BY Records.date DESC`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
};

module.exports.recordsdb = recordsdb;