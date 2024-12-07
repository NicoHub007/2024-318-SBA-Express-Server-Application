const express = require('express');
const router = express.Router();
const Vegetable = require('../data/vegetables');

//===== Route for getting all vegetables ======

router.route('/'); // GET request to /api/vegetables

router.get('/', (req, res) => {
    try {
        const vegetables = Vegetable.find();
        res.json(vegetables);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});