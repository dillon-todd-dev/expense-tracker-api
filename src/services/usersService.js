const app = require('../app');
const utils = require('../utils/utils');

const getUsers = async () => {
    return await app.db.collection('users').find().toArray();
};

const getUserById = async (id) => {
    const userId = utils.convertToObjectId(id);
    const query = { _id: userId };
    return await app.db.collection('users').findOne(query);
}

const createUser = async (data) => {
    const user = await app.db.collection('users').insertOne(data);
    return user;
}

module.exports = {
    getUsers,
    getUserById,
    createUser
};
