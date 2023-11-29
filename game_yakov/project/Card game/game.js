// הגדרת המשתנים והקריאה לפונקציות:

let playingcards = ['one', 'two', 'three', 'Four', 'five'];
let game = playingcards.concat(playingcards);


// mixing1 - ערבוב רנדומלי:
function mixing1(arryToMix) {
    const result = arryToMix.sort(() => 0.5 - Math.random());
    return result;
}
let afterRandom = mixing1(game);
console.log(afterRandom);

// getIndex - בקשה למספר מהמשתמש:
// function getIndex() {
//     return Number(prompt("Please choose a number between 1-10")) - 1;
// }

// checkIfEqual - בדיקה אם ערכים שווים:
// function checkIfEqual(valueA, valueB) {
//     return valueA === valueB;
// }

// cardsToSwitchToStars - יצירת מערך כוכביות:
function cardsToSwitchToStars(arrToSwitch) {
    return '*'.repeat(arrToSwitch.length).split('');
}
let stars = cardsToSwitchToStars(afterRandom);

// createCards - יצירת קלפים ב-HTML:

let openedCards = [];

function createCards() {
    let boardelement = document.getElementsByClassName("board-card")[0];

    afterRandom.forEach((cardValue) => {
        let cardelement = document.createElement("div");
        cardelement.classList.add('card');
        boardelement.appendChild(cardelement)
        cardelement.value = cardValue;
        cardelement.innerHTML = ` `;

        
        cardelement.onclick = (e) => {
            if (openedCards.length < 2) {
                e.target.innerText = e.target.value;
                openedCards.push(e.target.value)
                
            }
            
            if(openedCards.length == 2) {
                if (openedCards[0] == openedCards[1]) {
                    alert("עבודה יפה");
                    e.target.innerText = e.target.value;
                    openedCards = [];
                }

                else{
                    e.target.innerHTML=``
                    alert("נחש אותי נחש");
                    openedCards = []
                }
            }
        };
        boardelement.appendChild(cardelement);
    });
}













// init - רץ את המשחק:
function init() {
    stars = cardsToSwitchToStars(afterRandom);
    createCards()
}

init();




// while (!checkIfEqual(stars.toString(), afterRandom.toString())) {
//     let card1 = getIndex();
//     stars[card1] = afterRandom[card1];

//     let card2 = getIndex();
//     stars[card2] = afterRandom[card2];

//     const isEqual = checkIfEqual(afterRandom[card1], afterRandom[card2]);

//     if (!isEqual) {
//         stars[card1] = "*";
//         stars[card2] = "*";
//     } else {
//         console.log(stars);
//     }
// }