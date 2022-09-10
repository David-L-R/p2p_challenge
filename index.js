import characters from "./data/characters.json" assert { type: "json" };

/* ADD/REMOVE CARDS */
const characterContainer = document.getElementById("character-container");

const createCards = (characters) => {
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

/* SEARCH */
const filteredCharactersBySearch = (e) => {
  console.log(e.target.value);
  const MINIMUM_NUMBER_OF_CHARACTERS = 4;
  if (
    e.target.value === "" ||
    e.target.value.length < MINIMUM_NUMBER_OF_CHARACTERS
  ) {
    cleanCardContainer();
    createCards(characters);
    return;
  }

  cleanCardContainer();
  const searchWord = e.target.value;
  const filtered = characters.filter((character) =>
    character.name.toLowerCase().includes(searchWord.toLowerCase())
  );
  console.log(filtered);
  createCards(filtered);
};

const search = document.getElementById("search");
search.addEventListener("input", filteredCharactersBySearch);

/* FILTER */

const genderFilter = document.getElementById("gender");
const speciesFilter = document.getElementById("species");
const statusFilter = document.getElementById("status");
