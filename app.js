const section = document.querySelector("section");
const livesCount = document.querySelector("span");
let lives = 10;

// link text

livesCount.textContent = lives;

// generate the data

const getData = () => [
  { imgsrc: "./images/cat-1.jpeg", name: "cat-1" },
  { imgsrc: "./images/cat-2.jpeg", name: "cat-2" },
  { imgsrc: "./images/cat-3.jpeg", name: "cat-3" },
  { imgsrc: "./images/cat-4.jpeg", name: "cat-4" },
  { imgsrc: "./images/cat-5.jpeg", name: "cat-5" },
  { imgsrc: "./images/cat-6.jpeg", name: "cat-6" },
  { imgsrc: "./images/cat-7.jpeg", name: "cat-7" },
  { imgsrc: "./images/cat-8.jpeg", name: "cat-8" },
  { imgsrc: "./images/cat-1.jpeg", name: "cat-1" },
  { imgsrc: "./images/cat-2.jpeg", name: "cat-2" },
  { imgsrc: "./images/cat-3.jpeg", name: "cat-3" },
  { imgsrc: "./images/cat-4.jpeg", name: "cat-4" },
  { imgsrc: "./images/cat-5.jpeg", name: "cat-5" },
  { imgsrc: "./images/cat-6.jpeg", name: "cat-6" },
  { imgsrc: "./images/cat-7.jpeg", name: "cat-7" },
  { imgsrc: "./images/cat-8.jpeg", name: "cat-8" }
  //   { imgsrc: "./images/cat-9.jpeg", name: "cat-9" }
];

// randomize data

const randomize = () => getData().sort(() => Math.random() - 0.5);

// Card generator function

const cardGenerator = () => {
  const cardData = randomize();
  cardData.forEach(item => {
    // create elements
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // attach info to cards
    face.src = item.imgsrc;
    card.setAttribute("name", item.name);
    // append card
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    // add event
    card.addEventListener("click", e => {
      card.classList.toggle("toggledCard");
      checkCard(e);
    });
  });
};

// checkCards
const checkCard = e => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  clickedCard.style.pointerEvents = "none";
  const flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach(card => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
      const toggledCards = document.querySelectorAll(".toggledCard");
      if (toggledCards.length === 16)
        setTimeout(() => {
          restart("You won! Play again. ");
        }, 1000);
    } else {
      flippedCards.forEach(card => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "all";
        setTimeout(() => {
          card.classList.remove("toggledCard");
        }, 1000);
      });
      lives--;
      livesCount.textContent = lives;
      if (lives === 0)
        setTimeout(() => {
          restart("You lost! Try again. ");
        }, 1000);
    }
  }
};

const restart = text => {
  alert(text);
  const cardsData = randomize();
  const faces = document.querySelectorAll(".face");
  const cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardsData.forEach((item, index) => {
    cards[index].classList.remove("toggledCard");
    cards[index].style.pointerEvents = "all";
    cards[index].setAttribute("name", item.name);
    faces[index].src = item.imgsrc;
  });
  lives = 6;
  livesCount.textContent = lives;
  section.style.pointerEvents = "all";
};

cardGenerator();
