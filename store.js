const Record = require('./record');

const Store = function(name, city){
    this.name = name;
    this.city = city;
    this.inventory = [];
    this.balance = 0;
}

Store.prototype.addRecord = function (record) {
    this.inventory.push(record);
}

Store.prototype.viewInventory = function () {

  var newInventory = [];

    this.inventory.forEach(function(record){
        newInventory.push(record.toString());
    })
    return newInventory.toString();

}

Store.prototype.getBalance = function () {

    var counter = 0;

    this.inventory.forEach(function(record){
        counter += record.price;
    })
    return counter;
}

Store.prototype.sellRecord = function (soldRecord) {
    
    var updateInventory = this.inventory.filter(function (record) {
        return record !== soldRecord;
    })
    this.inventory = updateInventory;
    return this.inventory;
}

Store.prototype.getGenre = function (genre) {

    var genre = this.inventory.filter(function(record){

        if (record.genre === genre){
            return record
        }

    })
    return genre;
}



module.exports = Store;