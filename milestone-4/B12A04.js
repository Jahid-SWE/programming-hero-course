
// 1
function totalFine( fare ) {
    // You have to write your code here
    if(  fare <=0 || typeof(fare) !== "number"){
        return 'Invalid'
    }
    fine = fare+(fare * (20/100))+30;
    return fine;

}

// 2

function  onlyCharacter( str ) {
    // You have to write your code here
    if(typeof str !== 'string'){
        return 'Invalid';
    }
    let spaceRemovestr = str.split(' ');
    let joinstr= spaceRemovestr.join("")
    character=joinstr.toUpperCase()
    return character;
}


//  3

function bestTeam( player1, player2 ) {
    // You have to write your code here
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

//  4

function  isSame(arr1 , arr2 ) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if(arr1.length !== arr2.length) {
        return false
    }
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


// 5
function resultReport( marks ) {
    // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let totalMarks = 0;
    let pass = [];
    let fail = [];
    for (const mark of marks) {
        totalMarks += mark;

        if (mark >= 40) {
            pass.push(mark);
        } else {
            fail.push(mark);
        }
    }
    const averageMarks =  totalMarks / marks.length;
    
    const result = {
        finalScore: Math.round(averageMarks),
        pass: pass.length,
        fail: fail.length
    }
    return result;

}




// with data


// 1
function totalFine( fare ) {
    // You have to write your code here
    if(  fare <=0 || typeof(fare) !== "number"){
        return 'Invalid'
    }
    fine = fare+(fare * (20/100))+30;
    return fine;

}

console.log(totalFine("Gorib tai ticket katinai"));


// 2

function  onlyCharacter( str ) {
    // You have to write your code here
    if(typeof str !== 'string'){
        return 'Invalid';
    }
    let spaceRemovestr = str.split(' ');
    let joinstr= spaceRemovestr.join("")
    character=joinstr.toUpperCase()
    return character;
}
console.log(onlyCharacter(true));




// 3

function bestTeam( player1, player2 ) {
    // You have to write your code here
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
{ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
));





//  4 
function  isSame(arr1 , arr2 ) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if(arr1.length !== arr2.length) {
        return false
    }
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]));




// 5

function resultReport( marks ) {
    // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let totalMarks = 0;
    let pass = [];
    let fail = [];
    for (const mark of marks) {
        totalMarks += mark;

        if (mark >= 40) {
            pass.push(mark);
        } else {
            fail.push(mark);
        }
    }
    const averageMarks =  totalMarks / marks.length;
    
    const result = {
        finalScore: Math.round(averageMarks),
        pass: pass.length,
        fail: fail.length
    }
    return result;

}
console.log(resultReport(100));
