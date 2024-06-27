/* In Javascript you can structure via an Array
const grades= [75, 95, 90, 85, 80, 85];
*/

const grades = [ 75, 95, 90, 85, 80, 85];
let gradesSum = 0;

for (i = 0; i < grades.length; i++){
    gradesSum += grades[i]

}

console.log(gradesSum / grades.length)

// Set is another data structure in Javascript 


const house1 = 'red'
const house2 = 'blue'
const house3 = 'red'

const houses = new Set()

houses.add(house1).add(house2).add(house3)

console.log(houses) //Set(2){'red', 'blue'}

/* The following are types of Data structures we have 
- Arrays
- Maps
- Sets
- Objects
*/
