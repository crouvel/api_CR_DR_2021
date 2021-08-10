var mysql = require('mysql');
require('dotenv').config();

/* Variable connection pour accéder aux identifiants de la bdd et s'y connecter.
*/
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

/************************************** const recordsdb ***************************************/
/*** BUT : exécute une requête sql afin de récupérer l'emsemble des objets trouvés ***/
const recordsdb = () => {

    /*Création d'une PROMESSE (Promise) pour gérer les erreurs de la requête sql. */
    return new Promise((resolve, reject) => {

        /* Select sql query pour afficher les attributs selectionnés de la table Records et toutes les données correcpondantes */
        connection.query(`SELECT DATE_FORMAT(date, "%d/%m/%Y %T") as Date, gc_obo_gare_origine_r_name as Gare, gc_obo_gare_origine_r_code_uic_c as "Code UIC", gc_obo_nature_c as "Nature de l'object", gc_obo_type_c as "Type" FROM Records ORDER BY Records.date DESC`,

            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            })
    })
};

module.exports.recordsdb = recordsdb;