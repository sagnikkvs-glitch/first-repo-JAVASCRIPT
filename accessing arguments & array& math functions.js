var person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(person.name); // for accsessing the name property of the person object
console.log(person.age);  // for accsessing the age property of the person object
console.log(person.city); // for accsessing the city property of the person object

// correct way is to write the name of the object followed by a dot and then the name of the property we want to access

let people=[{name:"Alice",age:25},
            {name:"Bob",age:30}];  

console.log(people[0].name); // for accessing the name property of the first object in the people array
console.log(people[1].age);  // for accessing the age property of the second object in the people array


let fruits=["apple","banana","orange"];     //homogeneous array of strings
console.log(fruits[0]);                 // for accessing the first element i.e.the zero position of the fruits array

let person=["alice",10,true];     //heterogeneous array of different data types
console.log(person[2]);                // for accessing the first element i.e.the zero position of the person array


// the following is the use of in the matrix in arrays

let matrix=[
    [1,23,5,4,8,7],             //zero positioned array of the matrix object,,the "1" in this array is in the zero potion of the matrix object 
    ['a','s','d','h','t',"f"]       //in case opf the letters we have to give single or doulble inverted commas   
]
console.log(matrix[0]);     //for accessing the first array in the matrix object
console.log(matrix[1]);     //for accessing the second array in the matrix object
console.log(matrix[0][1]);  //for accessing the second element of the first array in the matrix object
console.log(matrix[1][3]);  //for accessing the fourth element of the second array in the matrix object


//math functions

let mynum=5.9;
console.log(Math.round(mynum) );     // for rounding the number to the nearest integer
console.log(Math.floor(mynum) );     // for rounding the number down to the nearest integer
console.log(Math.ceil(mynum) );      // for rounding the number up to the nearest integer
console.log(Math.sqrt(mynum) );      // for calculating the square root of the number
console.log(Math.pow(mynum,4) );     // for calculating the power of the number, in this case we are calculating the 4th power of the number
