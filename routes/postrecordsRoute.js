const express = require('express');
const db = require('../db/recordsdb');
const router = express.Router();
const { getjson } = require('../DAO/getjson');

router.post('/', async (req, res, next) => {
    try{
      await getjson('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_type_c');
    res.status(201).json({
        message: 'Valeurs insérées !'
      });
    }catch(e){
       console.log(e);
    }
});



module.exports = router;