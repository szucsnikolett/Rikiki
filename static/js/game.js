function rotateCards() {
    document.querySelector("#left").style.transform = "rotate(90deg)";
    document.querySelector("#right").style.transform = "rotate(270deg)";
    document.querySelector("#top").style.transform = "rotate(180deg)";
}

rotateCards();


function shuffleDeck() {
    const cards = ['C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11', 'C12', 'C13', 'C14',
                   'D02', 'D03', 'D04', 'D05', 'D06', 'D07', 'D08', 'D09', 'D10', 'D11', 'D12', 'D13', 'D14',
                   'H02', 'H03', 'H04', 'H05', 'H06', 'H07', 'H08', 'H09', 'H10', 'H11', 'H12', 'H13', 'H14',
                   `S02`, 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10', 'S11', 'S12', 'S13', 'S14'];
  let currentIndex = cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
}



function dealCards(numberOfCards){

    let shuffledDeck = shuffleDeck();
    let Player1Cards = [];
    let Player2Cards = [];
    let Player3Cards = [];
    let Player4Cards = [];
    for(let i = 0; i < numberOfCards; i++ ){
        Player1Cards.push(shuffledDeck.shift());
        Player2Cards.push(shuffledDeck.shift());
        Player3Cards.push(shuffledDeck.shift());
        Player4Cards.push(shuffledDeck.shift());
    }
    Player1Cards = Player1Cards.sort();
    Player2Cards = Player2Cards.sort();
    Player3Cards = Player3Cards.sort();
    Player4Cards = Player4Cards.sort();

    let trump = shuffledDeck.shift();

    return {'Player1': Player1Cards, 'Player2': Player2Cards, 'Player3': Player3Cards, 'Player4': Player4Cards,
            'Deck': shuffledDeck, 'trump': trump};
}

function displayPlayerHands(CardsOfPlayer){
    let rootSrc = '../static/images/cards/';
    let players = ['#top', '#left', '#right', '#player'];
    let numberOfCards = CardsOfPlayer.length;
    for( let player of players){
        let PlayerHtml = document.querySelector(player);
        PlayerHtml.innerHTML = '';
        for(let i = 0; i < numberOfCards; ++i){
            const card = document.createElement('img');
            card.classList.add('card');
            if(player === '#player'){
                card.setAttribute('src',rootSrc + CardsOfPlayer[i] + '.svg');
                card.setAttribute('data-card', CardsOfPlayer[i]);
            }
            else{
                card.setAttribute('src',rootSrc + 'BLUE_BACK.svg');
            }
            PlayerHtml.appendChild(card);
            rotateCards();
    }
        }

}


function displayDeck(Deck){
    let rootSrc = '../static/images/cards/';
    let deckSize = Deck.length;
    let deckHtml = document.querySelector('.deck');
    deckHtml.innerHTML = '';
    for(let i = 0; i < deckSize; i++){
        const card = document.createElement('img');
        card.classList.add('card');
        card.setAttribute('src',rootSrc + 'BLUE_BACK.svg');
        deckHtml.appendChild(card);
    }

}

function displayTrump(trump){
    let rootSrc = '../static/images/cards/';
    let trumpHtml = document.querySelector('.trump');
    trumpHtml.innerHTML = '';
    const card = document.createElement('img');
    card.classList.add('card');
    card.setAttribute('src',rootSrc + trump + '.svg');
    trumpHtml.appendChild(card);
}

let Cards = dealCards(12);
displayTrump(Cards.trump);
displayDeck(Cards.Deck);
displayPlayerHands(Cards.Player1);


function getBets(player){
    let bet = prompt(`Make your bets now! ${player}`);
    return bet
}

function getPlayers() {
    let names = {};
    let player = 1;
    for (player; player <= 4; player++){
        names["Player" + player] = document.querySelector('#player'+player).dataset.name;
    }
    return names
}

function showPlayerTurn(name){
    let htmlMessage = name + "'s turn";
    let header = document.querySelector('#player-turn');
    header.textContent = htmlMessage;
}

//main skeleton (unfinished)
function main() {
    let round = 1;
    let cards;
    let players = ['Player1', 'Player2', 'Player3', 'Player4'];
    let names = getPlayers();
    let bets = {};
    for (round; round <= 2; round ++){
        console.log(round);
        cards = dealCards(round);
        for (let player of players){
            showPlayerTurn(names[player]);
            displayPlayerHands(cards[player]);
            bets[player] = getBets(names[player]);
            console.log(bets)
        }
    }
}
