
function gameRules(){
    let button = document.getElementById('button');
    button.addEventListener('click',  showRules = () => {
        let rules = document.getElementById('rules');
        if (rules.style.display === 'none'){
            rules.style.display = 'block'
        } else {
            rules.style.display = 'none'
        }
    })
}



function getBets(player){
    let bet = {};
    let buttonData = document.getElementsByTagName("button");
    buttonData[0].addEventListener('click', getInput = () => {
        let inputField = document.getElementById('bets').value;
        bet[player] = inputField;
    });
    console.log(bet);
}


function checkBets(bets, actualResult, scores){
    for (let key in bets){
        if (bets.hasOwnProperty(key)){
            if (bets[key] === actualResult[key]){
                scores[key] += 10;
            }
        }
    }
}




function displayScores(bets, scores, player){
    let element = document.querySelector("#" + player);
    let info = `<p>Player: ${element.dataset.name}</p>
                     <p>Score: ${scores[player]}</p>
                     <p>Bet: ${bets[player]}</p>`;
    element.innerHTML = info;
}


//displayScores(bets, scores, "player1");

//let bets = {} ;
let bet = getBets("player");

//bets[player] = bet;
//checkBets(bets, actualResult, scores);

//gameRules();

function checkHandRound(cards){
    let cardValues = [];
    let trumpCard = cards[0].dataset.cardValue;
    let firstInTurnPlayer = cards[1].dataset.cardValue;
    let secondInTurnPlayer = cards[2].dataset.cardValue;
    let thirdInTurnPlayer = cards[2].dataset.cardValue;
    let fourthInTurnPlayer = cards[2].dataset.cardValue;



}