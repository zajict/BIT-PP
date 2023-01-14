var hero = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + hero.name;
    }
};
console.log(hero.sayName());






var hero = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + this.name;
    }
};
console.log(hero.sayName());




function Hero() {
    this.occupation = 'Ninja';

    // return this
    // return this.occupation
    return occupation
}
console.log(Hero());



var hero = new Hero();
hero.occupation;
// "Ninja"



function Hero(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function () {
        return "I'm " + this.name + " and I'm a " + this.occupation;
    };
}
var heroOne = new Hero('Michelangelo');
var heroTwo = new Hero('Donatello');

heroOne.whoAreYou();
// "I'm Michelangelo and I'm a Ninja"

heroTwo.whoAreYou();
// "I'm Donatello and I'm a Ninja"




var hero = Hero('Leonardo');
typeof hero;
// "undefined"







// SA NETA

//example1
// constructor function
function Person(person_name, person_age, person_gender) { // assigning  parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return('Hi' + ' ' + this.name);
    }
}


// creating objects
var person1 = new Person('John', 23, 'male');
var person2 = new Person('Sam', 25, 'female');

// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"




//example2


