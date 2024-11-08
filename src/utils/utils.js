const { ObjectId } = require('mongodb');

const convertToObjectId = (id) => {
    return id instanceof ObjectId ? id : new ObjectId(id);
};

module.exports = {
    convertToObjectId,
};
