const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/randomBeer',(req,res)=>{
      axios.get('http://api.brewerydb.com/v2/beer/random?key=64780294f54d4fdc51bf5f93362b21cc')
            .then(response=>response.data)
            .then(beer=>res.send(beer))
            .catch(console.error)
});

module.exports = router;
