import characters from "./data/characters.json" assert { type: "json" };

/* ELEMENTS */
const characterContainer = document.getElementById("character-container");
const genderFilter = document.getElementById("gender");
const speciesFilter = document.getElementById("species");
const statusFilter = document.getElementById("status");
const search = document.getElementById("search");

/* Event Listeners */

/* CONSTANTS */

const SELECT_ALL_TEXT = "Select all";
const MINIMUM_NUMBER_OF_CHARACTERS = 4;

/* ADD/REMOVE CARDS */

const createCards = (characters) => {
  cleanCardContainer();

  if (characters.length === 0) {
    const textElement = document.createElement("p");
    const text = document.createTextNode("No character matches the filter");
    textElement.appendChild(text);
    characterContainer.appendChild(textElement);
    return;
  }

  characters.forEach((character) => {
    const { name, image, status, species, gender } = character;
    const card = document.createElement("div");
    card.classList.add("card");

    const textContainer = document.createElement("div");
    textContainer.classList.add("card-container");

    const titleElement = document.createElement("h2");
    const titleText = document.createTextNode(name);
    titleElement.appendChild(titleText);

    const img = document.createElement("img");
    img.setAttribute("src", image);

    const statusElement = document.createElement("p");
    const statusText = document.createTextNode(`Status: ${status}`);
    statusElement.appendChild(statusText);

    const speciesElement = document.createElement("p");
    const speciesText = document.createTextNode(`Species: ${species}`);
    speciesElement.appendChild(speciesText);

    const genderElement = document.createElement("p");
    const genderText = document.createTextNode(`Sex: ${gender}`);
    genderElement.appendChild(genderText);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const button = document.createElement("button");
    const buttonText = document.createTextNode("Choose");
    button.appendChild(buttonText);
    buttonContainer.appendChild(button);

    card.appendChild(img);
    card.appendChild(textContainer);
    textContainer.appendChild(titleElement);
    textContainer.appendChild(statusElement);
    textContainer.appendChild(speciesElement);
    textContainer.appendChild(genderElement);
    textContainer.appendChild(buttonContainer);

    characterContainer.appendChild(card);
  });
};

const cleanCardContainer = () => {
  characterContainer.innerHTML = "";
};

// initialize the page
createCards(characters);

const filterMap = {
  gender: genderFilter,
  status: statusFilter,
  species: speciesFilter,
};

/* FILTER */

const filterAllParams = () => {
  let filtered = [...filteredCharactersBySearch(search.value)];

  for (const filterType in filterMap) {
    filtered = filterBy(filtered, filterMap[filterType], filterType);
  }

  createCards(filtered);
};

/* SEARCH */
const filteredCharactersBySearch = (value) => {
  if (value === "" || value.length < MINIMUM_NUMBER_OF_CHARACTERS) {
    return characters;
  }
  const searchWord = value;
  const filtered = characters.filter((character) =>
    character.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return filtered;
};

search.addEventListener("input", filterAllParams);

/* SELECT */

const getOptions = () => {
  let gender = characters.map((character) => character.gender);
  let status = characters.map((character) => character.status);
  let species = characters.map((character) => character.species);

  const uniqeGenders = new Set(gender);
  const uniqeStatus = new Set(status);
  const uniqeSpecies = new Set(species);

  gender = Array.from(uniqeGenders);
  status = Array.from(uniqeStatus);
  species = Array.from(uniqeSpecies);

  return {
    gender,
    status,
    species,
  };
};

const createOptionNodes = (filterOptions, appendToElement) => {
  // select all
  const selectAllOption = document.createElement("option");
  selectAllOption.setAttribute("value", null);
  const optionText = document.createTextNode(SELECT_ALL_TEXT);
  selectAllOption.appendChild(optionText);
  appendToElement.appendChild(selectAllOption);

  filterOptions.forEach((option) => {
    const optionNode = document.createElement("option");
    optionNode.setAttribute("value", option);
    const optionText = document.createTextNode(
      option.charAt(0).toUpperCase() + option.slice(1)
    );
    optionNode.appendChild(optionText);
    appendToElement.appendChild(optionNode);
  });
};

const createOptions = () => {
  const options = getOptions();
  for (const optionType in options) {
    createOptionNodes(options[optionType], filterMap[optionType]);
  }
};

createOptions();

const filterBy = (array, filter, filterType) => {
  console.log(array, filter, filterType);
  return array.filter((character) => {
    // console.log(filter.options[filter.selectedIndex].text.toLowerCase());
    console.log("here");
    if (
      filter.options[filter.selectedIndex].text.toLowerCase() ===
      SELECT_ALL_TEXT.toLowerCase()
    ) {
      return true;
    }

    return (
      character[filterType].toLowerCase() ===
      filter.options[filter.selectedIndex].text.toLowerCase()
    );
  });
};

for (const filter in filterMap) {
  filterMap[filter].addEventListener("input", filterAllParams);
}
