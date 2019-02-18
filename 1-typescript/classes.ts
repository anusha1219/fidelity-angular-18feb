export class Car {
    model: string;
    power: number;
    mileage: number;

    constructor(model, power, mileage) {
        this.model = model;
        this.power = power;
        this.mileage = mileage;
    }

    start() {
        console.log('starting..')
    }

    details() {
        console.log('Model:' + this.model + '\n' + 'Power: ' + this.power + 'cc' + '\n' + 'mileage: ' + this.mileage);
    }
}



