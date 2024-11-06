const { Router } = require('express');
const usersService = require('../services/usersService');

const router = Router();

// GET /api/users
router.get('/', async (req, res) => {
    const users = await usersService.getUsers();
    res.send(users);
})

// GET /api/users/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`get user by id: ${id}`);
})

module.exports = router;