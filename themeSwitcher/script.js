import { $ } from "../utils/dom.js";

// Selects the dropdown element <label for="theme">
const themeSelector = $("#theme");
// Gets the <body> element and assigns it to const body
const body = document.body;
// Gets the value of the [data-theme] from <body data-theme="">, assignw it to let theme.
let theme = body.dataset.theme;

// Listens to change of value in dropdown, calls newTheme
themeSelector.addEventListener("change", (newTheme) => {
  // Selected theme recieves the new, selected value and assigns it to theme.
  theme = newTheme.target.value;
  // Updates the [data-theme] attribute in <body>, to the new value
  body.dataset.theme = theme;
});
