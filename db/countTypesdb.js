var mysql = require('mysql');
require('dotenv').config();

/* Variable connection pour accéder aux identifiants de la base de données (bdd)
* et se connecter à celle-ci.
*/
var connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });


const typesdb = () => {

    return new Promise((resolve, reject) => {
        connection.query(`SELECT gc_obo_type_c, COUNT(gc_obo_type_c) as total FROM Records GROUP BY gc_obo_type_c`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
};

module.exports.typesdb = typesdb;