/* 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */
function insertString(originalString, stringToInsert, position = 1) {
    return originalString.slice(0, position) + stringToInsert + originalString.slice(position);
}
console.log(insertString("My random string", "JS "));
console.log(insertString("My random string", "JS ", 10));






/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
l[NaN, 0, 15, false, -22, '', undefined, 47, nul] */
function joinArray(arr) {
    return arr.filter(x => x !== undefined && x !== null && !isNaN(x) && isFinite(x) && x !== '').join(', ');
}
console.log(joinArray([
    NaN,
    0,
    15,
    false,
    -22,
    '',
    undefined,
    47,
    null
]));



/* 3.	Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */
function filterFalsy(arr) {
    return arr.filter(x => x);
}
console.log(filterFalsy([
    NaN,
    0,
    15,
    false,
    -22,
    '',
    undefined,
    47,
    null
]));



/* 4.	Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number */
function reverseNumber(num) {
    var reversed = 0;
    var remainder;
    while (num > 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(12345));


/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */
function getLastElements(arr, n = 1) {
    if (n > arr.length) {
        n = arr.length;
    }
    var result = [];
    for (var i = arr.length - n; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return(n === 1) ? result[0] : result;
}
console.log(getLastElements([7, 9, 0, -2]));





/* 6.	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]   */
function createArray(length, value = null) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
}
console.log(createArray(6, 0));



/* 7.	Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128
*/
function isPerfectNumber(num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        return num + " is a perfect number.";
    } else {
        return num + " is not a perfect number.";
    }
}
console.log(isPerfectNumber(28));



/* 8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/
function findWord(string, word) {
    var count = 0;
    var startIndex = 0;
    while (string.indexOf(word, startIndex) !== -1) {
        count++;
        startIndex = string.indexOf(word, startIndex) + 1;
    }
    return "'" + word + "' was found " + count + " times";
}
console.log(findWord('The quick brown fox', 'fox'));
console.log(findWord('aa bb cc dd aa', 'aa'));




/* 9.	Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */
function hideEmail(email) {
    var splitEmail = email.split("@");
    var user = splitEmail[0];
    var domain = splitEmail[1];
    var hiddenUser = user.substring(0, 2) + "...";
    return hiddenUser + "@" + domain;
}
console.log(hideEmail("myemailaddress@bgit.rs"));





/* 10.	Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */
function findMostFrequent(arr) {
    var frequency = {};
    var maxCount = 0;
    var mostFrequent;
    for (var i = 0; i < arr.length; i++) {
        if (frequency[arr[i]] === undefined) {
            frequency[arr[i]] = 1;
        } else {
            frequency[arr[i]]++;
        }
        if (frequency[arr[i]] > maxCount) {
            maxCount = frequency[arr[i]];
            mostFrequent = arr[i];
        }
    }
    return mostFrequent;
}
console.log(findMostFrequent([
    3,
    'a',
    'a',
    'a',
    2,
    3,
    'a',
    3,
    'a',
    2,
    4,
    9,
    3
]));







