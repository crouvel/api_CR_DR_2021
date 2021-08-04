var config = require('../db/config.json')
var mysql = require('mysql');
require('dotenv').config();

var connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
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