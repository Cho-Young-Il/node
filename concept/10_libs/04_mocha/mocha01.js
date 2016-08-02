var assert  = require('assert'),
    fs = require('fs');

describe('Example', function() {
    describe('calculation', function() {
        it('1+1 should be 2', function(done) {
            fs.readFile('example.txt', function(err, data) {
                if(err) { throw err; }
                assert.equal(1 + 1, 2);
                console.log(data);
                done();
            });
        });
    });
});
