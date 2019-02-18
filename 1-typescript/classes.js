"use strict";
var Car = (function () {
    function Car(model, power, mileage) {
        this.model = model;
        this.power = power;
        this.mileage = mileage;
    }
    Car.prototype.start = function () {
        console.log('starting..');
    };
    Car.prototype.details = function () {
        console.log('Model:' + this.model + '\n' + 'Power: ' + this.power + 'cc' + '\n' + 'mileage: ' + this.mileage);
    };
    return Car;
}());
exports.Car = Car;
