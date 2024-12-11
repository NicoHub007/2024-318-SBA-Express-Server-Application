const express = require('express');
const router = express.Router();
const Drink = require('../data/drinks');

//===== Route for getting all meats ======

// INDEX
// this is called an index route, where you can see all of the data
// THIS is one version of READ
// READ many
// this is only practical when you have small amounts of data
// but you you can also use an index route and limit the number of responses

router.get('/', (req, res) => {
    res.render('drinks/index', { drinks: Drink });
})

// N - NEW - allows a user to input a new meat
router.get('/new', (req, res) => {
    // the 'drinks/New' in the render needs to be pointing to something in my views folder
    res.render('drinks/New');
})

// DELETE
router.delete('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Drink.length) {
        Drink.splice(req.params.id, 1);
        res.json(Drink);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

// UPDATE
// put replaces a resource
router.put('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Drink.length) {
        // put takes the request body and replaces the entire database entry with it
        // find the id and replace the entire thing with the req.body
        if (req.body.caffeine === 'on') { // if checked, req.body.caffeine is set to 'on'
            req.body.caffeine = true;
        } else { // if not checked, req.caffeine is undefined
            req.body.caffeine = false;
        }
        Drink[req.params.id] = req.body;
        res.json(Drink[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }

})

// patch updates part of it
router.patch('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Drink.length) {
        // find the id and replace only the new properties
        console.log(Drink[req.params.id]);
        console.log(req.body)
        const newDrink = { ...Drink[req.params.id], ...req.body }
        Drink[req.params.id] = newDrink;
        res.json(Drink[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.caffeine === 'on') { // if checked, req.body.isItFresh is set to 'on'
        req.body.caffeine = true;
    } else { // if not checked, req.body.caffeine is undefined
        req.body.caffeine = false;
    }
    Drink.push(req.body)
    // res.send('this was the post route');
    res.json(Drink);
})

// EDIT
router.get('/:id/Edit', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < Drink.length) {
        res.render('drinks/Edit', { drink: Drink[id], id });
    } else {
        res.status(404).send('<p>That is not a valid id</p>');
    }
});

// SHOW
router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < Drink.length) {
        res.render('drinks/Show', { drink: Drink[id], id });
    } else {
        res.status(404).send('<p>That is not a valid id</p>');
    }
});

module.exports = router;