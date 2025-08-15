// 12 inc to 1 feet

function inchToFeet(inch){
    const feet = inch/12;
    const actulaFeet = parseInt(feet);
    const inchi = inch%12;
    const result ='Abdur rohim heigh : '+actulaFeet+' feet '+inchi+' inch';
    return result
}
const inch = inchToFeet(84);
console.log(inch);


function mileToKillometer(mile){
    let kilometer= mile*1.609344;
    return kilometer;
}
const mile = mileToKillometer(15);
console.log(mile);

function kilometerToMile(kilometer){
   let mile= kilometer*0.621371;
    return mile;
}
const kilometer=kilometerToMile(20);
console.log(kilometer);