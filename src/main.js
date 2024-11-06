const express = require('express');
const { config } = require('dotenv');
const web = require('./web');

config();

const initApp = () => {
    try {
        web.start();
    } catch (err) {
        console.log('error starting application');
    }
};

initApp();
