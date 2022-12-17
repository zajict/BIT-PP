//  variable scope

// Declare a global variable
var scope = "global";

function checkScope() { // Declare a local variable with the same name
    var scope = "local";

    // Return the local value, not the global one
    return scope;
}
var result = checkScope() // => "local"

console.log(scope);
console.log(result);

// If you don't use var to declare a variable, this variable is automatically assigned a global scope.




// Declare a global variable, even without var.
var scope = "global";
function checkScope2() { // Oops! We just changed the global variable.
    scope = "local";
    // This implicitly declares a new global variable.
    myScope = "local";
    return [scope, myScope]; // Return two values.
}checkScope2() // ["local", "local"]: has side effects!
console.log(scope)
console.log(myScope)




var global = 1;
function myFunc() {
    var local = 2;
    global++;
    return global;
}

myFunc();
// console.log(local);
console.log(global);





/*
Variable Hoisting
*/
//example1
var global = 123;

function myFunc() {
    console.log(global);
    var global = 1;
    console.log(global);
}
myFunc();



//example 2
var global = 123;

function myFunc() {
    var global; // undefined
    console.log(global);
    global = 1;
    console.log(global);
}
myFunc();
console.log(global);


//example3
var global = 123;

function myFunc() {
    console.log(global);
    var global = 1;
    console.log(global);
}
myFunc();


