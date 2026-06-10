//What is JSON?
//JSON (JavaScript Object Notation) is a format used to store and exchange data.
// Data is stored as key-value pairs.
// Keys (labels) are usually written in double quotes in JSON.
// Strings need quotes.
// Numbers do not need quotes.
// Data is written inside { }



//                      JSON methods
//There are two main methods for working with JSON data:            }
//JSON.Stringify() - Convert a JavaScript object into a JSON string.    }   both are used to convert data between JavaScript objects and JSON strings, 
//JSON.Parse() - Convert a JSON string into a JavaScript object.        }   making it easier to store and exchange data in a standardized format.
//                                                                  }
//Example of JSON Stringify             -> conversion into JSON string
let myObj = {    name: "John",
                 age: 30, 
                 city: "New York" };
let text = JSON.stringify(myObj);
console.log(text);                        // Output: {"name":"John","age":30,"city":"New York"}

//Example of JSON Parse()           -> convrsion into JavaScript object
let myJSON2 = '{"name":"John","age":30,"city":"New York"}';
let text2 = JSON.parse(myJSON2);
console.log(text2.name);              // Output: John
console.log(text2.age);               // Output: 30
console.log(text2.city);              // Output: New York  

// setTimeout() runs a function after a specified delay.
setTimeout(()=>{
    console.log("Hello!"); console.log("Done");
}, 2000,1000);                           //here 2000 is how much delay in ms the function  will work,,, after 2K ms i.e. 2ws the log fuction will work 
                                        // 1000ms  is the parameter passed to the function but here we are not using it in the function so it will not have any effect on the output.


//A callback is a function passed into another function so it can be executed later. previously we have used th callback in te hello function but here we will use it in setTimeout function
/// @note=>> The function inside setTimeout() is  or a function inside a function is called callback. “A callback is a function that is passed inside afunction as an argument , so that it can be used later or
//  when a event occurs”

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("sagnik");     // here we are calling the callback function and passing the name "sagnik" as an argument, which will be used in the greet function to print the greeting message.
}

processUser(greet);

//What are async and await?
//They help us write asynchronous code in a simple, readable way.
//await
//Pauses the async function until a promise is completed.
// ************* ------>>>>>.>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Declares an asynchronous function that returns a promise.
//The async keyword allows us to write functions that can perform asynchronous operations using the await keyword.
//@NOTE=>>>>> ✅ await can only be used inside an async function.

function delay(ms){
    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}

async function start(){
    console.log("Start");

    await delay(5000);

    console.log("After 5 seconds");
}

start();















