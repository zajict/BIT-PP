// 1.	Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
// For input 1, output should be “Monday”.

var day = 1;
var result ='';

switch (day) {
    case 1: 
        result = 'Monday'
        break;
    case 2: 
        result = 'Thuesday'
        break;
    case 3: 
        result = 'Wednesday'
        break;
    case 4: 
        result = 'Thursday'
        break;
    case 5: 
        result = 'Friday'
        break;
    case 6: 
        result = 'Saturday'
        break;
    case 7: 
        result = 'Sunday'
        break;
}
console.log(result);


// 2.	Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

var day = 10;
var result;

switch (day) {
    case 1: 
        result = 'Monday'
        break;
    case 2: 
        result = 'Thuesday'
        break;
    case 3: 
        result = 'Wednesday'
        break;
    case 4: 
        result = 'Thursday'
        break;
    case 5: 
        result = 'Friday'
        break;
    case 6: 
        result = 'Saturday'
        break;
    case 7: 
        result = 'Sunday'
        break;
    
    default:
        result = 'Input must be a number between 1 and 7'
}
console.log(result);


// 3.	Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
// 		For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

var day = 2;
var result;

switch (day) {
    case 1: 
        result = 'Monday'
    case 2: 
        result = 'Thuesday'
    case 3: 
        result = 'Wednesday'
    case 4: 
        result = 'Thursday'
    case 5: 
        result = 'Friday'
    case 6:
        result = 'It’s weekday'
        break;
    case 7: 
        result = 'Saturday'
    case 8: 
        result = 'Sunday'
    case 9:
        result = 'It’s weekend' 
        break;
    
    default:
        result = 'Input must be a number between 1 and 7'
}
console.log(result);

// 4.	Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
// 		For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

var month = 6;
var result;

switch (month) {
    case 1: 
        result = 'January'
        break;
    case 2: 
        result = 'February'
        break;
    case 3: 
        result = 'Marth'
        break;
    case 4: 
        result = 'April'
        break;
    case 5: 
        result = 'May'
        break;
    case 6:
        result = 'June'
        break;
    case 7: 
        result = 'July'
        break;
    case 8: 
        result = 'August'
        break;
    case 9:
        result = 'September' 
        break;
    case 10: 
        result = 'October'
        break;
    case 11: 
        result = 'November'
        break;
    case 12:
        result = 'December' 
        break;
    
    default:
        result = 'Input must be a number between 1 and 12'
}
console.log(result);

// 5.	Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 

var month = 5;
var result;

switch (month) {
    case 1: 
    case 2: 
    case 3: 
        result = 'Winter'
        break;
    case 4: 
    case 5: 
    case 6:
        result = 'Spring'
        break;
    case 7: 
    case 8: 
    case 9:
        result = 'Summer' 
        break;
    case 10: 
    case 11: 
    case 12:
        result = 'Autumn' 
        break;
    
    default:
        result = 'Input must be a number between 1 and 12'
}
console.log(result);

// 6.	Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

var letter = 'B';
var result;

switch (letter) {  
    case 'A': 
        result = 'Good job'
        break;
    case 'B':
        result = 'Pretty good'
        break;
    case 'C':
        result = 'Passed'
        break;
    case 'D':
        result = 'Not so good'
        break;
    case 'F':
        result = 'Failed'
        break;

    default:
            result = 'Unknown grade'
    }
    
    console.log(result);




// 7.	Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

var city = 'Belgrade';
var result;

switch (city) {
    case 'Belgrade':
    case 'Krusevac':
    case 'Nis':
    case 'Novi Sad':
    case 'Kragujevac':
    case 'Sombor':
        result = 'Serbia'
        break;
    case 'Zagreb':
    case 'Rijeka':
    case 'Split':
    case 'Pula':
        result = 'Croatia'
        break;
    case 'Podgorica':
    case 'Budva':
    case 'Bar':
        result = 'Montenegro'
        break;
    case 'Skoplje':
    case 'Ohrid':
        result = 'Macedonia'
        break;
    case 'Sarajevo':
    case 'Bihac':
    case 'Banjalula':
    case 'Mostar':
    case 'Trebinje':
        result = 'Bosna and Hercegovina'
        break;

    default:
        result = 'Please choose a different city'
    }
    
    console.log(result);


// 8.	Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var operation = '+';
var result;
var a = 5;
var b = 10;

switch (operation) {
    case '+':
        result = a+b;
        break;
    case '-':
        result = a-b;
        break;
    case '*':
        result = a*b;
        break;
    case '/':
        result = a/b;
        break;  

    default:
        console.log('An arithmetic operation cannot be performed')
}

    console.log(result);