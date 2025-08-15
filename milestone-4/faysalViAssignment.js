
function totalFine( fare ) {

    if(typeof fare !== "number") {
        return "Invalid";
    }
    if(fare <= 0) {
        return "Invalid";
    }

    const fine = fare + fare * (20 / 100) + 30;
    return fine;
    
}






function onlyCharacter(str) {
    if(typeof str !== "string") {
        return "Invalid";
    }

    const removeSpace = str.replaceAll(" ", "");
    const result = removeSpace.toUpperCase();
    return result;
    
}






function bestTeam(player1, player2) {
    if (typeof player1 !== "object") {
        return "Invalid";
    }
    if (typeof player2 !== "object") {
        return "Invalid";
    }
    const team1Score = player1.foul + player1.cardY + player1.cardR;
    const team2Score = player2.foul + player2.cardY + player2.cardR;

    if (team1Score < team2Score) {
        return player1.name;
    } else if (team1Score === team2Score) {
        return "Tie";
    } else {
        return player2.name;
    }
}







function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;

}









function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let pass = [];
    let fail = [];
    for (const mark of marks) {
        total += mark;

        if (mark >= 40) {
            pass.push(mark);
        } else {
            fail.push(mark);
        }
    }
    const average =  total / marks.length;
    
    const result = {
        finalScore: Math.round(average),
        pass: pass.length,
        fail: fail.length
    }
    return result;

}
