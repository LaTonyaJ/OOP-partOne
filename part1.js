class Vehicle {
    constructor(make, model, year){
        this.a = make;
        this.b = model;
        this.c = year;
    }
    honk() {
        return 'Beep.';
    }
    toString() {
        return `This vehicle is a ${this.a} ${this.b} year ${this.c}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numWheels){
    super(make, model, year);
    this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels){
        super(make,model, year, numWheels);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOOMM!!!';
    }
}

class Garage {
    contructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)){
            return `Only Vehicles allowed!`;
        }
        if(this.vehicles.length >= this.capacity){
            return `We're FULL.....sorry`;
        }
        else{
            this.vehicles.push(newVehicle);
            return `Vehicle Added!`
        }
        
    }

}