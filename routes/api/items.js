const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// Get api/items
// Get all Items
// access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// Post api/items
// Create an Item
// access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// Delete api/items
// Delete an Item
// access Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));

});


module.exports = router;