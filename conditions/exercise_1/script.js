// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2 
// Output: The sign is - 

var a = 3;
var b = -7;
var c = 2;

var result = a * b * c;
if (result > 0) {
    console.log('Result is positive number')
} else {
    console.log('Result is negative number')
}

// 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0 

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e)
{
    console.log(a);
}
else if (b > a && b > c && b > d && b > e)
{
    console.log(b);
}
else if (c > a && c > b && c > d && c > e) {
    console.log(c);
}
else if (d > a && d > b && d > c && d > e) {
    console.log(d);
}
else if (e > a && e > b && e > c && e > d){
    console.log(e);
}
// 3 Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 

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

/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X  
*/
var i = 10;
var j = 7;
var result = i / 2;
var result1 = j / 2;

console.log(typeof i);
console.log( typeof j);

if ( i % 2 === 0){
    console.log(result);
} else {
    console.log('X');
}
if (j % 2 === 0){
    console.log(result1);
} else {
    console.log('X');
}


/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console. */
var k = 5;
var l = 8;
if (k > l){
    console.log( k);
}else {
    console.log(l);
}


/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F
*/
var Celsius=60; 
var result="";

if (Fahrenheit=(9*Celsius/5) +32) {
    result=  Celsius + '°C' + ' is ' + Fahrenheit + ' °F';
}
console.log(result);




/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38
*/
var m = 11;
var n = 32;

if (m > 13) {
    console.log((m - 13) * 2);
}else if ( m < 13) {
    console.log(13 - m);
}

if (n > 13) {
    console.log(( n - 13) * 2);
} else if (n < 13)
console.log(13 - n);

/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Output : 17
Sample Input: 8,8 Output : 48*/

var a=12;
var b=5;
if (a===b) {
    console.log((a+b)*3)
} else {
    console.log(a+b)
}
var a=8;
var b=8;
if (a===b) {
    console.log((a+b)*3)
} else {
    console.log(a+b)
}

/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Output : -
Sample Input: 6,50  Output : true
Sample Input: 40,10 Output : true*/

var a=5;
var b=54;
if (a===50 || b===50 || a+b===50) {
    console.log("true")
}
var a=6;
var b=50;
if (a===50 || b===50 || a+b===50) {
    console.log("true")
}
var a=40, b=10;
if (a===50 || b===50 || a+b===50) {
    console.log("true")
}

/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
    */
var w = 13;
var y = 34;
var z = 256;



if  (20 > w ) {
    console.log('-');
} else {
    console.log('20 ⇔ 100');
}

// y = 34  20 ⇔ 100

if ( 20 < y < 100) {
    console.log('20 ⇔ 100');
} else {
    console.log('false')
}

// z = 256   100 ⇔ 400


if (100 < z < 400){
    console.log('100 ⇔ 400');
} else {
    console.log('false')
}