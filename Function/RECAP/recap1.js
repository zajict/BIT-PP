// Example 0
var result = true;
function subtract(first, second) {
    return first - second;
}
result = subtract(12, -10);
result = subtract(22, 2);

console.log(result);


// Example 1
'use strict';

myVar = "random";

function addOne(num) {
    return num + 1;
}
var result = addOne(4);
console.log(result);



// Example 2

var global = 123;

var resetGlobal = function () {
    global = -1;
};

console.log(global);




// Example 3

var global = 123;

var resetGlobal = function () {
    global = -1;
};

resetGlobal;
console.log(global);




// Example 4

var global = 123;

var resetGlobal = function () {
    global = arguments[0] || -1;
};

resetGlobal(10);
console.log(global);

resetGlobal(0);
console.log(global);




// Example 5

'use strict';

var result = square(10);
console.log(result);

function square(num) {
    num *= num;
}



// Example 6

'use strict';

var result = square(10);
console.log(result);

function square(num) {
    return num *= num;
}




// Example 7

function toString(num) {
    result = num + '';
    return result;
}

console.log(result);




// Example 8

function toString(num) {
    'use strict';
    result = num + '';
    return result;
}

toString(num);
console.log(result);




// Example 9

var output = toString(0.15);
console.log(output);

var toString = function (num) {
    var result = num + '';
    return result;
}




// Example 10

var toString = function (num) {
    var result = num + '';
    return result;
}

var output = toString(0.15);
console.log(output);





// Example 11

var toString = function (num) {
    num = num || '';
    var result = num + '';
    return result;
}

var output = toString;
console.log(output);




// Example 12

//'use strict';

var global = parseInt("1e2");

incrementGlobal = function () {
    global++;
};

incrementGlobal();

console.log(global);
console.log(typeof global);





// Example 13

function sum(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;

    if (! num1 && ! num2) {
        return -1;
    }
    return num1 + num2;
}
var sumNumbers = sum;
var result = sumNumbers();

console.log(result);




// Example 14

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();




// Example 14

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();





