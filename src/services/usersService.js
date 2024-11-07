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
    return await app.db.collection('users').insertOne(data);
}

const updateUser = async (id, data) => {
    const userId = utils.convertToObjectId(id);
    const query = { _id: userId };
    return await app.db.collection('users').replaceOne(query, data);
}

const deleteUser = async (id) => {
    const userId = utils.convertToObjectId(id);
    const query = { _id: userId };
    return await app.db.collection('users').deleteOne(query);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
