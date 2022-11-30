/*  1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]  */

function switchMinMax(array) {
    var min = array[0];
    var max = array[0];
    var minIndex = 0;
    var maxIndex = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            minIndex = i;
            min = array[i];
        }
        if (array[i] > max) {
            maxIndex = i;
            max = array[i];
        }
    }

    array[minIndex] = max;
    array[maxIndex] = min;

    return array;

}
console.log(switchMinMax([
    3,
    500,
    12,
    149,
    53,
    414,
    1,
    19
]));

/*  2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]  */

function makeNewArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray[i] <= 0) {
            newArray[i] = 20;
        } else {
            newArray[i] = array[i] / 2 + 5;
        }
    }
    return newArray;

}
var y = makeNewArray([
    3,
    500,
    -10,
    149,
    53,
    414,
    1,
    19
]);
console.log(y);


/*  3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.  */

function InitializeTwoArrays(array1, array2) {
    var grade;
    for (var i = 0; i < array1.length; i++) {
        if (array2[i] < 51) {
            grade = 5;
        } else if (array2[i] < 61) {
            grade = 6;

        } else if (array2[i] < 71) {
            grade = 7;
        } else if (array2[i] < 81) {
            grade = 8;
        } else if (array2[i] < 91) {
            grade = 9;
        } else {
            grade = 10;
        }
        if (grade > 5) {
            console.log(array1[i] + " acquired " + array2[i] + " points and earned " + grade);
        } else {
            console.log(array1[i] + " acquired " + array2[i] + " points and failed to complete the exam.");
        }
    }
}
InitializeTwoArrays([
    "Micahel",
    "Anne",
    "Frank",
    "Joe",
    "John",
    "David",
    "Mark",
    "Bill"
], [
    50,
    39,
    63,
    72,
    99,
    51,
    83,
    59
]);


/*  4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]  */
// Insertion sort
function sortArray(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var min = array[i];
        var minIndex = 0;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }
        var temporary = array[i];
        array[i] = min;
        console.log(min);
        array[minIndex] = temporary;
        array[i] *= 2;
    }
    return array;
}
var y = sortArray([
    13,
    11,
    15,
    5,
    6,
    1,
    8,
    12
]);
console.log(y);


/*  5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]  */
function arrayInDescentOrder(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var max = array[i];
        var maxIndex = 0;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] > max) {
                max = array[j];
                maxIndex = j;
            }
        }
        var temporary = array[i];
        array[i] = max;
        array[maxIndex] = temporary;
    }
    return array;
}
var y = arrayInDescentOrder([
    13,
    11,
    15,
    5,
    6,
    1,
    8,
    12
]);
console.log(y);


/*  6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000  */
function AddAndSubtractNumber() {
    var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 === 0) {
            sum += i;
        } else {
            if (i < 501) {
                sum -= i;
            }
        }
    }
    sum *= 12.5;
    return sum;
}
console.log(AddAndSubtractNumber());


/*  7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa   */

function elementArrayString(array) {
    var newString = "";
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            if (array[i].length >= 2) {
                newString = newString + array[i][0] + array[i][1];
            }
        }

    }
    return newString;
}
var y = elementArrayString([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A"
]);

console.log(y);


/*  	
8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB  */

function stringInReverseOrder(word) {
    var newString = "";
    var length = word.length;
    while (length>=0) {
        newString += word[length];
        length--;
    }
    return newString;
}

var y = stringInReverseOrder("Belgrade Institute of Technology");
console.log(y);



/*  9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).  */
function getNumberOfCombinations (a, b) {
    var combinations = "";
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
        if (i != j) {
            combinations += "(" + i + "," + j + ")";

        }
    }
    combinations = combinations + "\n";
    }
    
    return combinations;
}
var y = getNumberOfCombinations (1, 7);
console.log(y);



/*   10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/
function checkIfNumberISPrime (number) {
    var checkNUmber = 2;
    var result = true;
    while ( checkNUmber < number) {
        if ( number % checkNUmber === 0 ) {
            result = false;
        }
        checkNUmber++;
    }
    return result;
}
var y = checkIfNumberISPrime(17);
console.log(y);



function checkIfNumberISPrime(number) {
    checkNUmber = 2;
    result = true;
    while (checkNUmber < number) {
        if (number % checkNUmber === 0) {
            result = false;
        }
        checkNUmber ++;
    }
    return result;
}
var y = checkIfNumberISPrime(15);
console.log(y);




/*   	
11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/
// program to check if the string is palindrome or not
function checkIfStringISPalindrome(string) {
    var length = string.length; 
    for (var i = 0; i < length; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }
}
var y = checkIfStringISPalindrome("a nut for a jar of tuna");
console.log(y);




/*   12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9 */
function calculateGreatestCommonDivisor (a, b) {
   
}

