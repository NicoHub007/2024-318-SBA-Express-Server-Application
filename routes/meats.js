const express = require('express');
const router = express.Router();
const Meat = require('../data/meats');

//===== Route for getting all meats ======

// INDEX
// this is called an index route, where you can see all of the data
// THIS is one version of READ
// READ many
// this is only practical when you have small amounts of data
// but you you can also use an index route and limit the number of responses

router.route('/'); // '/' is the root route
router.get('/', (req, res) => {
    res.json(Meat);
})

// N - NEW - allows a user to input a new fruit
router.get('/new', (req, res) => {
    // the 'meats/New' in the render needs to be pointing to something in my views folder
    res.render('meats/New');
})

// DELETE
router.delete('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Meat.length) {
        Meat.splice(req.params.id, 1);
        res.json(Meat);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

// UPDATE
// put replaces a resource
router.put('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Meat.length) {
        // put takes the request body and replaces the entire database entry with it
        // find the id and replace the entire thing with the req.body
        if (req.body.isItFresh === 'on') { // if checked, req.body.isItFresh is set to 'on'
            req.body.isItFresh = true;
        } else { // if not checked, req.body.isItFresh is undefined
            req.body.isItFresh = false;
        }
        Meat[req.params.id] = req.body;
        res.json(Meat[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }

})

// patch updates part of it
router.patch('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Meat.length) {
        // find the id and replace only the new properties
        console.log(Meat[req.params.id]);
        console.log(req.body)
        const newMeat = { ...Meat[req.params.id], ...req.body }
        Meat[req.params.id] = newMeat;
        res.json(Meat[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    // you should check this when you first start, but then get rid of this console.log
    // console.log(req.body);
    // need to add logic to change the check or not checked to true or false
    if (req.body.isItFresh === 'on') { // if checked, req.body.isItFresh is set to 'on'
        req.body.isItFresh = true;
    } else { // if not checked, req.body.isItFresh is undefined
        req.body.isItFresh = false;
    }
    Meat.push(req.body)
    // res.send('this was the post route');
    res.json(Meat);
})

// E - Edit
router.get('/id/edit', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Meat.length) {
        res.render('Meat/Edit', { meat: Meat[req.params.id], id: req.params.id });
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

// SHOW
// another version of READ is called a show route
// in this one, we can see more information on an individual piece of data
router.get('/:id', (req, res) => {
    // in this case, my unique identifier is going to be the array index
    // res.send(`<div>${req.params.id}</div>`)
    // this id can be anything, so i probably want to do some checking
    // before accessing the array
    if (req.params.id >= 0 && req.params.id < Meat.length) {
        res.json(Meat[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

module.exports = router;