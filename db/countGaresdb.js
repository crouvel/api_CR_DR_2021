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

/************************************** const garesdb ***************************************/
/*** BUT : exécute une requête sql afin de récupérer les noms des gares et leur nombre d'objets trouvés ***/
const garesdb = () => {

    /*Création d'une PROMESSE (Promise) pour gérer les erreurs de la requête sql. */
    return new Promise((resolve, reject) => {

        /* Select sql query pour afficher les attributs selectionnés de la table Records et toutes les données correspondantes */
        connection.query(`SELECT gc_obo_gare_origine_r_name, COUNT(gc_obo_gare_origine_r_name) as total FROM Records where gc_obo_gare_origine_r_name IS NOT NULL GROUP BY gc_obo_gare_origine_r_name`,
            (err, results) => {

                if (err) {
                    return reject(err);
                }
                return resolve(results);
            })
    })
};

module.exports.garesdb = garesdb;