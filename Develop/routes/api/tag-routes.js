const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', (req, res) => {
    // find all tags and linked data

});

router.get('/:id', (req, res) => {
    // find a single tag by ID, as well as, associated data

});

router.post('/', (req, res) => {
    // create new tag
});

router.put('/:id', (req, res) => {
    // update tags name by ID
});

router.delete('/:id', (req, res) => {
    // delete tag by ID
});

module.exports = router;