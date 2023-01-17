/*   
1.	Create constructor functions with properties representing the following:
○	Person: name, surname
○	Employee: inherits Person and has job and salary
○	Developer: inherits from Employee and has specialization
○	Manager: inherits from Employee and has department
*/

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}


class Employee extends Person {
    constructor(name, surname, job, salary) {

        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return super.name + ' ' + super.surname + ' ' + this.job + ' ' + this.salary;
    }
    getSalary() {
        console.log(this.salary);
    }
    increaseSalary() {
        this.salary *= 1.2;
        return this.salary;
    }

}


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        console.log(this.specialization);
    }
}


class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;


    }
    getDepartment() {
        console.log(this.department);
    }
    changeDepartment(depart) {
        this.department = depart;
        console.log(this.department);
    }

}


var pera = new Person('Pera', 'Peric');

var jon = new Employee('Jon', 'Jonson', 'Programer', 1000);
jon.getData();
jon.getSalary();
jon.increaseSalary();


var mika = new Developer('Mika', 'Mikic', 'programer', 1500, 'Frontend Developer');
mika.getSpecialization();

var homer = new Manager('Homer', 'Simpson', 'manager', 2000, 'Frontend Manager');
homer.getDepartment();
homer.changeDepartment('HR')


console.log(pera);
console.log(jon);
console.log(mika);
console.log(homer);

