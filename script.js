// build deck
var deck = [];

// build suits
var suits = [];
suits['spades'] = [
    // spades
    ['A', 'spade'],
    ['2', 'spade'],
    ['3', 'spade'],
    ['4', 'spade'],
    ['5', 'spade'],
    ['6', 'spade'],
    ['7', 'spade'],
    ['8', 'spade'],
    ['9', 'spade'],
    ['10', 'spade'],
    ['J', 'spade'],
    ['Q', 'spade'],
    ['K', 'spade']
];
suits['hearts'] = [
    // hearts
    ['A', 'heart'],
    ['2', 'heart'],
    ['3', 'heart'],
    ['4', 'heart'],
    ['5', 'heart'],
    ['6', 'heart'],
    ['7', 'heart'],
    ['8', 'heart'],
    ['9', 'heart'],
    ['10', 'heart'],
    ['J', 'heart'],
    ['Q', 'heart'],
    ['K', 'heart']
];
suits['diamonds'] = [
    // diamonds
    ['A', 'diamond'],
    ['2', 'diamond'],
    ['3', 'diamond'],
    ['4', 'diamond'],
    ['5', 'diamond'],
    ['6', 'diamond'],
    ['7', 'diamond'],
    ['8', 'diamond'],
    ['9', 'diamond'],
    ['10', 'diamond'],
    ['J', 'diamond'],
    ['Q', 'diamond'],
    ['K', 'diamond']
];
suits['clubs'] = [
    // clubs
    ['A', 'club'],
    ['2', 'club'],
    ['3', 'club'],
    ['4', 'club'],
    ['5', 'club'],
    ['6', 'club'],
    ['7', 'club'],
    ['8', 'club'],
    ['9', 'club'],
    ['10', 'club'],
    ['J', 'club'],
    ['Q', 'club'],
    ['K', 'club']
];

// build stock pile
var s = [];

// build waste pile
var w = [];

// build foundations
var spades = [];
var hearts = [];
var diamonds = [];
var clubs = [];

// build tableau
var t = [];
t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = [];

// build table
var table = [];
table['stock'] = s;
table['waste'] = w;
table['spades'] = spades;
table['hearts'] = hearts;
table['diamonds'] = diamonds;
table['clubs'] = clubs;
table['tab'] = t;

// 1. CREATE DECK
deck = create(deck, suits);

// 2. SHUFFLE DECK
deck = shuffle(deck);


// ### FUNCTIONS ###

// create deck
function create(deck, suits) {
    // loop through each suit
    for (var suit in suits) {
        suit = suits[suit];
        
        // loop through each card in suit
        for (var card in suit) {
            card = suit[card];
            deck.push(card); // push card to deck
        }
    }
    return deck;
}

// shuffle deck
function shuffle(deck) {
    // declare vars
    var i = deck.length, temp, rand;
    // while there remain elements to shuffle
    while (i !== 0) {
        // pick a remaining element
        rand = Math.floor(Math.random() * i);
        i--;
        // and swap it with the current element
        temp = deck[i];
        deck[i] = deck[rand];
        deck[rand] = temp;
    }
    return deck;
}
