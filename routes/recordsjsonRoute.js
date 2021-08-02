/*const express = require('express');
const { getjson } = require('../DAO/getjson')
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        let results = await getjson('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_type_c');
        res.json(results);
       
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});



module.exports = router;*/