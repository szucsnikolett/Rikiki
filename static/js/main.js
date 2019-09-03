
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

function getBets(){
    let players = ["player1", "player2", "player3", "player4"];
    let bets = {};
    for (let player of players){
        let bet = prompt(`Make your bets now! ${player}`);
        bets[player] = bet;
    }
    return bets
}

getBets();
gameRules();
