const { Router } = require('express');
const categoriesService = require('../services/categoriesService');

const router = Router();

// GET /api/categories
router.get('/', async (req, res) => {
    const categories = await categoriesService.getCategories();
    res.send(categories);
});

// GET /api/categories/:id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const category = await categoriesService.getCategoryById(id);
    res.send(category);
});

// POST /api/categories
router.post('/', async (req, res) => {
    const { body } = req;
    const category = await categoriesService.createCategory(body);
    res.send({ id: category.insertedId });
});

// PATCH /api/categories/:id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const category = await categoriesService.updateCategory(id, body);
    res.send(category);
});

// DELETE /api/categories/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await categoriesService.deleteCategory(id);
    res.sendStatus(200);
});

module.exports = router;
