const request = require('request');
const express = require('express');

let ingrList = 'chicken,tomato,pepper,cheese';
const app = express();
// const app = express();


const options = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/findByIngredients',
    qs: {
        apiKey: '0ce380dcbd274d5b8203bbca9a7cb1b8',
        ingredients: ingrList,
        ignorePantry: 'true',
        ranking: '2'
    }
};
//routes 
app.get('/api/product', (req, res) => {
    console.log("product api called");
    console.log(req);
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

        res.json(response);
    });
});

module.exports = app;
