// src"https://www.youtube.com/watch?v=LxXWTXOny3A"
// src"www.youtube.com/watch?v=JSePZ82OLaw"

const SUITS = [
    {   
        icon: '♦', 
        couleur: 'rouge',
    }, 
    {
        icon: '♣',
        couleur: 'noir',
    }, 
    {
        icon: '♥', 
        couleur: 'rouge',
    }, 
    {
        icon:'♠',
        couleur: 'noir',
    }
];

const SPACING = 10;
const VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let positions = [];
// element html div
const container = document.getElementById('container');
// element html boutton
const brasser_cartes = document.getElementById('brasserCartes')

function createCard({value, suit, index_suit, index_value}) {
    // crée une carte comme un element div
    const carte = document.createElement('div');
    // ajouter l'attribut carte a l'objet carte
    carte.classList.add('carte');
    // ajout d'attribut couleur
    if(suit.couleur == 'rouge') {
        carte.classList.add('rouge');
    }else{carte.classList.add('noir')}

    // positionnement des carte sur l'interface graphique
    TOP = index_suit * 150 + SPACING * index_suit +'px';
    LEFT = index_value * 100 + SPACING * index_value + 'px';
    // revoir ce code avec le prof pour plus d'info
    carte.style.top = TOP
    carte.style.left = LEFT
    // inséré les positionnement dans une liste
    positions.push([TOP, LEFT]);
    // positionnement des valeur et suit sur l'objet carte qui est un elem div et representation de l'ement sur la page web
    carte.innerHTML = `
        <span class="number top">${value}</span>
        <p class="suit">${suit.icon}</p>
        <span class="number bottom">${value}</span>`;
    //inséré la carte dans le container 
    container.appendChild(carte)
}

// Créé le paquet de 52 carte
SUITS.forEach((suit, index_suit) => {
    VALUES.forEach((value, index_value) => {
        const Detailscarte = {
            value,
            suit,
            index_suit,
            index_value
        }
        createCard(Detailscarte);
    });
});
// crée une liste de toutes les cartes
cartes = document.querySelectorAll('.carte');

brasser_cartes.addEventListener('click', () => {
    cartes.forEach((carte, index) => {
        //La méthode setTimeout() appelle une fonction après un certain nombre de millisecondes. 
        setTimeout( () => {
            // fonction qui permet le deplacement de toutes les cartes vers le centre de la page.
            carte.styleZindex = 52 - index
            carte.style.top = '50%';
            carte.style.left = '50%';
            // temps d'execution entre chaque appel pour que il y est une fluidité
        }, index * 50); 
    });
    
    setTimeout(mise_en_place, 3000);
});
// replacer toutes les cartes a leur positionnement après avoir brasser
function mise_en_place() {
    brassage()
    cartes.forEach((carte, index) => {
        setTimeout( () => {
            carte.styleZindex = 52 - index
            carte.style.top = positions[index][0];
            carte.style.left = positions[index][1];
        }, index * 50);
    });
}
// brassage inter-coupé
function brassage() {
    moitié1 = []
    moitié2 = []
    paquet_brassé = []
    const MOITIÉ = 26
    for(let index = 0; index < MOITIÉ; index++){
        moitié1.push(cartes[index])
        moitié2.push(cartes[index+26])
    }

    for (let index = 0; index < 26; index++){
        paquet_brassé.push(moitié1[index])
        paquet_brassé.push(moitié2[index])
    }
    cartes = paquet_brassé
}


//     ecrire_au_fichier() {
//         // with open('Deck_of_cards.txt', 'w', encoding="utf-8") as f:
//         // f.write(str(objDeck))
//     }
    
// }
