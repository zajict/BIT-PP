//first slide
//global execution context
for (var i = 1; i <= N; i++) {
    var sum = 0;
    sum = sum + 1;
}
console.log(sum);


//kod koji nije unutar funkcije 
//globalni objekti
//windows




//second slide
var name = "John";//globalna var prvo
function first() {
    var a = "Hello";
    second();//3 funkcija second
    var x = a + name;
}

function second() {
    var b = "Hi!";
    third();//4 funkcija third
    var z = b + name;
}

function third() {
    var c = "Hey!";
    var z = c + name;
}
first(); // 2 funkcija first
//na kraju unutrasnje variable first, pa second, pa third
//na kraju kada se izvrsi sve se sklanja iz stack-a 

//izvrsava se nesto drugo ako ima


