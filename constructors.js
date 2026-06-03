// What is a Constructor?
// A constructor is a special method inside a class that is used
// to create and initialize objects. It is called automatically
// whenever a new object (instance) of the class is created.

// The constructor method is defined using the keyword "constructor".
// It can accept parameters to initialize the object's properties.

// The "this" keyword refers to the current object being created.
// It is used to assign values to the object's properties.

// The "new" keyword is used to create an object from a class.
// It automatically calls the constructor and initializes the object.


class smartphone {

    constructor(brand, model, price) {
        this.brand = brand;     // The "this" keyword is used to refer to the object that is currently being executed. It allows us to access and manipulate the properties and methods of the object within the constructor.
        this.model = model;
        this.price = price;
    }   
}

const phone1 = new smartphone("Apple", "iPhone 13", 999);
const phone2 = new smartphone("Samsung", "Galaxy S21", 899);
console.log(phone1);
console.log(phone2.brand);      //for acssesing the brand property of the phone2 object,,//  @note->we can use dot notation and write phone2.brand which will give us the brand of the phone2 object.

//class methods ?
// Class methods are functions that are defined within a class and can be called on instances of that class. They are used to perform specific actions or operations related to the class.
// an example is given below-->

class Superhero {

    constructor(name, power, mission) {
        this.name = name;
        this.power = power;
        this.mission = mission;
    }

    introduce() {               //here intrduce is  class method,, it is faunction inside a class and can define what object can do or how it can behave
        console.log(
            `Hi, I am ${this.name}. My power is ${this.power} and my mission is ${this.mission}.`
        );
    }

    usePower() {
        console.log(`${this.name} uses ${this.power}!`);
    }
}

const hero1 = new Superhero( "Spider-Man" , "Web Shooting" , "Protect New York" );

hero1.introduce();              //hero1.introduce() is calling the introduce method for the hero1 object, which will print the introduction message to the console.
hero1.usePower();

// PLEASE SEE THE SUPERHERO.HTML FILE FOR CLEARITY OF THE CONCEPTS. 





