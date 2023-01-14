/*   
1.	Create constructor functions with properties representing the following:
○	Person: name, surname
○	Employee: inherits Person and has job and salary
○	Developer: inherits from Employee and has specialization
○	Manager: inherits from Employee and has department
*/

function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}


function Employee (name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    return this.name + ' ' + this.surname + ' ' + this.job + ' ' + this.salary;
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
    this.salary *= 1.2;
    return this.salary;
}


function Developer(name, surname, job, salary, specialization) {

    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}




function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Manager.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (department) {
    this.department = department;
    console.log(this.department);
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


