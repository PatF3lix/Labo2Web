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
const mycardset = [];

const container = document.getElementById('container');
const buttonshuffle = document.getElementById('shuffle')

function createCard({value, suit, index_suit, index_value}) {
    const card = document.createElement('div');
    card.classList.add('card');

    if(suit.color == 'red') {
        card.classList.add('red');
    }else{card.classList.add('black')}

    card.style.top = index_suit * 150 + SPACING * index_suit +'px';
    card.style.left = index_value * 100 + SPACING * index_value + 'px';
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

buttonshuffle.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        setTimeout( () => {
            card.styleZindex = 52 - index
            card.style.top = '50%';
            card.style.left = '50%';
        }, index * 50);
    });
});


//     shuffling() {
//         halfDeck1 = this.mycardset.slice(0, this.half)
//         halfDeck2 = this.mycardset.slice(this.half, 51)
//         shuffledDeck = []
        
//         for (var index = 0; index < half; index++){
//             shuffledDeck.push(halfDeck1[index])
//             shuffledDeck.push(halfDeck2[index])
//         }
//         this.mycardset = shuffledDeck
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
