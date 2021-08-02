const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async(req, res) => {
    // find all categories
    try {
        const categoryData = await Category.findAll({
            // be sure to include its associated Products
            include: [{ model: Product }],
        });
        if (categoryData) res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    // find a specific category by ID
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            // includes product
            include: [{ model: Product }],
        });

        if (!categoryData) {
            res.status(404).json({ message: "There is no category with this ID" });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    // New category creation
    try {
        const categoryData = await Category.create(req.body);
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async(req, res) => {
    // update a category by its ID
    try {
        const categoryData = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!categoryData) {
            res.status(404).json({ message: "There is no category with this ID" });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.delete('/:id', async(req, res) => {
    // delete a category by its ID
    try {
        const categoryData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!categoryData) {
            res.status(404).json({ message: "There is no category with this ID" });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;