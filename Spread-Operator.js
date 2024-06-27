/*
The Spread Operator is a tool used to spread array items and join objects together

Note: The spread operator is characterized by three dots
*/

//Examples:

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array


const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

/*
Add new members to arrays without using the push() method
Here's how to use the spread operator to easily add one or more members to an existing array:
*/

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

/*
Convert a string to an array using the spread operator
Given a string, it's easy to spread it out into separate array items:
*/

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
