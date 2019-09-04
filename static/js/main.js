
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

function createObjHoldingAllBets(bet1, bet2, bet3, bet4){
    let bets = {};
    for (let key in bet1){
        if (bet1.hasOwnProperty(key)){
            bets[key] = bet1[key];
        }
    }
    for (let key in bet2){
        if (bet2.hasOwnProperty(key)){
            bets[key] = bet2[key];
        }
    }
    for (let key in bet3){
        if (bet3.hasOwnProperty(key)){
            bets[key] = bet3[key];
        }
    }
    for (let key in bet4){
        if (bet4.hasOwnProperty(key)){
            bets[key] = bet4[key];
        }

    }
    return bets
}


//after checkHandRound need to add return player's results
function checkBets(bets, actualResult, scores){
    for (let key in bets){
        if (bets.hasOwnProperty(key)){
            if (bets[key] === actualResult[key]){
                let points = parseInt(bets[key]) * 2 + 10;
                scores[key] += points;
            } else if (bets[key] > actualResult[key]) {
                let points = (parseInt(bets[key]) - parseInt(actualResult[key])) * 2;
                scores[key] -= points;
            } else {
                let points = (parseInt(actualResult[key]) - parseInt(bets[key])) * 2;
                scores[key] -= points;
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





