const mainArray = ["a", "b", "c", "d", "e"];
let selectedCards = [];
let correctCards = [];

function shuffle(arrayForShuffling) {
  let temp;
  for (let i = 0; i < arrayForShuffling.length * 2; i++) {
    let random1 = Math.floor(Math.random() * arrayForShuffling.length);
    let random2 = Math.floor(Math.random() * arrayForShuffling.length);
    temp = arrayForShuffling[random1];
    arrayForShuffling[random1] = arrayForShuffling[random2];
    arrayForShuffling[random2] = temp;
  }
  return arrayForShuffling;
}

function checkIfEqual(valueA, valueB) {
  return valueA === valueB;
}

const onclick = (e) => {
  if (selectedCards.length < 2 && !correctCards.includes(e.target)) {
    e.target.innerText = e.target.value;
    selectedCards.push(e.target);

    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
      const isEqual = checkIfEqual(card1.value, card2.value);
      if (isEqual) {
        correctCards.push(card1, card2);
        if (correctCards.length == arrayForShuffling.length) {
          alert("Congratulations! You won!");
          // Optionally, you can reset the game here
        }
      } else {
        // Handle the case where the selected cards are not equal
        setTimeout(() => {
          card1.innerText = "";
          card2.innerText = "";
        }, 1000);
      }

      // Clear the selected cards array for the next turn
      selectedCards = [];
    }
  }
};

function init() {
  const arrayAfterShuffling = shuffle(mainArray.concat(mainArray));
  const boardElement = document.getElementById("board");

  arrayAfterShuffling.forEach((cardValue) => {
    const cardElement = document.createElement("div");
    boardElement.appendChild(cardElement);
    cardElement.className = "card";
    cardElement.value = cardValue;
    cardElement.onclick = onclick;
  });
}

init();
