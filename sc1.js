//use of .trim() method,, it removes spaces before the text and spaces after the text

function hello(){
    console.log("       Hello World         " .trim() );
}
hello()

//use of the .toUpperCase() method, it converts the text to uppercase

function hello1(){
    console.log("good morning" .toUpperCase());
}
hello1()

//use of the .toLowerCase() method, it converts the text to lowercase

function hello2(){
    console.log("GOOD AFTERNOON" .toLowerCase());
}
hello2()

//use of the .replace() method, it replaces a specified value with another value in a string i.e. the 1st value shld be the valu u wanna change and the 2nd value is that value u wanna change the 1st value into

function hello3(){
    console.log("I like cats".replace("cats", "dogs"));
}
hello3()

//use of the .length method, it counts the length of a string i.e the letters,symplos,spaces in that string ,,etc..
function hello4(){
    console.log("Hello World i am good how are you".length);
}
hello4()


//use if the .regex method, it is used to search for a specific pattern in a string and it returns true if the pattern is found and false if the pattern is not found ,,, its used in passwords and email validation
function hello5(){
    let pattern=/^[0-9]{10}$/;          //this pattern is used to validate a phone number that should be 10 digits long and should only contain numbers
    let phoneNumber1="1234567890";
    let phoneNumber2="123456789454684564684650";
    let phoneNumber3="12345abcde";
let isValid=pattern.test(phoneNumber1);         
console.log(isValid);                                                       //true
let isValid2=pattern.test(phoneNumber2);
console.log(isValid2);                                                      //false
let isValid3=pattern.test(phoneNumber3);
console.log(isValid3);                                                      //false


}
//@note-> the .test() method is used to test the pattern against a string and it returns true if the pattern is found and false if the pattern is not found
        // here we are testing the diff phonenumbers against the pattern given

/**[x-y]-->limits the number of characters that can be matched to be between x and y
    ^   --> shows the strting of the string
    $   --> shows the end of the string
    {n} --> limits the number of characters that can be matched to be exactly n
    {n,m} --> limits the number of characters that can be matched to be between n and m
 
**/


//loop in js ,,, keyword used in loops is for.....the syntax u have to remember

let fruits=["a","b","c","d","e"];
for(let i=0; i<fruits.length ; i++)
   { console.log("the fruit no.ber", i+1, "is", fruits[i]);
}

//if-else statement in js

let age=15;
 if(age>=18){
    console.log("u can drive");
 } else{
    console.log("u cannot drive");
 }

 //switch statement in js   (THE NEED FOR switch STATEMENT IS WHEN U HAVE TO COMPARE A VALUE AGAINST MULTIPLE CASES THEN INSTEAD OF WRITING MULTIPLE IF-ELSE STATEMENTS WE CAN USE SWITCH STATEMENT)

 let day=5;
 let dayname;
 switch(day){
    case 1:
        dayname="monday";
        break;
    case 2:
        dayname="tuesday";
        break;
    case 3:
        dayname="wednesday";
        break;
    case 4:
        dayname="thursday";
        break;
    case 5:
        dayname="friday";
        break;
    case 6:
        dayname="saturday";
        break;
    case 7:
        dayname="sunday";
        break;
    default:
        dayname="invalid day";
 }