/*1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */
function countLetters(string) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
            count++;
        }
    }
    return count;
}
console.log(countLetters("My RANDOM string"));


   

/*2.	Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]*/
function combinesOfTwoArray(a, b) {
    var newList = [];
    for (i = 0, j = 0; i < a.length, j < b.length; i++, j ++) {
        newList += a[i] + b[i];
    }
    return newList;
}
console.log(combinesOfTwoArray(['a', 'b', 'c'
], [1, 2, 3]));




/*3.	Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/
function listRotate(array, k) {
    var newArray = [];
    for (var i = k, j = k - array.length; i < array.length + k; i++, j ++) {
        if (array[i]) {
            newArray[newArray.length] = array[i];
        } else {
            newArray[newArray.length] = array[j];
        }
    }
    return newArray;
}
console.log(listRotate([
    1,
    2,
    3,
    4,
    5,
    6
], 2));





/*4.	Write a function that takes a number and returns array of its digits.*/
function getDigits(numbers) {
    var digits = [];
    var string = numbers.toString();
    for (var i = 0; i < string.length; i++) {
        digits.push(parseInt(string[i]));
    }
    return digits;
}
console.log(getDigits(123456789));




/*5.	Write a program that prints a multiplication table for numbers up to 12.*/
function printMultiplicationTable (number) {
    for (var i = 1; i <= number; i++) {
        var row = "";
        for (var j = 1; j <= 12; j++) {
            row += (i * j) + "\t";
        }
    }
    return row;
}
console.log(printMultiplicationTable(12));





/*6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.*/





/*7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/

 

/*8.	Write a function to find the maximum and minimum elements. Function returns an array.*/

 

/*9.	Write a function to find the median element of array.*/

 

/*10.	Write a function to find the element that occurs most frequently.*/

 

/*11.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.*/

 

/*12.	Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.*/

 

/*13.	Write a function to find all the numbers greater than the average.*/

 

/*14.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
●	Starvation: less than 15
●	Anorexic: less than 17.5
●	Underweight: less than 18.5
●	Ideal: greater than or equal to 18.5 but less than 25
●	Overweight: greater than or equal to 25 but less than 30
●	Obese: greater than or equal to 30 but less than 40
●	Morbidly obese: greater than or equal to 40*/

 


/*15.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

*/




 

