const { Router } = require('express');
const usersService = require('../services/usersService');

const router = Router();

// GET /api/users
router.get('/', (req, res) => {
    usersService.getUsers()
        .then((users) => res.send(users))
        .catch((err) => res.send(err));
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    usersService.getUserById(id)
        .then((user) => res.send(user))
        .catch((err) => res.send(err));
});

// POST /api/users
router.post('/', (req, res) => {
    const { body } = req;
    usersService.createUser(body)
        .then((user) => res.send({ id: user.insertedId }))
        .catch((err) => res.send(err));
})

module.exports = router;
