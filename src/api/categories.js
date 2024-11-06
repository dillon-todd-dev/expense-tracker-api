const { Router } = require('express');

const router = Router();

// GET /api/categories
router.get('/', (req, res) => {
    res.send('get categories');
})

// GET /api/categories/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`get category by id: ${id}`);
})

module.exports = router;