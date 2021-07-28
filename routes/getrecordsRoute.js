const express = require('express');
const db = require('../db/recordsdb');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        let results = await db.recordsdb();
        res.json(results);
       
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});



module.exports = router;