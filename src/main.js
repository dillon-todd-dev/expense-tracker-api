const express = require('express');
const { config } = require('dotenv');

config();

const initApp = () => {
    const app = express();

    app.get('/', (req, res) => {
        res.sendStatus(200);
    });

    app.listen(3000, () => console.log('server listening on port 3000'));
};

initApp();
