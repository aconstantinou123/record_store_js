const assert = require('assert');
const Store = require('../Store');
const Record = require('../Record');
const RecordCollector = require('../RecordCollector');

describe('Record Collector', function () {

    let store;
    let record1;
    let record2;
    let record3;
    let record4;
    let record5;
    let collector1;

    beforeEach(function(){
        store1 = new Store('CC Records', 'Edinburgh');
        record1 = new Record('Metallica', 'Master of Puppets', 'Metal', 10.0);
        record2 = new Record('Led Zepplein', '4', 'Rock', 10.0);
        record3 = new Record('AC/DC', 'Highway To Hell', 'Rock', 10.0);
        record4 = new Record('Marylin Manson', 'Mechanical Animal', 'Alt Metal', 15.0)
        record5 = new Record('Emperor', 'In the Nightside Eclipse', 'Metal', 20.0)
        collector1 = new RecordCollector(100);
    })

    it('can get cash', function(){
        assert.strictEqual(collector1.cash, 10);
    })

    it('can see collection is empty', function(){
        assert.strictEqual(collector1.collection.length, 0);
    })

    it('can sell a record', function() {
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        collector1.buyRecord(record1, store1);
        assert.strictEqual(collector1.collection.length, 1);
    })

    it('can get total value of collection', function () {
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        collector1.buyRecord(record1, store1);
        collector1.buyRecord(record2, store1);
        collector1.buyRecord(record3, store1);
        assert.strictEqual(collector1.totalValue(), 30);
    })

    it('can get total value of genre', function () {
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record3);
        collector1.buyRecord(record1, store1);
        collector1.buyRecord(record2, store1);
        collector1.buyRecord(record3, store1);
        assert.strictEqual(collector1.getTotalValueByGenre('Rock'), 20);
    })

    it('can get most valuable record', function (){
        store1.addRecord(record1);
        store1.addRecord(record2);
        store1.addRecord(record4);
        collector1.buyRecord(record1, store1);
        collector1.buyRecord(record2, store1);
        collector1.buyRecord(record4, store1);
        assert.strictEqual(collector1.getMostValuableRecord(), record4);
        assert.strictEqual(collector1.cash, 65);
    })

    it('can get sort records by value', function () {
        store1.addRecord(record3);
        store1.addRecord(record4);
        store1.addRecord(record5);
        collector1.buyRecord(record4, store1);
        collector1.buyRecord(record3, store1);
        collector1.buyRecord(record5, store1);
        assert.deepEqual(collector1.sortByValue(), [record3, record4, record5])
    })

})