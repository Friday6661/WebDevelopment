// var generateName = require('sillyname');


// import generateName from "sillyname";
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);


import superheroes from 'superheroes';
 
let listsuperhero = superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
let mysuperhero = superheroes.random();
//=> 'Spider-Ham'
console.log(`The list of Superheroes: ${listsuperhero}.`);
console.log(`I am ${mysuperhero}.`);