var config = require('../db/config.json')
var mysql = require('mysql');

connection =  mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpassword,
    database: config.dbname
  });


const recordsdb = () => {

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM Records`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
};

module.exports.recordsdb = recordsdb;