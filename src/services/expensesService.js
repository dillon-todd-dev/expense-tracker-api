const app = require('../app');
const utils = require('../utils/utils');

const getExpenses = async () => {
    return await app.db.collection('expenses').find().toArray();
};

const getExpenseById = async (id) => {
    const expenseId = utils.convertToObjectId(id);
    const query = { _id: expenseId };
    return await app.db.collection('expenses').findOne(query);
};

const createExpense = async (data) => {
    return await app.db.collection('expenses').insertOne(data);
};

const updateExpense = async (id, data) => {
    const expenseId = utils.convertToObjectId(id);
    const query = { _id: expenseId };
    return await app.db.collection('expenses').replaceOne(query, data);
};

const deleteExpense = async (id) => {
    const expenseId = utils.convertToObjectId(id);
    const query = { _id: expenseId };
    return await app.db.collection('expenses').deleteOne(query);
};

module.exports = {
    getExpenses,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense,
};
