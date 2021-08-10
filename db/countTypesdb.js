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

/************************************** const typesdb ***************************************/
/*** BUT : exécute une requête sql afin de récupérer les types d'objets trouvés et leur nombre ***/
const typesdb = () => {

    /*Création d'une PROMESSE (Promise) pour gérer les erreurs de la requête sql. */
    return new Promise((resolve, reject) => {

        /* Select sql query pour afficher les attributs selectionnés de la table Records et toutes les données correcpondantes */
        connection.query(`SELECT gc_obo_type_c, COUNT(gc_obo_type_c) as total FROM Records GROUP BY gc_obo_type_c`,

            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            })
    })
};

module.exports.typesdb = typesdb;