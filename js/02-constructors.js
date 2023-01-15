// Основы ООП

const Car = function ({ brand, model, price } = {}) {

    this.brand = brand;
    this.model = model;
    this.price = price;

}

Car.prototype.sayHi = function () {
    console.log('Hello');
}

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
}


const myCar1 = new Car({ brand: 'Audi', model: 'Q3', price: 35000});
console.log(myCar1);
myCar1.sayHi();
myCar1.changePrice(30000);
console.log(myCar1);


const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000});
console.log(myCar2);

const myCar3 = new Car({ brand: 'AUDI', model: 'A6', price: 65000});
console.log(myCar3);