const app = require('../app');

const getUsers = () => {
    return app.db.collection('users').find({}).toArray();
};

module.exports = {
    getUsers,
};
