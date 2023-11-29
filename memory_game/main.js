//          card game

function mixCards(a) {
    for (i = 0; i < a.length; i++) {
        let newPlace = Number(Math.floor(Math.random() * dubleCard.length));    //newPlace מספר אקראי לתא במערך הקלפים ע"י עיגול מס' רנדומלי בטווח הקלפים שיש
        let temp = dubleCard[newPlace];      //מכניס ל temp את הקלף במקום האקראי
        dubleCard[newPlace] = dubleCard[i];
        dubleCard[i] = temp;
    }
    return dubleCard;
}

function cheackIfChoosen(card) {
    if (stars[card] != '*') {
        console.log('the card is teurnd. try a differnt card');
        wasChoosen = true;
    }
}

function chooseCard(card) {
    alert('the card is ' + dubleCard[card])
}

function areThereTheSame(card1, card2) {
    if (dubleCard[card1] == dubleCard[card2]) {
        console.log("you are rhight!");
        isTrue = true;
    }
}

function ifTrueChange(a) {
    if (isTrue == true) {
        stars[card1] = dubleCard[card1];
        stars[card2] = dubleCard[card2];
    }
}


//              הקוד והמשתנים
let card1 = '', card2 = '', wasChoosen = false, isTrue = false;
const card = ['https://img.lovepik.com/element/40114/1473.png_860.png',
'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78349/arctic_vir_2012147.jpg',
'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGQzNi0xLXBpYTAwMjcxLWpvYjYyM18xLWwxcHFiZnNjLnBuZw.png',
'https://toppng.com/uploads/preview/planet-png-11553974536i25hsmrvew.png',
'https://img.lovepik.com/element/40100/1177.png_860.png']; //['a' ,'a' ,'a' ,'a' ,'a' ,'a'  ]
const dubleCard = card.concat(card);
const stars = '*'.repeat(dubleCard.length).split("")
const boardElement = document.getElementsByClassName("board")[0]; //  הכנתסתי את הלוח לתוך משתנה

mixCards(dubleCard)
console.log(stars);


function makeCardsInJS (){
    dubleCard.forEach((card)=>{
        const cardElement = document.createElement("div"); //  יצרתי אלמנט, ושמתי בו "דיב"
        cardElement.className='card';
        cardElement.value = card //  הערך של הכרטיס שווה לכרטיס עצמו (כדי שיהיה כוכבית)
        cardElement.onclick=(e)=>{
            card1 = e.target.value
            // cardElement.innerText = e.target.value       זה נתן את האות, בשורה הבאה החלפתי אותה בקישור של תמונה
            cardElement.style.backgroundImage=`url(${e.target.value})`  //  התצוגה של הפנימי הוא הערך של הכרטיס שלחצתי עליו
        }
        
        boardElement.appendChild(cardElement); //  משייך את הכרטיס ללוח

    })
}

function ifFalse (){

}

// console.log(cardElement);




// console.log(dubleCard);  //              מדפיס את הערך של כל מקום - מגלה את התשובה
// alert('if want to stop - tipe "end')
// while (stars.includes(("*"))) {
    // wasChoosen = false;
    // card1 = prompt('enter card number');
    // if (card1 == 'end') {
        //     break;
        //     // }
//     // chooseCard(card1);
//     cheackIfChoosen(card1);
//     // card2 = prompt('enter card number');
//     // if (card2 == 'end') {
    //     //     break;
    //     // }
    //     if (card2 == card1) {
        //         // alert('you chosse the same card. try again');
        //         // continue;
        //     }
        //     // chooseCard(card2);
        //     cheackIfChoosen(card2);
        //     if (wasChoosen == true) {
            //         // continue
            //     }
            //     wasChoosen == false;
            //     areThereTheSame(card1, card2);
            //     ifTrueChange(isTrue)
            //     console.log(stars);
            //     isTrue = false
// // }
// if (!stars.includes('*')) {
    //     console.log('well done! you finished the game!!');
    // }
    
    makeCardsInJS ()
    
        




ifFalse (card1 , card2);


































