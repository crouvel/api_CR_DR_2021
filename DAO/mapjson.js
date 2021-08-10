var connection = require('../server')
var mysql = require('mysql');
require('dotenv').config();

/* Variable connection pour accéder aux identifiants de la bdd et s'y connecter.
host: hôte
user: utilisateur
password: mot de passe
database : base de données
*/
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

/************************************** const mapjson ***************************************/
/* 
Récupère un fichier json (objet javascript) et enregistre chacunes des données désirées dans un tableau
Les lignes du tableau sont insérées dans une table de bdd mysql.
* Paramètre : json => fichier json qui doit être récupéré dans une base de données.
*/
const mapjson = async (json) => {
    /*Tableau *values* pour récpérer les valeurs et attributs du json*/
    var values = [];

    /*Boucle for où les valeurs du json sont ajoutées au tableau values.*/
    for (var i = 0; i < json.records.length; i++) {
        /* Ajout grâce à la fonction push()*/
        values.push([json.records[i].recordid, json.records[i].fields.gc_obo_nature_c,
        json.records[i].fields.gc_obo_gare_origine_r_name,
        new Date(Date.parse(json.records[i].fields.date)),
        json.records[i].fields.gc_obo_nom_recordtype_sc_c,
        json.records[i].fields.gc_obo_type_c,
        json.records[i].fields.gc_obo_gare_origine_r_code_uic_c,
        ]);

        //L'insertion se fait à l'aide d'un tableau imbriqué sous la forme [ [a,b],[c,d] ] transformée au format (a,b),(c,d)
        connection.query(
            'INSERT IGNORE INTO Records (recordid,gc_obo_nature_c,gc_obo_gare_origine_r_name,date,gc_obo_nom_recordtype_sc_c,gc_obo_type_c,gc_obo_gare_origine_r_code_uic_c) VALUES ?',
            [values],
            function (err, result) {
                if (err) {
                    console.log(err);
                }
            }
        )
    }
    console.log("done!");
};

module.exports.mapjson = mapjson;