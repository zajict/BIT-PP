/* 1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes */
function checkGivenElementInArray(e, array) {
  var result = "No";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === e) {
      result = "Yes";
    }
    
  } return result;
}
var checkElementInArray = checkGivenElementInArray(3, [5, -4.2, 3, 7]);
console.log(checkElementInArray);


/* Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
function checkGivenElementInArray(e, array) {
  var result = "No";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === e) {
      result = "Yes";
    }
    
  } return result;
}
var checkElementInArray = checkGivenElementInArray(3, [5, -4.2, 18, 7]);
console.log(checkElementInArray);



/* 2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */
function multipliesPositiveElementOfArray(array) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray[i] = array[i] * 2;
    } else {
      newArray[i]= array[i];
    }
  } return newArray;
}
var ElementOFNewArray = multipliesPositiveElementOfArray([-3, 11, 5, 3.4, -8]);
console.log(ElementOFNewArray);

/* 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

function minimumOfArray(array) {
  var minimum = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  return `${minimum}, ${array.indexOf(minimum)}`;
}

var minimumElementWithIndex = minimumOfArray([4, 2, 2, -1, 6]);
console.log(minimumElementWithIndex);




/* 4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2  */
function secondSmallestNumber (array) {
  var minimum = array[0];
  var second_min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      second_min = minimum;
      minimum = array[i]; 
    } else if (array[i] < second_min) {
      second_min = array[i];
    }
  } 
  return second_min;
}
var a = secondSmallestNumber ([4, 2, 2, -1, 6]);
console.log(a);


/* 5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */
function calculateSumOfPositiveElements(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) sum += array[i];
  }
  return sum;
}
var s = calculateSumOfPositiveElements([3, 11, -5, -3, 2]);
console.log(s);


/* 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. */
function IsArraySymmetric(array) {
  var result = "The array isn't symmetric"
  for (var i = 0, j = array.length -1; i <= j; i++, j--) {
    if (array[i] === array[j]) result = "The array is symmetric";
    break;
  }
  return result;
}
var a = IsArraySymmetric ([2, 4, -2, 7, -2, 4, 2]);
console.log(a);


/*Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */
function IsArraySymmetric(array) {
  var result = "The array isn't symmetric"
  for (var i = 0, j = array.length -1; i <= j; i++, j--) {
    if (array[i] === array[j]) result = "The array is symmetric";
    break;
  }
  return result;
}
var a = IsArraySymmetric ([3, 4, 12, 8]);
console.log(a);



/* 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */
function arraysIntertwine (a, b) {
  var newArray = [];
  for (var i = 0; i < a.length; i++) {
    newArray[newArray.length] = a[i];
    newArray[newArray.length] = b[i];
  }
  return newArray;
}
var array = arraysIntertwine ([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(array);


/* 8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]  */
function concatenateTwoArrays(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      newArray[newArray.length] = (array[i][j]);
    }
  }
  return  newArray;
}
var concat = concatenateTwoArrays([[4, 5, 6, 2], [3, 8, 11, 9]]);
console.log(concat);



/*  9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
  */
function deleteGivenElementFromArray(e, a) {
  newArray = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
      delete e;
    } else (newArray[i] = a[i]);
  }
  return newArray;
}
var b = deleteGivenElementFromArray(2, [4, 6, 2, 8, 2, 2]);
console.log(b);



/*  10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]  */

function insertElementOnPosition(element, position, array) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.length < position) {
      return "Position is greater than array length";
    } else if (array.length > position) {
        if (i === position) { 
          newArray[newArray.length] = element;
      }
    newArray[newArray.length] = array[i];
  } 
}
return newArray;
}
var y = insertElementOnPosition (78, 3, [2, -2, 33, 12, 5, 8] );
console.log (y);









