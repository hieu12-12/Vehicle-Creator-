// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Declare Motorbike class that extends the vehicle class
class Motorbike extends Vehicle {
  // Properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // Constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]= [new Wheel(), new Wheel()]
  ) {
    // runs vehicle constructor to access parent properties
    super()

    // initialize properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // ensure motorcycles always have two wheels
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(15, 'Harley Davidson'), new Wheel(16,'Harley Davidson')];
    } else {
      this.wheels = wheels;
    }
  }
  // Wheelie method
  wheelie(): void {
    if (this.started){
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    } else {
      console.log(`Start the vehicle first.`);
    }
  }

// Override the printDetails parent property
  override printDetails(): void {
    // call the parent printDetails
    super.printDetails();
    // print details of the motorcycle
    console.log(
      `VIN: ${this.vin}
       COLOR: ${this.color}
       MAKE: ${this.make}
       MODEL: ${this.model}
       YEAR: ${this.year}
       WEIGHT: ${this.weight} lbs
       TOP SPEED: ${this.topSpeed} mph
       Wheels: ${this.wheels.length}`
    );

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }

}

// Export the Motorbike class as the default export
export default Motorbike;