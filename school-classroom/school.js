"use strict";

// node --watch school.js

// const name = "Albus Percival Wulfric Brian Dumbledore"

// const count = name.length

// console.log(name.lastIndexOf("e"));
// console.log(name.indexOf("D")) // finner något specifikt i strängen

////////////////

// const fullName = 'Harry James sir sljfhkj skfj Potter'

// const middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" "))

// console.log(middleName)

// let string = "smash or pass!";

// let capitalizedString = string[0].toUpperCase() + string.slice(1);

// console.log(capitalizedString);

////////

let theText = "lorem ipsum slalom lilo lomo fomo";
const modifiedText = theText.replaceAll("ord", "ting");

console.log(modifiedText);

const splittedText = theText.split("ord");
console.log(splittedText);
console.log(splittedText.join("ting"));

