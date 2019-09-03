
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
    let bet = prompt(`Make your bets now! ${player}`;
    return bet
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

let bets = {} ;
let bet = getBets(player);
bets[player] = bet;
checkBets(bets, actualResult, scores);

gameRules();

