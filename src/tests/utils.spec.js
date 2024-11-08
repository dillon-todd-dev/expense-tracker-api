const utils = require('../utils/utils');
const { ObjectId } = require('mongodb');

const hex = require('crypto').randomBytes(12).toString('hex');

describe('Test Utils', () => {
    it('convertToObjectId string', () => {
        const input = hex;
        const id = utils.convertToObjectId(input);
        expect(id instanceof ObjectId).toBe(true);
    });

    it('convertToObjectId objectId', () => {
        const input = new ObjectId(hex);
        const id = utils.convertToObjectId(input);
        expect(id instanceof ObjectId).toBe(true);
    });
});
