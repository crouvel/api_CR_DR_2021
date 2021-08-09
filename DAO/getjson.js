var fetch = require('node-fetch');
const { mapjson } = require('./mapjson');

const getjson = async (url) => {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            mapjson(json);
        })
};

module.exports.getjson = getjson;