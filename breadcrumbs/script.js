// What the teachers gave us to work with:
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

////////////// Start evt. med at lave en simpel HTML-struktur. Du skal have et navigationselement (<nav>) til at vise dine brødkrummepunkter, samt en knap til at udløse genereringen af brødkrummestien.

////////////// Lav en funktion, der returnerer navnet på hvert punkt i brødkrummenavigationen i et liste-element med et tilhørende link. Det sidste punkt skal kun være tekst uden et link.

// Iterate through the list, item represent the actual data (name and link), while index represents the position of the data in the array
function generateBC() {
  const bcList = document.querySelector("ul.breadcrumb"); // makes the <ul> element
  bcList.innerHTML = ""; // removes previous breadcrumbs


  bc.forEach((item, index) => {
    const list = document.createElement("li"); // create <li> element

    // creates list with link, adds separator " /"
    if (index < bc.length - 1) {
      const link = document.createElement("a"); // create <a> link element
      link.textContent = item.name; // adds breadcrumb text
      link.href = item.link; // adds the link inside <a> element
      list.appendChild(link); // appends the link to the list element. parentElement.appendChild.childElement. In this case, <li>.appendChild<a> = <li><a></a></li>

    // EDIT: didn't look good. >>>  list.innerHTML += " /"; // adds the separator after the existing list.name. Example "Hvidevarer /"
    } else {
      // creates list, not link
      list.textContent = item.name;
    }

    bcList.appendChild(list); // appends the <li> inside <ul class="breadcrumbs">
  });
}

////////////// Interaktion med knappen: Tilføj en event listener til din knap, så når den klikkes, vil din breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.

// adding the eventListener to the button to call the generateBC()
const button = document.querySelector("button");

button.addEventListener("click", generateBC);

////////////// Styling: Listeelementerne i brødkrummestien skal optræde på en række og være opdelt af en skråstreg (/) eller lignende symbol. Skråstregen skal ikke være en del af det klikbare link.
