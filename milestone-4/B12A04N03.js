
function bestTeam(player1, player2) {
    if (
        typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null || Array.isArray(player1) ||
          Array.isArray(player2)
    ) {
        return "Invalid";
    }

    let team1Total = player1.foul + player1.cardY + player1.cardR;
    let team2Total = player2.foul + player2.cardY + player2.cardR;

    if (team1Total < team2Total){
        return player1.name;
    }
        
    else if (team2Total < team1Total){
        return player2.name;
    }
         
    else {
        return "Tie";
    }
}
console.log(bestTeam(
{ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 } 
));