const express = require('express');
const apiRoutes = require('./api');
const app = require('./app');

const log = app.logger;

module.exports.start = () => {
    const web = express();
    const PORT = process.env.PORT || 3000;

    web.use('/api', apiRoutes);

    web.get('/health', (req, res) => {
        res.sendStatus(200);
    });

    web.listen(PORT, () => log.debug(`server listing on port ${PORT}`));
};
