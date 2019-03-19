const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {

    // all notes different
    it('should return note 51.5', () => {
        const actual = calculateStylePoints([16, 17, 16.5, 19, 18]);
        const expected = 51.5;
        assert.equal(actual, expected);
    });

    // double note
    it('should return note 49.5', () => {
        const actual = calculateStylePoints([16, 17, 16.5, 16, 18]);
        const expected = 49.5;
        assert.equal(actual, expected);
    });

    // all notes the same
    it('should return 45', () => {
        const actual = calculateStylePoints([15, 15, 15, 15, 15]);
        const expected = 45;
        assert.equal(actual, expected);
    });

});