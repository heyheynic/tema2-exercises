// Profanity Filter, version 1
import { $, $$ } from "../utils/dom.js";

// Din opgave er at erstatte de "dårlige" ord med "gode" i teksten nedenfor med udgangspunkt i følgende datastruktur:

//
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Dette array viser, hvad de "dårlige" ord skal udskiftes med.

// Tekst: "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning."

$("button").addEventListener("click", replaceBadwords);

let text = $("p").textContent;
let alreadyCorrected = false;

function replaceBadwords() {
  if (alreadyCorrected === false) {
    curseWords.forEach((word) => {
      text = text.replaceAll(word.bad, `<span>${word.good}</span>`);

    });
    console.log("the text:", text);
    alreadyCorrected = true;
    $("p").innerHTML = text;
  } else {
    $("dialog").showModal();
  }
}

//     Lav en funktion, der erstatter de "dårlige" ord med de "gode" fra det udleverede array. Hvis teksten allerede er opdateret (ingen "dårlige" ord), skal der vises en <dialog>, der informerer brugeren om dette. Dette kan laves simpelt med et flag eller avanceret hvor teksten bliver undersøgt for om den indeholder nogle af de dårlige ord, og derfor har været igennem profanity filteret.
//     Tilføj en event listener til din knap. Når den klikkes, bør din ord-erstatningsfunktion blive kaldt, og teksten skal opdateres.
//     Brug evt. CSS til at tildele en gul baggrund til de "gode" ord.

// Husk evt. at kommentere din kode for at forklare, hvordan de forskellige dele fungerer.
