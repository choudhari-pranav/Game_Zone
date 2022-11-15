let data = [
  {
    cardHead: "Math Clash",
    cardBody:
      "Math Clash game is an entertaining game for people who love maths ! ",
    url: "./src/Math Clash/index.html",
  },
  {
    cardHead: "NxN Tic Tac Toe",
    cardBody:
      "Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.",
    url: "./src/tic-tac-toe/index.html",
  },

  // This are on going things for upgrade

  //{
  //     cardHead: "3x3 - Tic Tac Toe",
  //     cardBody: "Tic-tac-toe with unbeatable computer, Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.",
  //     url: "./src/ai-tic-tac-toe/index.html"
  // },

  // {
  //     cardHead: "Hang Man",
  //     cardBody: "The word to guess is represented by a row of dashes, representing each letter of the word.",
  //     url: "./src/Hang Man/index.html"
  // },
];

const createCard = (dataObj) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mr-2");

  let cardbody = document.createElement("div");
  cardbody.classList.add("card-body");

  let newData = document.createElement("p");
  newData.innerHTML = dataObj.cardBody;

  let cardhead = document.createElement("div");
  cardhead.classList.add("card-title");
  cardhead.innerHTML = dataObj.cardHead;

  let preview = document.createElement("a");
  preview.classList.add("btn");
  preview.classList.add("card-btn");
  preview.href = dataObj.url;
  preview.target = "_blank";
  preview.innerHTML = "PREVIEW";

  cardbody.appendChild(cardhead);
  cardbody.appendChild(newData);
  cardbody.appendChild(preview);

  card.appendChild(cardbody);

  return card;
};

let exploreBtn = document.getElementById("explore");

let explored = false;
const explore = () => {
  if (explored) {
    return;
  }

  let mainSection = document.getElementById("main_head_section");
  mainSection.classList.add("hide");
  let allCards = document.getElementById("all_cards");
  allCards.classList.add("card-col");
  for (let i = 0; i < data.length; i++) {
    allCards.appendChild(createCard(data[i]));
  }
  explored = true;
};

exploreBtn.addEventListener("click", explore);
