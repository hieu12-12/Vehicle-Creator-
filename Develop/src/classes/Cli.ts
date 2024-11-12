// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Truck | Motorbike )[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;
  isProcessing: boolean = false;  // New flag to track processing state


  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car | Truck | Motorbike )[]) {
    this.vehicles = vehicles;
  }
   // Method to get the selected vehicle based on its VIN
  getSelectedVehicle(): Car | Truck | Motorbike | undefined {
    return this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);
  }
  

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
        else if (answers.vehicleType === 'Truck') {
          // create a truck
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          // create a motorbike
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        const truck = new Truck(
          Cli.generateVin(), // Static method called using the class name
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          parseInt(answers.towingCapacity)
        );
        // TODO: push the truck to the vehicles array
        this.vehicles.push(truck);
        // TODO: set the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truck.vin;
        // TODO: perform actions on the truck
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        const frontWheel = new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand);
        const rearWheel = new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand);
        const motorbike = new Motorbike(
          Cli.generateVin(), // Static method called using the class name
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [frontWheel, rearWheel] // Pass the array of wheels to the motorbike
        );


        // TODO: push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // TODO: set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // TODO: perform actions on the motorbike
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        // TODO: check if the selected vehicle is the truck
        const selectedVehicle = answers.vehicleToTow;
        // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
        if (selectedVehicle.Vin === truck.vin) {
          console.log('The truck cannot tow itself. Please select another vehicle.');
          this.performActions(); // Allow the user to select another action for the truck
          return;
        } 
        // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
        if (selectedVehicle.weight <= truck.towingCapacity) {
          console.log(`${selectedVehicle.make} ${selectedVehicle.model} is being towed.`);
        } else {
          console.log(`${selectedVehicle.make} ${selectedVehicle.model} is too heavy to be towed.`);
        }
        this.performActions(); // Allow the user to select another action for the truck
      
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    if (this.isProcessing) {
      return; // Return if already processing
    }
    this.isProcessing = true; // Set the flag to true

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            ...(this.getSelectedVehicle() instanceof Truck ? ['Tow'] : []),
            ...(this.getSelectedVehicle() instanceof Motorbike ? ['Wheelie'] : []),
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {

        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
      const vehicle = this.getSelectedVehicle();

      if (!vehicle) {
        console.log("No vehicle selected. Please select a vehicle first.");
        this.isProcessing = false; // Reset the flag
        return;
      }
        // Perform the selected action
      if (answers.action === 'Print details') {
        vehicle.printDetails();
      } else if (answers.action === 'Start vehicle') {
        vehicle.start();
      } else if (answers.action === 'Accelerate 5 MPH') {
        vehicle.accelerate(5);
      } else if (answers.action === 'Decelerate 5 MPH') {
        vehicle.decelerate(5);
      } else if (answers.action === 'Stop vehicle') {
        vehicle.stop();
      } else if (answers.action === 'Turn right') {
        vehicle.turn('right');
      } else if (answers.action === 'Turn left') {
        vehicle.turn('left');
      } else if (answers.action === 'Reverse') {
        vehicle.reverse();
      } else if (answers.action === 'Tow') {
        // Perform the tow action only if the selected vehicle is a truck
        if (vehicle instanceof Truck) {
          this.findVehicleToTow(vehicle);
          this.isProcessing = false; // Reset flag after the Tow action
          return; // Return to avoid instantly calling the performActions method again
        }
      } else if (answers.action === 'Wheelie') {
        // Perform the wheelie action only if the selected vehicle is a motorbike
        if (vehicle instanceof Motorbike) {
          vehicle.wheelie();
        }
      }
        else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.isProcessing = false; // Reset flag before restarting CLI
          this.startCli();
          return;
        } else if (answers.action === 'Exit') {
             // Exit CLI if chosen
          this.exit = true;
          console.log("Exiting the program.");
      }
        this.isProcessing = false; // Reset flag after processing
        if (!this.exit) {
          this.performActions(); // Re-prompt for the next action
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;