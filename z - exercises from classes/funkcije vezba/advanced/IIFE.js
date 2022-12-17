//Immediately-Invoked Function Expressions (IIFEs)


// pozivanje funkcije odmah nakon definisanja
(function () {
    console.log('boo');
})();



//IIFEs sa argumentom
(function (mood) {
    console.log('Feeling ' + mood + '!');
})('crazy');



// Alternatively, you can move the closing of the first set of parentheses to the end. Both of these work
(function () { // ...
}());

(function () { // ...
})();



// from class example of the IIFEs 
(function () {
    var resAdd = add(22, 33);
    console.log(resAdd);

    function add(number1, number2) {
        return number1 + number2;
    }

    var multiply = function (number1, number2) {
        return  number1 * number2;
    };

    var resMult = multiply(2, 6);
    console.log(resMult);
})();











