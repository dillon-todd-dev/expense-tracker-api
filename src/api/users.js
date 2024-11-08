const { Router } = require('express');
const usersService = require('../services/usersService');

const router = Router();

// GET /api/users
router.get('/', async (req, res) => {
    const users = await usersService.getUsers();
    res.send(users);
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getUserById(id);
    res.send(user);
});

// POST /api/users
router.post('/', async (req, res) => {
    const { body } = req;
    const user = await usersService.createUser(body);
    res.send({ id: user.insertedId });
});

// PATCH /api/users/:id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const user = await usersService.updateUser(id, body);
    res.send(user);
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await usersService.deleteUser(id);
    res.sendStatus(200);
});

module.exports = router;
