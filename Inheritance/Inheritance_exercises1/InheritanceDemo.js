// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }

// Person.prototype.fullName = function () {
//     return this.name + ' ' + this.surname;
// };

// Person.prototype.printInfo = function () {
//     console.log(this.fullName());
// };

//novi nacin pisanja konstruktorskih funkcija
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    //ovde pisemo metode - unutar klase
    fullName() {
        return this.name + ' ' + this.surname;
    }
    printInfo() {
        console.log(this.fullName());
    }
}



var pera = new Person('Pera', 'Peric');
console.log(pera);
pera.printInfo();


// we would like Programmer to inherit props from Person
// function Programmer(name, surname, favoriteLanguage) {
//     Person.call(this, name, surname);
//     this.favoriteLanguage = favoriteLanguage;
// }

// // we create the object with Person prototype
// Programmer.prototype = Object.create(Person.prototype);

// // Overwrite constructor property of inherited prototype
// Programmer.prototype.constructor = Programmer;

// Programmer.prototype.printInfo = function () {
//     console.log(this.fullName() + ' , favorite language: ' + this.favoriteLanguage);
// };



// nasledjivanje kako se sada pise
class Programmer extends Person {
    constructor(name, surname, favoriteLanguage) {
        super(name, surname) //umesto call
        this.favoriteLanguage = favoriteLanguage;
    }
    printInfo() {
        console.log(super.fullName() + ' , favorite language: ' + this.favoriteLanguage);
    }
}

//super je klasa koja se nasledjuje



var programmerPera = new Programmer('Pera', 'Peric', 'JS');
// console.log(programmerPera);
programmerPera.printInfo();
console.log(programmerPera.constructor);
