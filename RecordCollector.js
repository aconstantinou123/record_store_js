const Record = require('./Record');
const Store = require('./Store');

const RecordCollector = function (cash) {
    this.cash = cash;
    this.collection = [];
}

RecordCollector.prototype.buyRecord = function (recordToBuy, store) {
    store.inventory.forEach(function(record){
        if(record === recordToBuy && this.cash >= record.price){
            this.cash -= record.price;
            this.collection.push(record);
            store.sellRecord(record);
        }
    }.bind(this));
}

RecordCollector.prototype.totalValue = function () {
    var counter = 0;
    this.collection.forEach(function(record){
        counter += record.price;
    })
    return counter;
}

RecordCollector.prototype.getTotalValueByGenre = function (genre) {
    var counter = 0;
    var genre = this.collection.filter(function(record){
        if (record.genre === genre){
            return record
        }
    }).forEach(function(record){
        counter += record.price;
        })
      return counter;
    }

RecordCollector.prototype.getMostValuableRecord = function () {

    var mostValuable = this.collection[0];

    this.collection.forEach(function(record){
        if (mostValuable.price < record.price){
            mostValuable = record;
        }

    })
    return mostValuable;
}

RecordCollector.prototype.sortByValue = function () {
    // var valueArray = [];
    // this.collection.forEach(function(record){
    //     valueArray.push(record.price);
    // })
    // valueArray.sort();
    // var sortedArray = [];
    // for(value of valueArray){
    //     this.collection.forEach(function (record) {
    //         if(value == record.price){
    //             sortedArray.push(record);
    //         }
    //     })
    // }
    return this.collection.sort(function (a, b) {
        return a.price - b.price;
    })
}

module.exports = RecordCollector;