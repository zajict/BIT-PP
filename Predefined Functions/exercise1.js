/*1. Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.
Input : ["1","21", undefined,"42","1e+3",Infinity]
Output : [1, 21, 42, 1000] */

function convertStringToNumber(array) {
    var newArray = [];
    var convertedElement;
    for (var i = 0; i < array.length; i++) {
        convertedElement = parseFloat(array[i]);

        if (isFinite(convertedElement)) {
            newArray[newArray.length] = convertedElement;
        }
    }
    return newArray;
}
var y = convertStringToNumber([
    "1",
    "21",
    undefined,
    "42",
    "1e+3",
    Infinity
]);
console.log(y);


/*2. Write a program to join all elements of the array into a string skipping elements that are undefined,
null,
NaN or Infinity.Input : [NaN, 0, 15, false, -22, '', undefined, 47, null] 
Output : “015false - 2247 ” */

function numberAdnBooleanArray(array) {
    var _String = '';
    for (var i = 0; i < array.length; i++) {
   
        if (array[i] !== null) {
            if (isFinite(array[i])) {
                _String += array[i];
            }
        }
    }
    return _String;
}
var x = numberAdnBooleanArray([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(x);



/*3. Write a program to filter out falsy values from the array.Input : [ NaN, 0, 15, false, -22, '', undefined, 47, null]
Output : [15, -22, 47] */
function filterValueFromArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
var y = filterValueFromArray([NaN, 0, 15, false, -22, '', undefined, 47, null
]);
console.log(y);



/*4. Write a program that calulates a number of integer values in the array.Input : [
    NaN,
    23.1,
    15,
    false,
    -22.5,
    '',
    4,
    7,
    null
]
Output : 3 */

/*5. Write a program that calculates a number of float values in the array.Input : [
    NaN,
    23.1,
    15,
    false,
    -22.5,
    '',
    4,
    7,
    null
]
Output : 2
*/

