// 1.	Write a program that calculates the maximum of two given numbers. 

function calculateMaximum (a, b) {
    var max;
    if (a < b) {
        max = b;
        return b;

    }else if (a > b) {
        max = a;
        return a;
      
    }
      return "Numbers are equal";
} 
var maximum = calculateMaximum(6, 54);

console.log(maximum);





// 2.	Write a program that checks if a given number is odd.

function checkNumberIsOdd (number) {
    var result = "";
    if (number % 2 === 0) {
        result = "Even";
        return result;

    }else if (number % 2 ===1) {
        result = "Odd";
        return result;
    }
}

var isOdd = checkNumberIsOdd(102);
console.log(isOdd);





// 3.	Write a program that checks if a given number is a three digit long number.

function checkNumberIsThreeDigitLong (number) {
    var result = "";
    if (number > 99 && number < 1000) {
        result = "Number is three digit long";
        return result;
    } else if ( number < 99 ) {
        result = "Number isn't three digit long";
        return result;

    } else if (number > 1000); {
        result = "Number isn't three digit long";
        return result;
    }

}
  var isThreeDigitLong = checkNumberIsThreeDigitLong(789);
  console.log(isThreeDigitLong);




// 4.	Write a program that calculates an arithmetic mean of four numbers.

function checkArithmeticMean (a, b, c, d) {
    var arr = [a, b, c, d];
    var result = 0;
    var sum = 0;
    for ( var i = 0; i < arr.length; i++) {
        if (arr.length === 4);
        sum += arr[i];
        result = sum / 4;
    }
    
    return result;
}


var arithmeticMean = checkArithmeticMean(5, 5, 5, 5);
console.log(arithmeticMean);




/* 5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****
*/

/* 6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

// 7.	Write a program that calculates a number of digits of a given number. 

/* 8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
 */

// 9.	Write a program that calculates the sum of odd elements of a given array. 

/* 10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
*/

/*11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */
