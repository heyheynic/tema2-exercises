// Name-parts

// Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.

// Hint: use indexOf and substring 

// Expect the name to be a const - you can’t modify it.

// Console.log the three variables at the very end of your code.

const fullName = "Santa Artic Claus";
console.log("Full name:" + fullName)

//get the first name
const firstName = fullName.substring(0, fullName.indexOf(" "))
console.log("First name is: " + firstName);


// +1 makes us remove that space, so that it isn't included in the name.
const middleName = fullName.substring(fullName.indexOf(" ") + 1 , fullName.lastIndexOf(" "));
console.log("Middle name is: " + middleName)

// Takes the last name that comes after the last space is written.
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
console.log("Last name is: " + lastName);


// Multiple middle names.
const multipleNames = "Albus Percival Wulfric Brian Dumbledore";

const multipleMiddleNames = multipleNames.substring(multipleNames.indexOf(" ") +1, multipleNames.lastIndexOf(" "));
console.log("All middle names:",multipleMiddleNames)

 

// Remember that you may not use "magic numbers" in your code, so you have to create the program, so it finds the beginning and end of each part of the name.

// Also test the code with your own name (make up a middle name, if you don't have one) to ensure that it works for different lengths.

 

// Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.
// Optional:

// If you feel like challenging yourself, try to make the code work when the name string has either two, three or four names.

// Test if it works with 

// const name = "Albus Percival Wulfric Brian Dumbledore";

// Where the middleName would end up being "Percival Wulfric Brian".

// You might need to use lastIndexOf in addition to indexOf.
