const { Router } = require('express');

const router = Router();

// GET /api/expenses
router.get('/', (req, res) => {
    res.send('get expenses');
});

// GET /api/expenses/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`get expense by id: ${id}`);
});

module.exports = router;
