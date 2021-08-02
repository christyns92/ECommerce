const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', async(req, res) => {
    // find all tags and linked data
    try {
        const TagData = await Tag.findAll({
            // be sure to include its associated Products
            include: [{
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"]
            }],
        });
        if (TagData) res.status(200).json(TagData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async(req, res) => {
    // find a single tag by ID, as well as, associated data
    try {
        const TagData = await Tag.findByPk(req.params.id, {
            // includes product
            include: [{ model: Product, attributes: ["id", "product_name", "price", "stock", "category_id"] }],
        });

        if (!TagData) {
            res.status(404).json({ message: "There is no Tag with this ID" });
            return;
        }

        res.status(200).json(TagData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.post('/', async(req, res) => {
    // create new tag
    try {
        const TagData = await Tag.create(req.body);
        res.status(200).json(TagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async(req, res) => {
    // update tags name by ID
    try {
        const TagData = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!TagData) {
            res.status(404).json({ message: "There is no Tag with this ID" });
            return;
        }

        res.status(200).json(TagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    // delete tag by ID
    try {
        const TagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!TagData) {
            res.status(404).json({ message: "There is no tag with this ID" });
            return;
        }

        res.status(200).json(TagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;