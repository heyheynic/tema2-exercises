const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

// showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  // clearing active table:
  tbodyPointer.innerHTML = "",
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${beauty(each.fuel)}</td>
  <td>${each.passengers}</td> 
  <td>${beauty(each.stops)}</td>
  <td>${beauty(each.ownedBy)}</td>
  <td>${beauty(each.isElectric)}</td>
  <td>${beauty(each.isTandem)}</td>
</tr>`;
  });
}

////////////////////////////// Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;

function beauty(word) {
  if (word === undefined) return " ";
  if (word === true) return "x";
  return word; //IMPORTANT, if I don't return items, the items that are in fact defined or true gets overwritten
}

///// New method:
// shows all electric vehicles:
const allElectric= vehicles.filter((vehicle) => vehicle.isElectric);

// filters seats by two or more:
const multipleSeats = vehicles.filter((vehicle) => vehicle.passengers >= 2);

// filter owner by name Jonas
const ownerJonas = vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas" && vehicle.isElectric)

// filter rugbrød fuel + >= seats
const rugbrodFuel = vehicles.filter((vehicle) => vehicle.passengers >= 2 && vehicle.fuel === "Rugbrød")

// Displays all vehicles: 
showTheseVehicles(vehicles);

///// B U T T O N S

// add eventlistened to buttons
// is electric
document.querySelector(".all__electric").addEventListener("click", () => {
  showTheseVehicles(allElectric)
})

// is multiple seats
document.querySelector(".more__seats").addEventListener("click", () => {showTheseVehicles(multipleSeats)})

// is owned by Jonas
document.querySelector(".owner__jonas").addEventListener("click", () => {
  showTheseVehicles(ownerJonas)
})

// is multiple seats + rugbrød fuel
document.querySelector(".fuel__rugbrod").addEventListener("click", () => {
  showTheseVehicles(rugbrodFuel)
})

// button for all vehicles
document.querySelector(".all").addEventListener("click", () => {
  showTheseVehicles(vehicles)
})

////// Select all buttons
const buttons = document.querySelectorAll("button")

// how to clear buttons on click
function clearButtons() {
  buttons.forEach((button) => button.classList.remove("active"));
}

// clear table on click
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    clearButtons();
    e.target.classList.add("active"); // Set the clicked button as active
  })
})

// Create funtion for clearButtons



////// Old methods below:

////////////////////////////// en der viser alle el drevne fartøjer:
// const onlyElectric = vehicles.filter(isVehicleElectric);
// showTheseVehicles(electricVehArr)
// function isVehicleElectric(vehicle) {
//   if (vehicle.isElectric === true) {
//     return true;
//   }
// }

////////////////////////////// en der viser alle fartøjer med mere end 2 sæder

// const multiplePassengers = vehicles.filter(isMultiplePassengers);

// showTheseVehicles(multiplePassengers);

// function isMultiplePassengers(passenger) {
//   if (passenger.passengers >= 2) {
//     return true;
//   }
// }

// console.log(multiplePassengers);

////////////////////////////// alle fartøjer el-drevne fartøjer ejet af Jonas

// const ownerJonas = vehicles.filter(isOwnedByJonas);

// function isOwnedByJonas(jonas) {
//   if (jonas.ownedBy === "Jonas") {
//     return true;
//   }
// }

////////////////////////////// alle rugbrøds drevne fartøjer med plads til mere end en.

////////////////////////////// Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)

////////////////////////////// Style tabellen endnu mere
