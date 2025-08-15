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