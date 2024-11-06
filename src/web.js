const express = require('express');
const apiRoutes = require('./api');

module.exports.start = () => {
    const web = express();
    const PORT = process.env.PORT || 3000;

    web.use('/api', apiRoutes);

    web.get('/health', (req, res) => {
        res.sendStatus(200);
    });

    web.listen(PORT, () => console.log(`server listing on port ${PORT}`));
};
