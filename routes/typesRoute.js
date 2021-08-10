const express = require('express');
const db = require('../db/countTypesdb');
const router = express.Router();

/****** Requêtes get pour récupérer les types d'objets trouvés en proportion ******/
router.get('/', async (req, res, next) => {
    try{
        
        /* Appel de la fonction typesdb pour récupérer grâce au get et stockage dans la constante results */
        let results = await db.typesdb();
         /* Transformation au format JSON */
        res.json(results);
       
    }catch(e){
        console.log(e);
        
         /* Envoi du statut de la requête 500 en cas d'erreur*/
        res.sendStatus(500);
    }
});

module.exports = router;