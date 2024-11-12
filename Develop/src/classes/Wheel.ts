// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.diameter;
  }

  get getTireBrand(): string {
    return this.tireBrand;
  }

  // Setter method for the diameter property

  set setDiameter(diameter:number) {
    this.diameter = diameter;
  }

  set setTireBrand(tirebrand:string) {
    this.tireBrand = tirebrand;
  }

}

// Export the Wheel class
export default Wheel;