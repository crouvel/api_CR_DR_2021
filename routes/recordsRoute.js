const express = require('express');
const db = require('../db/recordsdb');
const router = express.Router();

/******** Requête get pour récupérer les records *******/
router.get('/', async (req, res, next) => {
    try {
        /* Appel de la fonction recordsdb pour récupérer grâce au get et stockage dans la constante results */
        let results = await db.recordsdb();

        /* Transformation au format JSON */
        res.json(results);

    } catch (e) {
        console.log(e);

        /* Envoi du statut de la requête 500 en cas d'erreur*/
        res.sendStatus(500);
    }
});



module.exports = router;