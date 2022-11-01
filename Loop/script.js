/*1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes */


 var a = [5, -4.2, 3, 7];
 var e = 3; 
 var result = "No";

 for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
         result="Yes";
        break;
    }
 }
 console.log(result);



// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

var a = [5, -4.2, 18, 7];
result1 = "No";

for (var i = 0; i < a.length; i++) {
	if (a[i] === e) {
         result1 = "Yes";
        break;
    }
}
 console.log(result1);
 



/*2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */


var array = [-3, 11, 5, 3.4, -8];
var new_array = [];

for (var i = 0; i < array.length; i++) {
	if (array[i] > 0) {
		new_array[i] = array[i] *2;
	} else {
		new_array[i] = array[i];
	}
}
console.log(new_array);




/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var array = [4, 2, 2, -1, 6];
var min_array = array[0];

for (var i = 0; i < array.length; i++) {
	if (array[i] < min_array) {
        min_array = array[i];
    }
}
 console.log(min_array, array.indexOf(min_array));



/*4.	Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/

var array = [4, 2, 2, -1, 6];
var min_array = array[0];
var second_min_array = array[0];

for (var i = 0; i < array.length; i++) {
	if (array[i] < min_array) {
		second_min_array = min_array;
        min_array = array[i];
    } else if (array[i] < second_min_array) {
		second_min_array = array[i];
	}
}
 console.log(second_min_array);


/*5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

 var array = [3, 11, -5, -3, 2];
 var sum = 0;

 for (var i = 0; i < array.length; i++) {
	if (array[i] > 0) {
		sum += array[i];
	}
 }
 console.log(sum);


/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. 

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
 */

var arr = [3, 4, 12, 8];
var result = "The array is symmetric.";

for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) {
    result = "The array isn't symmetric.";
    break;
    }
}
console.log(result);

/*
7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
var array1 = [4, 5, 6, 2]; 
var array2 = [3, 8, 11, 9];
var new_array = [];

for (var i = 0, j=0; i < array1.length, j < array2. length; i++, j++) {
	new_array = new_array.concat(array1[i], array2[j]);
}
 console.log(new_array);


/*
8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var array1 = [4, 5, 6, 2]; 
var array2 = [3, 8, 11, 9];
var new_array = [];

for (var i=0, j=0; i < array1.length, j < array2.length; i++, j++) {
	new_array = '[' + array1 + ',' + array2 + ']';
}
 console.log(new_array);

/*
9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/
var array = [4, 6, 2, 8, 2, 2];
var e = 2;
var new_array = [];

for (var i = 0; i < array.length; i++) {
	if (array[i] === e) {
        delete array[i];
	   new_array = array;
    }
} 
 console.log(new_array);
 


/*
10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

var a = [2, -2, 33, 12, 5, 8];

var e = 78;
var p = 3;
var message = "Error";
var array = [];


for (var i = 0; i < a.length; i++) {
	if (p > a.length) {
		message = "Error";
        break;
	}
	if (i === p) {
        array[array.length] = e;
	}
	array[array.length] = a[i];
}


console.log(array);


