const assert = require('assert');
const Record = require('../record');

describe('record', function () {

    let record;

    beforeEach(function () {
        record1 = new Record('Metallica', 'Master of Puppets', 'Metal', 10.0);
    })

    it('can get back artist name', function(){
        assert.strictEqual(record1.artist, 'Metallica');
    })

    it(' can get title', function(){
        assert.strictEqual(record1.title, 'Master of Puppets');
    })

    it('can get genre', function(){
        assert.strictEqual(record1.genre, 'Metal');
    })

    it('can get price', function(){
        assert.strictEqual(record1.price, 10.0);
    })

    it('can get all properties on a record', function () {
        resultString = 'Artist: Metallica, Title: Master of Puppets, Genre: Metal, Price: 10';
        assert.strictEqual(record1.toString(), resultString);
    })

})
