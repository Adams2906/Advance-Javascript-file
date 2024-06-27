/*

 What are templates literals?
 Template literals are an alternative way of working with strings, 
 which was introduced in the ES6 addition to the JavaScript language.

 */

 // Up until ES6, the only way to build strings in Javascript was to delimit them in either single quotes or double quotes:

 //'Hello, World!'
 // "Hello, World"

  //Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  
 
  //`Hello, World!`

  /*
  Differences between a template and regular string

There are several ways in which a template string is different from a regular string. */

//First, it allows for variable interpolation: 

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
 

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)



//ES5 Strings

let noMultiLine = "No multi-line strings in ES5"
console.log("Did you know? " + noMultiLine);

//ES6 Multi-line template literals

let multiline = `
    Using ES6
    backticks,
    multi-line
    strings are
    possible!

`;

console.log(multiline);