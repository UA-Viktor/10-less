const objC = {
    z: 10,
}

const objB = Object.create(objC);
objB.y = 4;

const objA = Object.create(objB);
objA.x = 2;

console.log(objA.z);
objA.y = 300;
objA.z = 300;


console.log(objA.hasOwnProperty('z'));
console.log(objA.z);
console.log(objC.z);         


// Видео 28:00