var fetch = require('node-fetch');
const { mapjson } = require('./mapjson');

/*******************************const getjson : méthode *********************************/

/* BUT : enregistrer les données du fichier json de l'API 
* paramètre url : représente l'url de l'API dont en veut récupérer le json &
l'insérer dans une table de base de données mysql.
*/

const getjson = async (url) => {
    
    //Utilisation de la méthode fetch pour récupérer la donnée "brute" de l'url d'API  
    fetch(url)  
    .then(res => res.json())
    //Premier .then() asynchrone représentant la promesse qui transforme les données reçues du fetch au format JSON.
      
        .then(json => {  
            
            /*Appel à la méthode mapjson()
            Deuxième méthode qui fait partie de la DAO.
            */
            mapjson(json);
        })
};

module.exports.getjson = getjson;