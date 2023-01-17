class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

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

class Programmer extends Person {
  constructor(name, surname, favoriteLanguage) {
    super(name, surname);
    this.favoriteLanguage = favoriteLanguage;
  }
  printInfo() {
    console.log(
      super.fullName() + ' , favorite language: ' + this.favoriteLanguage
    );
  }
}

var programmerPera = new Programmer('Pera', 'Peric', 'JS');
// console.log(programmerPera);
programmerPera.printInfo();
console.log(programmerPera.constructor);