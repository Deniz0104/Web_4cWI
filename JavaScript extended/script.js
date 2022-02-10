class Car {
    horsepower = 70;

    constructor(color, brand, country = "Deutschland" ) {
        this.color = color;
        this.brand = brand;
        this.country = country;
    }

    printSpecification() {
        console.log(this.color + " - "+ this.brand + " " +  this.horsepower + " " +this.country)

    }

}
let c1 = new Car("red", "ferrari","Italy");
let c2 = new Car("blue", "BMW", "Deutschland");

c1.printSpecification();
c2.printSpecification();