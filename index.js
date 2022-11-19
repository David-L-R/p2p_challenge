import characters from "./data/characters.json" assert { type: "json" };

console.log("test");

/* ELEMENTS */
const characterContainer = document.getElementById("character-container");
const genderFilter = document.getElementById("gender");
const speciesFilter = document.getElementById("species");
const statusFilter = document.getElementById("status");
const search = document.getElementById("search");

const filterMap = {
  gender: genderFilter,
  status: statusFilter,
  species: speciesFilter,
};

/* CONSTANTS */

const SELECT_ALL_TEXT = "Select all";

/* Variables */
let chosenIds = [];

/* ADD/REMOVE CARDS */

const printCards = (characters) => {
  characters.forEach((character) => {
    console.log(character);
    const { id, name, image, status, species, gender, points } = character;
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

    const pointsElement = document.createElement("p");
    const pointsText = document.createTextNode(`Points: ${points}`);
    pointsElement.appendChild(pointsText);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const button = document.createElement("button");
    button.setAttribute("id", `${id}`);
    button.classList.add("choose-button");
    const buttonText = document.createTextNode("Choose");
    button.appendChild(buttonText);
    buttonContainer.appendChild(button);

    
    textContainer.appendChild(titleElement);
    textContainer.appendChild(statusElement);
    textContainer.appendChild(speciesElement);
    textContainer.appendChild(genderElement);
    textContainer.appendChild(pointsElement);
    textContainer.appendChild(buttonContainer);
    card.appendChild(img);
    card.appendChild(textContainer);
    characterContainer.appendChild(card);
  });
};

const cleanCardContainer = () => {
  characterContainer.innerHTML = "";
};

/* SELECT */

const getOptions = () => {
  const options = {
    gender: [],
    status: [],
    species: []
  };

  const { gender, status, species } = options;

  characters.forEach((character) => {
    gender.push(character.gender);
    status.push(character.status);
    species.push(character.species);
  });

  return options;
};

const createOptionNodes = (filterOptions, appendToElement) => {
  // select all
  const selectAllOption = document.createElement("option");
  selectAllOption.setAttribute("value", "all");
  const optionText = document.createTextNode(SELECT_ALL_TEXT);
  selectAllOption.appendChild(optionText);
  console.log("?"+selectAllOption)
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
  
  const optionsSetGender = new Set()
  const optionsSetSpecies = new Set()
  const optionsSetStatus = new Set()
  for(let index = 0; index < options.gender.length; index++) {
    
    optionsSetGender.add(options.gender[index]);
    
  }
  options.gender = [...optionsSetGender]

  for(let index = 0; index < options.species.length; index++) {
    
    optionsSetSpecies.add(options.species[index]);
    
  }
  options.species = [...optionsSetSpecies]

  for(let index = 0; index < options.status.length; index++) {
    
    optionsSetStatus.add(options.status[index]);
    
  }
  options.status = [...optionsSetStatus]
  // for (let optionType in options.gender) {
  //   console.log(optionType)
  //   //set to solve
  //   optionsSetGender.add(optionType);
  //   console.log(optionsSetGender.size) 
  //   //createOptionNodes(options[optionType], filterMap[optionType]);
  // }
  console.log(options)
  for (let optionType in options) {
    //set to solve
    console.log(filterMap[optionType])
    createOptionNodes(options[optionType], filterMap[optionType]);
  }

};

createOptions();

/* CHOSEN SECTION */
const chosenContainer = document.getElementById("chosen-container");

const cleanChosenContainer = () => {
  chosenContainer.innerHTML = "";
};

const createChosenCards = (chosenIds) => {
  cleanChosenContainer();
  chosenIds.forEach((chosenId) => {
    const chosen = characters.find((character) => chosenId === character.id);

    const card = document.createElement("div");
    card.classList.add("chosen-card");

    const avatar = document.createElement("img");
    avatar.setAttribute("src", chosen.image);

    const textElement = document.createElement("p");
    const text = document.createTextNode(chosen.name);
    textElement.appendChild(text);

    const button = document.createElement("button");
    const textButton = document.createTextNode("Remove");
    card.classList.add("remove-button");
    button.setAttribute("id", chosen.id);
    button.appendChild(textButton);

    card.appendChild(avatar);
    card.appendChild(textElement);
    card.appendChild(button);

    chosenContainer.appendChild(card);
  });
};

// EVENT LISTENERS
const addEventListenerToChooseButtons = () => {
  const chooseButtons = document.getElementsByClassName("choose-button");
  Array.from(chooseButtons).forEach((button) => {
    button.addEventListener("click", chooseCharacter);
  });
};

const addEventListenerToRemoveButtons = () => {
  const chooseButtons = document.getElementsByClassName("remove-button");
  Array.from(chooseButtons).forEach((button) => {
    button.addEventListener("click", () => {});
  });
};

// CREATE CARDS
const createCards = () => {
  //cleanCardContainer();

  let filtered = [...characters];

  // filtered = filtered.filter(
  //   (character) => character.gender === genderFilter.value
  // );

  // filtered = filtered.filter(
  //   (character) => character.status === statusFilter.value
  // );

  // filtered = filtered.filter(
  //   (character) => character.species === speciesFilter.value
  // );

  // filtered = filtered.filter((character) =>
  //   character.name.toLowerCase().includes(search.value.toLowerCase())
  // );

  // filtered.filter((character) => {
  //   !chosenIds.includes(character.id);
  // });

  // if (filtered.length === 0) {
  //   const textElement = document.createElement("p");
  //   const text = document.createTextNode("No character matches the filter");
  //   textElement.appendChild(text);
  //   characterContainer.appendChild(textElement);
  //   addEventListenerToChooseButtons();
  //   addEventListenerToRemoveButtons();
  //   return;
  // }

  printCards(characters);
  addEventListenerToChooseButtons();
  addEventListenerToRemoveButtons();
};

const chooseCharacter = (e) => {
  chosenIds.push(parseInt(e.target.id));
  createChosenCards(chosenIds);
  createCards();
};

const removeCharacter = (e) => {
  chosenIds = chosenIds.filter(
    (chosenId) => chosenId !== parseInt(e.target.id)
  );
  createChosenCards(chosenIds);
  createCards();
};

search.addEventListener("input", createCards);
for (const filter in filterMap) {
  filterMap[filter].addEventListener("input", createCards);
}
