// Step 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

logDairy();

// Step 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let key in bird) {
    if (bird.hasOwnProperty(key)) {
      console.log(`${key}: ${bird[key]}`);
    }
  }
}

birdCan();

// Step 3
function animalCan() {
  for (let key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}

animalCan();
