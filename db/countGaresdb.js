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


const garesdb = () => {

    return new Promise((resolve, reject) => {
        connection.query(`SELECT gc_obo_gare_origine_r_name, COUNT(gc_obo_gare_origine_r_name) as total FROM Records where gc_obo_gare_origine_r_name IS NOT NULL GROUP BY gc_obo_gare_origine_r_name`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
};

module.exports.garesdb = garesdb;