/* 1.	Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.*/

for ( var i = 0; i < 15; i++ ) {
    if ( i % 2 === 0 ) {
        console.log( i + " is odd" );
    }else if ( i % 2 === 1 ) {
        console.log( i + " is even" );
    }
}



/*2.	Write a program to sum the multiples of 3 and 5 under 1000.*/ 

var sum = 0;

for ( var i = 1; i <= 1000; i++ ) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        sum += i;
}
} 
 console.log(sum);



 /*3.	Write a program to compute the sum and product of an array of integers. */


 var array = [10, 22, 35, 47, 50];
 var sum = 0;
 var product = 1;

 for (var i = 0; i < array.length; i++) {
    sum += array[i]; 
    product *= array[i];
 }  

 console.log(sum);
 console.log(product);




 /*4.	Write a program which prints the elements of the following array as a single string. 
 var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

string = "";

for (var i = 0; i < x.length; i++) {
    string += x[i] + " ";

} 
console.log(string);




/*5.	Write a program that prints the elements of the following array. */

var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ]; 

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}



/*6.	Write a program that outputs the sum of squares of the first 20 numbers. */

var sum = 0;

var squares = 0;

for (var i = 0; i <= 20; i++) {
    squares = i * i;
    sum += squares;
}
 console.log(sum);


 /* 
7.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. */

var marks = [80, 77, 88, 95, 68];

sum = 0;
average = 0;

for ( var i = 0; i < marks.length; i++)  {
    sum += marks[i];
}

average = sum / marks.length;

console.log(average);


if ( average < 60) {
    console.log("F");
} else if (average > 60 && average < 70) {
    console.log("D");
} else if (average > 70 && average < 80) {
    console.log("C");
} else if (average > 80 && average < 90) {
    console.log("B");
} else if (average > 90 && average < 100) {
    console.log("A");
}


/*8.	Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/


for ( var i = 1; i <= 100; i++) {

    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz"); 
        }  if ( i % 3 === 0 ) {
            console.log("Fizz"); {
                }  if ( i % 5 === 0 ) {
                    console.log("Buzz");
                }
} else (console.log(i));
}



