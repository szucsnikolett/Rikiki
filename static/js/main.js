
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
    return bet;
}

function createObjHoldingAllBets(){
    let bets = { 'Player1' : JSON.parse(localStorage.getItem('Player1')),
            'Player2' : JSON.parse(localStorage.getItem('Player2')),
            'Player3':  JSON.parse(localStorage.getItem('Player3')),
            'Player4' : JSON.parse(localStorage.getItem('Player4'))}
    return bets
}

function createScoresinLocal(){

}


function createObjHoldingAllScores() {
    return JSON.parse(localStorage.getItem('Scores'))
}

function createObjHoldingAllroundsWon() {
    return JSON.parse(localStorage.getItem('roundsWon'))
}




//after checkHandRound need to add return player's results to have actualResult
function checkBets(bets, roundsWon, scores){
    for (let key in bets){
        if (bets.hasOwnProperty(key)){
            if (bets[key] === roundsWon[key]){
                let points = parseInt(bets[key]) * 2 + 10;
                scores[key] += points;
            } else if (bets[key] > roundsWon[key]) {
                let points = (parseInt(bets[key]) - parseInt(roundsWon[key])) * 2;
                scores[key] -= points;
            } else {
                let points = (parseInt(roundsWon[key]) - parseInt(bets[key])) * 2;
                scores[key] -= points;
            }
        }
    }
    localStorage.setItem('roundsWon', JSON.stringify(scores));
}



//add actual result of handround?
function displayScores(bets, scores, roundWon) {
    document.querySelector("#scores-table-bets1").innerHTML = bets['player1'];
    document.querySelector("#scores-table-scores1").innerHTML = scores['player1'];
    document.querySelector("#scores-table-bets-won1").innerHTML = roundWon['player1'];
    document.querySelector("#scores-table-bets2").innerHTML = bets['player2'];
    document.querySelector("#scores-table-scores2").innerHTML = scores['player2'];
    document.querySelector("#scores-table-bets-won2").innerHTML = roundWon['player2'];
    document.querySelector("#scores-table-bets3").innerHTML = bets['player3'];
    document.querySelector("#scores-table-scores3").innerHTML = scores['player3'];
    document.querySelector("#scores-table-bets-won3").innerHTML = roundWon['player3'];
    document.querySelector("#scores-table-bets4").innerHTML = bets['player4'];
    document.querySelector("#scores-table-scores4").innerHTML = scores['player4'];
    document.querySelector("#scores-table-bets-won4").innerHTML = roundWon['player4'];
}



//displayScores(bets, scores, "player1");

//let bets = {} ;
let bet = getBets("player");

//bets[player] = bet;
//checkBets(bets, actualResult, scores);

//gameRules();





