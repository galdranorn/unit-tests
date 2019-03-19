const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {

    // normal hill - passed k-Point
    it('should return return 86 points', () => {
        const actual = calculateDistancePoints(111, 109, 98);
        const expected = '86';
        assert.equal(actual, expected);
    });

    // large hill - passed k-Point
    it('should return return 85.2 points', () => {
        const actual = calculateDistancePoints(134.0, 134, 120);
        const expected = '85.2';
        assert.equal(actual, expected);
    });

    // mammoth hill - passed k-Point
    it('should return return 153 points', () => {
        const actual = calculateDistancePoints(227.5, 225, 200);
        const expected = '153';
        assert.equal(actual, expected);
    });

    // normal hill - not passed k-Point
    it('should return return 40 points', () => {
        const actual = calculateDistancePoints(88, 109, 98);
        const expected = '40';
        assert.equal(actual, expected);
    });

    // large hill - not passed k-Point
    it('should return return 47.4 points', () => {
        const actual = calculateDistancePoints(113, 134, 120);
        const expected = '47.4';
        assert.equal(actual, expected);
    });

    // mammoth hill - not passed k-Point
    it('should return return 112.8 points', () => {
        const actual = calculateDistancePoints(194, 225, 200);
        const expected = '112.8';
        assert.equal(actual, expected);
    });

});