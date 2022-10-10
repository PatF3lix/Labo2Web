// src"https://www.youtube.com/watch?v=LxXWTXOny3A"
// src"youtube.com/watch?v=JSePZ82OLaw"

const SUITS = [
    {   
        icon: '♦', 
        color: 'red',
    }, 
    {
        icon: '♣',
        color: 'black',
    }, 
    {
        icon: '♥', 
        color: 'red',
    }, 
    {
        icon:'♠',
        color: 'black',
    }
];

const SPACING = 10;
const VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let positions = [];

const container = document.getElementById('container');
const ShuffleCards = document.getElementById('ShuffleCards')


function createCard({value, suit, index_suit, index_value}) {
    const card = document.createElement('div');
    card.classList.add('card');

    if(suit.color == 'red') {
        card.classList.add('red');
    }else{card.classList.add('black')}


    TOP = index_suit * 150 + SPACING * index_suit +'px';
    LEFT = index_value * 100 + SPACING * index_value + 'px';

    card.style.top = TOP
    card.style.left = LEFT
    positions.push([TOP, LEFT]);
    card.innerHTML = `
        <span class="number top">${value}</span>
        <p class="suit">${suit.icon}</p>
        <span class="number bottom">${value}</span>`;
    container.appendChild(card)
}

// Creating the cards
SUITS.forEach((suit, index_suit) => {
    VALUES.forEach((value, index_value) => {
        const cardDetails = {
            value,
            suit,
            index_suit,
            index_value
        }
        createCard(cardDetails);
    });
});

cards = document.querySelectorAll('.card');

ShuffleCards.addEventListener('click', () => {

    cards.forEach((card, index) => {
        setTimeout( () => {
            card.styleZindex = 52 - index
            card.style.top = '50%';
            card.style.left = '50%';
        }, index * 50);
    });

    setTimeout(shuffleBack, 3000);
});

function shuffleBack() {
    shuffleCards()
    cards.forEach((card, index) => {
        setTimeout( () => {
            card.styleZindex = 52 - index
            card.style.top = positions[index][0];
            card.style.left = positions[index][1];
        }, index * 50);
    });
}


function shuffleCards() {
    const half1 = positions.slice(0, 26);
    const half2 = positions.slice(26, 52)
    shuffled = []
    for (let index=0; index < 26; index++){
        shuffled.push(half1[index]);
        shuffled.push(half2[index]);
    }
    positions = shuffled
}


//     }
//     afficher_paquet_carte() {
//         for (var index = 0; index < this.mycardset; index++) {
//             if (index % length(this.mycardset) == 0 && index > 1) {
//                 print()
//             }else{
//                 print(objDeck.mycardset[i], end=" ")
//             }
//         }
//     }

//     ecrire_au_fichier() {
//         // with open('Deck_of_cards.txt', 'w', encoding="utf-8") as f:
//         // f.write(str(objDeck))
//     }
    
// }
