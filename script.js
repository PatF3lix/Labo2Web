// src"https://www.youtube.com/watch?v=LxXWTXOny3A"


class Card{
    constructor(suite, value) {
        this.suite = suite
        this.value = value
    }
}

class Deck{
    constructor() {
        const half = length(VALUES)*2
        const SUITE = ['♦','♣','♥','♠']
        const VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        const mycardset = []

        for (var indexSuite = 0; indexSuite < 4; indexSuite++) {
            for (var indexValues = 0; indexValues < half; indexValues++){
                mycardset.push(new Card(SUITE[indexSuite] + VALUES[indexValues]));
            } 
        }
    }

    shuffling() {
        halfDeck1 = this.mycardset.slice(0, this.half)
        halfDeck2 = this.mycardset.slice(this.half, 51)
        shuffledDeck = []
        
        for (var index = 0; index < half; index++){
            shuffledDeck.push(halfDeck1[index])
            shuffledDeck.push(halfDeck2[index])
        }
        this.mycardset = shuffledDeck
    }
    afficher_paquet_carte() {
        for (var index = 0; index < this.mycardset; index++) {
            if (index % length(this.mycardset) == 0 && index > 1) {
                print()
            }else{
                print(objDeck.mycardset[i], end=" ")
            }
        }
    }

    ecrire_au_fichier() {
        // with open('Deck_of_cards.txt', 'w', encoding="utf-8") as f:
        // f.write(str(objDeck))
    }
    
}


let deck = new Deck()
console.log(deck.afficher_paquet_carte);


