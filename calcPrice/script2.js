// Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// Lav moms som et default parameter sat til 25.



// function name(parameter1, parameter2, ... parameterN) {
//    }

// name(argument1, argument2, ... argument3)




// let price = 200;

let tax = 1.25;

function calcPrice(price, tax) {
    return price * tax;
}

console.log( `Total price is: ${calcPrice(500, tax)} kr`);


///////

// calculatePrice(200, 37)
// function calculatePrice(price, moms) {
//     // price * (1 + moms / 100);
// }

// console.log( price * (1 + moms / 100))

