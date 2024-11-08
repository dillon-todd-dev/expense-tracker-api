const app = require('../app');
const utils = require('../utils/utils');

const getCategories = async () => {
    return await app.db.collection('categories').find().toArray();
};

const getCategoryById = async (id) => {
    const categoryId = utils.convertToObjectId(id);
    const query = { _id: categoryId };
    return await app.db.collection('categories').findOne(query);
};

const createCategory = async (data) => {
    return await app.db.collection('categories').insertOne(data);
};

const updateCategory = async (id, data) => {
    const categoryId = utils.convertToObjectId(id);
    const query = { _id: categoryId };
    return await app.db.collection('categories').replaceOne(query, data);
};

const deleteCategory = async (id) => {
    const categoryId = utils.convertToObjectId(id);
    const query = { _id: categoryId };
    return await app.db.collection('categories').deleteOne(query);
};

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
