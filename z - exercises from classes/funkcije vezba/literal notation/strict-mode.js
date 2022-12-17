// strict mode
"use strict" //is a directive introduced in ES5.Directives are not statements(but are close enough)

function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter ++) 
        console.log("Happy happy");
    
}
canYouSpotTheProblem();
// → ReferenceError: counter is not defined

function canYouSpotTheProblem() {
    "use strict";
    for (var counter = 0; counter < 10; counter++) 
        console.log("Happy happy");
    

}
canYouSpotTheProblem();
