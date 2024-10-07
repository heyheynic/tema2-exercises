// Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation


// Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.

// Make sure that it also works with longer names. Don't worry about names shorter than 3 characters.


const uk = "United Kingdom of Great Britain and Northern Ireland"

const lowerCaseString = uk.toLowerCase()

const randomCase = lowerCaseString.substring(0, 3) + lowerCaseString[3].toUpperCase() +  lowerCaseString.substring(4) + lowerCaseString[12].toUpperCase() + lowerCaseString.substring(13, -1)



console.log(lowerCaseString)

console.log(randomCase)

// let capitalizedString = string[0].toUpperCase() + string.slice(1);