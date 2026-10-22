//Hoisting in JS is a behavior where JS processes variables and function declarations before executing the code
const a = 10;
console.log(a);

//Function declared using fubction declaration syntax can be called before its decalaration
greet()
function greet()
{
    console.log("Hello");
}

//hoisting with fn expression

greet()
var greet = function()
{
    console.log("Hello");

}

//scope chain

