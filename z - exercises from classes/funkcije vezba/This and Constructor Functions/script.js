var hero1 = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + hero.name;
    }
};
console.log(hero1);






var hero2 = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + this.name;
    }
};
console.log(hero2);






function Hero1() {
    this.occupation = 'Ninja';

    // return this
    // return this.occupation
    return occupation
}
console.log(Hero1());





function Hero2(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function () {
        return "I'm " + this.name + " and I'm a " + this.occupation;
    };
}





