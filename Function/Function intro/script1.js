// 1.	Write a program that calculates the maximum of two given numbers. 

function calculateMaximum (a, b) {
    var max;
    if (a < b) {
        max = b;
        return max;

    }else if (a > b) {
        max = a;
        return max;
      
    }
      return "Numbers are equal";
} 
var maximum = calculateMaximum(200, 87);

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
  var isThreeDigitLong = checkNumberIsThreeDigitLong(10000043849);
  console.log(isThreeDigitLong);




// 4.	Write a program that calculates an arithmetic mean of four numbers.

function checkArithmeticMean (arr) {

    var ar_mean = 0;
    var sum = 0;
    for ( var i = 0; i < arr.length; i++) {
        if (arr.length === 4);
        sum += arr[i];
        ar_mean = sum / arr.length;
    }
    return ar_mean;
}

var arithmeticMean = checkArithmeticMean([24, 66, 5, 9]);
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

function digits_count(number) {
  var digits_count = 0;

  if (number >= 0); {
    digits_count++;
   

    while (number / 10 >= 1) {
    number /= 10;
    ++digits_count;
    }
  }
  return digits_count;
}

var count = digits_count(12345678910);
console.log(count);






/* 8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
 */

 function appearancesOfNumber(e) {
    var a = [2, 4, 7, 8, 7, 7, 1];
    var count = 0;
    
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            count ++;
        }
    }
    return count;
 }
 var appearances = appearancesOfNumber(7);
 console.log(appearances);






// 9.	Write a program that calculates the sum of odd elements of a given array. 

function sumOdd(a) {

    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 ===0) {
            sum += a[i];
        }
    }
    return sum;
 }
 var f = sumOdd([2, 4, 7, 8, 7, 7, 1]);
 console.log(f);





/* 10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
*/
function letters_count(word) {
    var _count = 0;
    for (var i = 0; i <= word.length; i++) {
        if (word[i] += 1) _count++;{
        }
    }
    return _count;
}
var m = letters_count("Antidisestablishmentarianism");
console.log(m);




function numberOfLetter(n) {
    var count = 0;
    var a = "A";
    var b = "a";
    for (var i = 0; i <= n.length; i++) {
        if ((n[i] === a) || (n[i] === b)){
            count ++;
        }
    }
    return count;
}
var numberOf = numberOfLetter("Antidisestablishmentarianism")
console.log(numberOf);





/*11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function numberOfGivenString (string, times) {
    var letter = "";

    while ( times > 0) {
        letter += string;
        times--;
    }
    return letter;
}
 var numberOString = numberOfGivenString('abc', 4);
 console.log(numberOString);



