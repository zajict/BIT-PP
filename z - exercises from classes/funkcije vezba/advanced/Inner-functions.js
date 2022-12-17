// INNER (private) functions 

// from class 
// example 1
function outer(string) {
    function inner (s) {
        return s + s;
    }
    return inner(string);
}
var output = outer("cao");
console.log(output);




// example 2  
function outer(string) {
    function inner(s) {
        return s + s;
    }
    return inner(string);
}
var res = outer();
var result = res("cao"); //error message: res is not a function!
console.log(result);




// example 3
function a() { // first parentheses
    console.log("A");
return function () { // second parentheses
        console.log("B");
    };
}
// var res = function () {
//     console.log("B");
// };
var res = a()(); //same as commented example   // double parentheses = calling both functions (outer and inner)
// res();





// primeri sa prezentacije 

// Example 1
function outer(param) {

    function inner(input) {
        return input * 2;
    }
    return 'The result is ' + inner(param);
}
console.log(outer(12));




var outer = function (param) {      // variables contains outer function
    var inner = function (input) {  // variables contains inner function
        return input * 2;
    };
    return 'The result is ' + inner(param);
};
console.log(outer(2)); // "The result is 4"
console.log(outer(8)); // "The result is 16"
console.log(inner(2));  // ReferenceError: inner is not defined








//Functions that Return Functions!

// Example 1
function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}
a()();



function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}
var bigB = a();
bigB();







