// 1 Write a program that compares two numbers and display the larger. Result should be displayed in the console.

var a = 10;
var b = 14;

if (a > b) {
    console.log(a);

} else if ( a === b) {
    console.log('a and b are equal');
} else {
    console.log(b);
}

/* 2 Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
 Sample numbers: 3, 4, 9 (check one at the time)
 Output: odd, even, odd */

var c = 3;
var result = '';

if (c % 2 === 0){
    result = 'even';
} else {
    result = 'odd';
}
console.log(result);


/* 3. Write a program to check if the number is divisible by 3 and 5. If it is, print that number.
 Sample numbers: 15, 12 (check one at the time)
 Output: 15 */

 var d = 15;
 var e = 12;

 if (d % 3 === 0 && d % 5 === 0) {
        console.log(d);
 } else {
    console.log(`${d}is / not divisible by 3 and 5`);
 }

if (e % 3 === 0 && e % 5 === 0) {
        console.log(e);
 } else {
    console.log(`${e} is not divisible by 3 and 5`);
 }

/*4. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
 Sample numbers: 3, -7, 2 Output: The sign is - */

var a = 3;
var b = -7;
var c = 2;

if ( (a * b * c) < 0) {
    console.log('The sign is - ');
} else {
    console.log('The sign is + ');
}



/* 5. Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | X */

var a = 10;
var b = 7;

var c = a / 2;
var d = b / 2;


if (typeof a === 'number') 
{
    if  (a % 2 === 0)
     {  
     console.log(a + '/' + 2 + '=' + c);
    }
    else 
    {
    console.log('X');
    }
}

if (typeof b === 'number') 
{
    if  (b % 2 === 0) 
    {  
    console.log(b + '/' + 2 + '=' + d);
    } 
    else {
    console.log('X');
    }
}


/* 6.  Write a conditional statement to find the largest of five numbers. Display the result in console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 
*/

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > a && b > c && b > d && b > e){
    console.log(b);
} else if (c > a && c > b && c > d && c > e){
    console.log(c);
} else if (d > a && d > b && d > c && d > e){
    console.log(d);
} else {
    console.log(e);
}

/* 7.  Write a conditional statement to sort three numbers.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
 */

var f = 0;
var g = -1;
var h = 4;

if (f > g && f > h && g > h){
    console.log(f + ','  + g + ',' + h);
}
else if ( f > h && f > g && h > g){
    console.log(f + ',' + h + ',' + g);
}
else if (g > f && g > h && f > h){
    console.log(g + ',' + f + ',' + h);
}
else if (g > h && g > f && h >f){
    console.log(g + ',' + h + ',' + f);
}
else if (h > f && h > g && f > g){
    console.log(h + ',' + f + ',' + g);
}
else if ( h > g && h > f && g > f){
    console.log(h + ',' + g + ',' + f);
}

