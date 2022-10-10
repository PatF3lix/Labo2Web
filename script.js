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
const VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
const mycardset = []

const container = document.getElementById('container');

function createCard(value, suit) {
    const card = document.createElement
    ('div');

    card.classList.add('card');

    if(suit.color == 'red') {
        card.classList.add('red');
    }

    card.innerHTML = `
        <span class="number top">${value}</span>
        <p class="suit">${suit.icon}</p>
        <span class="number bottom">${value}</span>`;
    container.appendChild(card)
}

// Creating the cards
SUITS.forEach(suit => {
    VALUES.forEach(value => {
        createCard(value, suit)
    });
});











// class Card{
//     constructor(suite, value) {
//         this.suite = suite
//         this.value = value
//     }
// }

// class Deck{
//     constructor() {
//         const half = length(VALUES)*2
//         const SUITE = ['♦','♣','♥','♠']
//         const VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
//         const mycardset = []

//         for (var indexSuite = 0; indexSuite < 4; indexSuite++) {
//             for (var indexValues = 0; indexValues < half; indexValues++){
//                 mycardset.push(new Card(SUITE[indexSuite] + VALUES[indexValues]));
//             } 
//         }
//     }

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

// let deck = new Deck()