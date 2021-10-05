const section = document.querySelector("section");
const livesCount = document.querySelector("span");
const lives = 6;

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
    // append card
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    // add event
    card.addEventListener("click", e => {
      card.classList.toggle("toggleCard");
      checkCard(e);
    });
  });
};

// checkCards
const checkCard = e => {
  console.log(e.target);
};

cardGenerator();
