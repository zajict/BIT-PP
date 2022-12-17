// primeri sa prezentacije
var f = function (a) { // anonymous function
    return a;
};

//example1
function one() {
    return 1;
}
function two() {
    return 2;
}
function invokeAdd(a, b) {
    return a() + b();
}
invokeAdd(one, two);

invokeAdd(function () {
    return 1;
}, function () {
    return 2;
});
invokeAdd(function () {
    return 1;
}, function () {
    return 2;
});

invokeAdd(function () {
    return 1;
}, function () {
    return 2;
});


/*When you pass a function, A, to another function, B, and then B executes A, it's often said that A is a callback function. 

If A doesn't have a name, then you can say that it's an anonymous callback function.
*/





