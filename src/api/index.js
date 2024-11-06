const { Router } = require('express');

const router = Router();

const apiPaths = ['categories', 'expenses', 'users'];

apiPaths.forEach((path) => {
    router.use(`/${path}`, require(`./${path}`));
})

module.exports = router;