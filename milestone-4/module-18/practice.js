let name = 'tree';
const number = 12;
var bike = 'sugaki';
// console.log(bike)

/**
 * primitive data type
 * number 
 * string
 * boolean
 * 
 * non primitive
 * 
 * array
 * object
 */

let friends= ['kamal','hasnat', 'kallu', 'hallu', 'laki'];
console.log(friends);
console.log(friends.length);
console.log(typeof friends);
console.log(friends.indexOf('kallu'));

friends.push('jakir hassan', 'tushar', 'manik');
console.log(friends);

friends.unshift('Abdul Hakim', 'lutfor', 'mansal');
console.log(friends);

friends.pop();
console.log(friends);
friends.shift();
console.log(friends)


/**
 * array looping 
 * 
 */
let motorBike = [
    'Gixer',
    'china engin',
    '60 klo',
    '1 lit',
    'two wheel',
    'five Star'
]
for(let i=0; i<motorBike.length; i++){
    // console.log(motorBike[i])
}

let i=0;
while(i<motorBike.length){
    console.log(motorBike[i], i);
    i++;
}