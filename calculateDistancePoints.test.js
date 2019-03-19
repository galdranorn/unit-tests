const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {

    // normal hill
    it('should return return 86 points', () => {
        const actual = calculateDistancePoints(111, 109, 98);
        const expected = '86';
        assert.equal(actual, expected);
    });

    // large hill
    it('should return return 85.2 points', () => {
        const actual = calculateDistancePoints(134.0, 134, 120);
        const expected = '85.2';
        assert.equal(actual, expected);
    });

    // mammoth hill
    it('should return return 153 points', () => {
        const actual = calculateDistancePoints(227.5, 225, 200);
        const expected = '153';
        assert.equal(actual, expected);
    });

});