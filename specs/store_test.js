const assert = require('assert');
const Store = require('../store');
const Record = require('../record');

describe('store', function(){

    let store;
    let record1;
    let record2;
    let record3;


    beforeEach(function(){
        store1 = new Store('CC Records', 'Edinburgh');
        record1 = new Record('Metallica', 'Master of Puppets', 'Metal', 10.0);
        record2 = new Record('Led Zepplein', '4', 'Rock', 10.0);
        record3 = new Record('AC/DC', 'Highway To Hell', 'Rock', 10.0);
    })

    it('can get store name', function(){
        assert.strictEqual(store1.name, 'CC Records');
    })

    it('can get store city', function(){
        assert.strictEqual(store1.city, 'Edinburgh');
    })

    it('inventory starts empty', function(){
      assert.strictEqual(store1.inventory.length, 0);
    })

    it('can get store balance', function () {
        assert.strictEqual(store1.balance, 0);
    })

    it('can add records to inventory', function () {
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        assert.strictEqual(store1.inventory.length, 3);
    })

    it('can list inventory', function (){
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        assert.strictEqual(store1.viewInventory(), "Artist: Metallica, Title: Master of Puppets, Genre: Metal, Price: 10,Artist: Led Zepplein, Title: 4, Genre: Rock, Price: 10,Artist: AC/DC, Title: 4, Genre: Highway To Hell, Price: 10");
    })

    it('can get full store balance', function (){
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        assert.strictEqual(store1.getBalance(),30.0);
    })

    it('can sell a record', function(){
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        store1.sellRecord(record1);
        assert.strictEqual(store1.getBalance(),20);
        assert.strictEqual(store1.inventory.length, 2);
    })

    it('can get genre', function(){
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        var result = store1.getGenre('Rock');
        assert.deepEqual(result, [record2, record3]);
    })

})

