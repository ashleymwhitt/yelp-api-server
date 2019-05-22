
const express  = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

router.get('/search/:price/:location', (req, res) => {
    const apiKey = '4f5nO-fr_cZKWVdoSjfHEha5uA_aCo1GIhGUSvRubnm7AyUvyYA3IJlc-5hn062om-XmJSI99uonC1VmmX5qqU3vlt2RzMVEcLobvwYEmrq7w8p4HJV2tWSqAebiXHYx';

    const searchRequest = {
        price: req.params.price,
        location: req.params.location,
        open_now: true
    };

    const client = yelp.client(apiKey);
    client.search(searchRequest)
        .then(response => {
            const randomNum = Math.floor(Math.random() * (response.jsonBody.businesses.length - 1));
            const firstResult = response.jsonBody.businesses[randomNum];
            const prettyJson = JSON.stringify(firstResult, null, 4);
            res.status(200).json(firstResult)
        })
        .catch(e => {
            console.log(e);
            res.status(501).json(e);
        });

});

module.exports = router;