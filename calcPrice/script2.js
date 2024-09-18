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

console.log(calcPrice(200, tax));
