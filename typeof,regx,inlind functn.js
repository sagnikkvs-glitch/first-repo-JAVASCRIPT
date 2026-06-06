  //use of try and error handling
  // when we use it will try to execute the code and if there is an error it will catch the error and display the message
try {
    console.log("hello");
     console.log(x);            // this will throw an error because x is not defined
}
catch(err) {
    console.log(err.message);
}

//  ***  type conversion *** 
let num1 = "10.9";
let num2 = 20.5689;
let result = num1 + num2;
console.log(result);                    // this will output 10.920.5689 because num1 is a string and num2 is a number so it will concatenate the two values

// to convert num1 to a number we can use the parseInt() function

let result2 = parseInt(num1) + parseInt(num2);
console.log(result2);            // this will output 30 because num3 is now a number and num2 is also a number so it will add the two values

// difference between parseInt and Number() function
// parseInt() function will convert a string to an integer and it will ignore any decimal points
// Number() function will convert a string to a number and it will consider any decimal points

let result2 = Number(num1) + Number(num2);
console.log(result2);

// finding the type of a variable

let a = 10;
let b = "hello";
let c = true;
let d= null;
let e = undefined;
let f = [1.2,5,89,45];
console.log(typeof a);          // this will output number
console.log(typeof b);          // this will output string
console.log(typeof c);          // this will output boolean
console.log(typeof d);          // this will output object because null is considered as an object in JavaScript
console.log(typeof e);          // this will output undefined
console.log(typeof f);          // this will output object because arrays are considered as objects in JavaScript


// (regular expression) i.e. regex  ,, 
// A Regular Expression is a pattern used to search for getting the position of that or replace text to replace the text.

let text = "I love JavaScript";

console.log(text.search("JavaScript"));          // this will output 7 because the word "JavaScript" starts at index 7 in the string "I love JavaScript"

// to replace a word in a string we can use the text.replace() function

let newText = text.replace("JavaScript", "Python");
console.log(newText);             // this will output "I love Python" because we replaced the word "JavaScript" with "Python"


let sagnik = "I am learning JavaScript and I love JavaScript";
console.log(sagnik.search(/JavaScript/g));          // this will output 7 because the word "JavaScript" starts at index 7 in the string "I am learning JavaScript and I love JavaScript"
console.log(sagnik.replace(/JavaScript/g, "Python"));          // this will output "I am learning Python and I love Python" because we replaced all the occurrences of the word "JavaScript" with "Python" using the regular expression /JavaScript/g where g stands for global search

// ARROW FUNCTION
// Arrow functions are a shorter syntax for writing functions in JavaScript.
//  They are also known as fat arrow functions because of the () => syntax. ,, inside if the parentheses we have to write the parameters

// normal function
function add(a, b) {
    return a + b;
}
// arrow function
const add = ( (a, b) => a + b);
console.log(add(10, 20));          // this will output 30 because the add function takes two parameters a and b and returns the sum of a and b

// if we have only one parameter we can omit the parentheses
const square = x => x * x;
console.log(square(5));            // this will output 25 because the square function takes one parameter x and returns the square of x