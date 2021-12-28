const assert = require('assert');

describe('ArrayTest', function() {

    before(() => console.log("start"));
    after(() => console.log("finish"));

    beforeEach(() => console.log("each part start"));
    afterEach(() => console.log("each test finish"));

    describe('indexOfSuccess', function() {
        it('should return 0 when the index is 1', function() {
            assert.equal([1, 2, 3].indexOf(1), 0);
        });
        it('should return 1 when the index is 2', function() {
            assert.equal([1, 2, 3].indexOf(2), 1);
        });
        it('should return 2 when the index is 3', function() {
            assert.equal([1, 2, 3].indexOf(3), 2);
        });
    });

    describe('#indexOfError', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});