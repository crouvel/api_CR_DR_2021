const fetch = require('node-fetch');

fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_type_c')
.then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
.then(data => console.log(data));