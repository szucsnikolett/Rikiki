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
    console.log(CardsOfPlayer);
    let place = '';
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
                card.addEventListener("click", function (event) {

                    if (place === '') {
                        place = '#1place';
                    }
                    else if(place === '#1place'){
                        place = '#2place';
                    }
                    else if(place === '#2place'){
                        place = '#3place';
                    }
                    else if(place === '#3place'){
                        place = '#4place';
                    }
                    else{
                        place = "";
                    }
                    $(event.currentTarget).prependTo($(place));

                    let givenCards = document.querySelectorAll('.turn-card .card');
                    // console.log(givenCard);
                    for(givenCard of givenCards){
                        givenCard.classList.replace('card', 'turn-card');
                        // givenCard.style.transform = 'rotate(0deg)';
                    }

                    // $(event.currentTarget).classList.replace($('card'),$('turn-card'));

                });
                card.setAttribute('src',rootSrc + CardsOfPlayer[i] + '.svg');
                card.setAttribute('data-card', CardsOfPlayer[i]);
            }
            else{
                card.setAttribute('src',rootSrc + 'BLUE_BACK.svg');
            }
            PlayerHtml.appendChild(card);
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
    let bet = {};
    let buttonData = document.getElementsByTagName("button");
    buttonData[0].addEventListener('click', getInput = () => {
        let inputField = document.getElementById('bets').value;
        bet[player] = inputField;
    });
    return bet;
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


function checkForTrumps(trump, cards){
    let trumpLetter = trump.split("")[0];
    let trumpMatchingCards = [];
    for (let card of cards){
        if (card.startsWith(trumpLetter)){
            trumpMatchingCards.push(card)
        }
    }
    if (trumpMatchingCards.length === 1){
        return trumpMatchingCards[0];
    } else if (trumpMatchingCards.length > 1) {
            trumpMatchingCards.sort();
            return trumpMatchingCards[0]
    } else {
        return ""
    }
}

function compareWithFirstCard(cards){
    let card1Letter = cards[0].split("")[0];
    let matchingCards = [];
    for (let i = 1; i < cards.length; i++){
        if (cards[i].startsWith(card1Letter)){
            matchingCards.push(cards[i])
        }
    }
    if (matchingCards.length === 1){
        return matchingCards[0]
    } else if (matchingCards.length > 1){
        matchingCards.sort();
        return matchingCards[0]
    } else {
        return ""
    }
}


//trump will be cards.trump
function checkHandRound(trump){
    let card1 = document.querySelector('#first').querySelector('img').dataset.card;
    let card2 = document.querySelector('#second').querySelector('img').dataset.card;
    let card3 = document.querySelector('#third').querySelector('img').dataset.card;
    let card4 = document.querySelector('#fourth').querySelector('img').dataset.card;
    let cards = [];
    cards.push(card1, card2, card3, card4);
    let winnerTrumpCard = checkForTrumps(trump, cards);
    if (winnerTrumpCard.length === 1){
        return winnerTrumpCard
    } else {
        let winnerCard = compareWithFirstCard(cards);
        if (winnerCard.length === 1) {
            return winnerCard
        } else {
            return card1
        }
    }
}

//to call for a round of cards check
//checkHandRound();

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

        }
    }
}


