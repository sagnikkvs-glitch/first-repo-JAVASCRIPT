function juice(f1, f2) {
    console.log("lets make juice of", f1, "and", f2);
    console.log(f1 * f2);
}

juice("5", "9");

//in the above code function is a machine and the parametere giveninside the () is the instrautions given to the machine




// The following shows different types of scopes //

let a = 10; // Global scope → accessible anywhere in the program
var b = 20; // Global scope

function sum(x) {

    let c = "hello, i am a local scope and am only inside this function";
    // Function/local scope → accessible only inside sum()

    function cook() {

        let d = "i am block scope and am only inside this function/block";
        // Block scope because 'let' is used

        var e = 30;
        // Function scope because 'var' is used
    }

    cook();
}

sum();

/*
| Scope Type     | Created By                  | Accessible Where       |
| -------------- | --------------------------- | ---------------------- |
| Global Scope   | Variables outside functions | Everywhere             |
| Function Scope | `var` inside functions      | Whole function         |       note->in this we have to give a parameter to the function and then call it to access the variable inside the function scope  ...for here it is the function sum(x) and then we call it with sum() to access the variable c inside the function scope
| Block Scope    | `let` / `const` inside `{}` | Only inside that block |


*/
