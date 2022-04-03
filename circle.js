class Cricle {
  constructor(radius) {
    this.radius = radius;
  }
  get Area() {
    return Math.PI * this.radius * this.radius;
  }
  get Perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
const cricle = new Cricle(process.argv[2]);
console.log(`Area of cricle is ${cricle.Area}`);
console.log(`Perimeter of cricle is ${cricle.Perimeter}`);
