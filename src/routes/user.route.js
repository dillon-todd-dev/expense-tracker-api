const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('get users');
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`get user by id: ${id}`);
})

module.exports = router;