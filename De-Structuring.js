//De-structuring arrays and objects

//You'll learn how the for of loop works conceptually.

//To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable. For example:

/*const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
} */

//Running the above code using snippet will throw the following error:

//Uncaught TypeError: Car is not iterable

//Contrary to objects, arrays are iterable: For example:

const colors= ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}

//outputs red, orange, and yellow

/*luckily, you can use the fact that  a for loop can be run on arrays to loop over objects, but how?

Before you can properly answer this question, you first need to review three built-in methods:
Object.keys(), Object.values(), and Object.entries().

*/


//Built-in Methods 

/* The Object.keys() method 


The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the Object.keys() method.

Here's an example of running the Object.keys() method on a brand new car2 object:

*/

const car2 ={
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed', 'color']

/*
So, when I run Object.keys() and pass it my car2 object, 
the returned value is an array of strings,
 where each string is a property key of the 
 properties contained in my car2 object.

*/

//The Object.values()method... This is another useful method in object.values():

const car3 ={
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']


// The Object.entries() methid
/* Finally, there's another useful method, Object.entries(), 
which returns an array listing both the keys and the value 
*/

const car4 ={
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [ [ 'speed', 400 ], [ 'color', 'magenta' ] ]

/* This time, the values that get returned are 2-member arrays nested inside an array. 
In other words, you get an array of arrays, where each array item has two members, 
the first being a property's key, and the second being a property's value.
*/

