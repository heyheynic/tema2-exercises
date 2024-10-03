"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

///////////// const locale = "de";
///////////// const selectedTexts = texts[locale].texts;
///////////// // console log so that I can see which array is fetched in const locale.
/////////// console.log(selectedTexts)

// language is the parameter that will be used to refer to which texts data "de" and "da"
function languageSwitch(language) {
  // texts[language] is what will access the object based on language, so if "da" is picked, we will get the Danish texts
  texts[language].texts.forEach( // this entire row used forEach to iterate over the array of text objects inside texts[language].texts. For example, the Danish array (and German) consists of two objects each.
    (lang) => (document.querySelector(lang.location).innerText = lang.text) // the data inside lang.location is equivalent to CSS ".header" and ".footer". innerText updates the selected element to the value of lang.text ("båden", "robotten")
  );
}

// this sets Danish as the default lang
languageSwitch("da"); // similar to 'const locale = "de"', but also not, as this is actively calling a function and passing "da/de" as a parameter to be used. Const locale = "de" just stores "de" as a variable and can be used anywhere. selectedLang() will run a function and passes "da"?

//gets called by the addEventListener below. lang.target.value gets the value for the selected language. 
function dropDownLang(lang) {
  const choice = lang.target.value;
  languageSwitch(choice)
}

//When a used selects a new lang in the dropdown, the change event is triggered and the dropDownLang function is called
document.querySelector("#lang__switch").addEventListener("change", dropDownLang);
