/***** Route disponible à l'URL : http://localhost:5000/api/records/garescount *****/
/****** A déployer *******/

const express = require('express');
const db = require('../db/countGaresdb');
const router = express.Router();

/****** Requête get pour afficher les noms des gares selon le nombres d'objets perdus dans celles-ci *******/
router.get('/', async (req, res, next) => {
    try {
        /* Appel de la fonction garesdb pour récupérer grâce au get et stockage dans la constante results */
        let results = await db.garesdb();

        /* Transformation au format JSON */
        res.json(results);

    } catch (e) {
        console.log(e);

        /* Envoi du statut de la requête 500 en cas d'erreur*/
        res.sendStatus(500);
    }
});

module.exports = router;