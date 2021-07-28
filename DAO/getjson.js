var fetch = require('node-fetch');

const getjson = async (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
        .then(data => resolve(data))
        .catch(error => reject(error));
    }
    )
  };


  module.exports.getjson = getjson;