/*1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! */
var coffee = {
    name: "Nes",
    strength: "Light",
    flavor: "vanilla",
    milk: true,
    sugar: true
};
console.log(coffee);
console.log(coffee.name);


/*2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. */
var movie = {
    title: "Ozark",
    actors: [
        "Jason Bateman", "Laura Linney", "Julia Garner"
    ],
    director: "Bill Dubuque",
    genre: "Drama",
    popularity: "Emmy 2020"
};
console.log(movie);


/*3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.*/

var exercise3 = function () {
    var project = {
        description: 'BIT-PP',
        language: 'JavaScript',
        repository: 'https://github.com/zajict/BIT-PP',

        statusOfProject: true
    }
    console.log(project.repository);

    var written = function () {

        if (project.language === 'JavaScript') {
            return "Written in JS";
        } else {
            return "Not written in JavaScript";
        }
    }
    console.log(written());

    var development = function () {
        if (project.statusOfProject === true) {
            return "In development";
        } else {
            return "Not in development";
        }
    }
    console.log(development());

}()


/*4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared in under 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  */

// pravilno resenje - sa casa

function culinaryRecipe(name, cuisine, complex, ingredients, time, instruction) {
    var recipe = {
        recipeName: name,
        typeOfCuisine: cuisine,
        complexity: complex,
        listOfIngredients: ingredients,
        preparingTime: time,
        preparingInstruction: instruction,

        PrintIngredients: function () {
            console.log(recipe.recipeNames);
        },
        checkIsUnder15Min: function () {
            return recipe.preparingTime < 15;

        },

        changeCuisineType: function (newCuisineType) {
            recipe.typeOfCuisine = newCuisineType;

        },

        deleteIngredient: function (ingredient) {
            // var newListOfIngredients = [];
            // for (var i = 0; i < recipe.listOfIngredients.length; i++) {
            //     if(recipe.listOfIngredients[i] !== ingredient) {
            //         newListOfIngredients[newListOfIngredients.length] = recipe.listOfIngredients[i];
            //     }
            // }
            // recipe.listOfIngredients = newListOfIngredients;
            recipe.listOfIngredients = recipe.listOfIngredients.filter((item) => (item !== ingredient));

        }
    }
    return recipe;
}
var x = culinaryRecipe('Lasagna Roll Ups', 'Italian', 3, [
    'Extra virgin olive oil',
    'Lasagna noodles',
    'Marinara sauce',
    'Cheese',
    'Spinach',
    'Egg'
], 50, 'Boil noodles. Mix  Cheese, Spinach, Egg. In  baking dish add Extra virgin olive oil and  Marinara sauce. Arrange rolls, seam side down, in the baking dish. Cover loosely with foil and bake for about 35 minutes or until cheese has melted and the inside is warmed through.');
console.log(x);

console.log(x.checkIsUnder15Min(50));

x.changeCuisineType('Spanish');
console.log(x.typeOfCuisine);


x.deleteIngredient('Spinach');
console.log(x.listOfIngredients);
