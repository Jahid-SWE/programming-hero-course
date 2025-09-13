// 1
const teacher = {
    name:'hassna',
    subject: 'Bangla',
    age: 25,
    address:'dhaka'
}

// 2
const tree ={
    name: 'Mango',
    height: 75,
    age:70,
    fruit: "mango"
}

// 3
const animal={
    name : 'Cat',
    age: 12,
    leg:4,
    eat:"fish"

}

// 4 
const father ={
    name:'Jahrul islam', 
    age: 38,
    occupation: 'Farmer', 
    children: 3,
}

// 5
const motorbike= {
    name: 'Honda', 
    color: 'red',
    price:3837,
    speed: 50
}

// 6 
const bird={
    name: 'Parot', 
    age:3,
    color: 'pink', 
    food: 'corn'
}

// 7
const laptop={
    brandName: 'laptop',
    ram:4,
    processor: 'i3 5gen',
    price: 200000   
}

const man= {
    name:'jahid',
    age: 25,
    class:10,
    married: 'single',
    salary:3838300
}
const per=man['class'];
// console.log(per);

const college={
    'college name':'Ns. Gov',
    age: 25,
    'address': 'Dhaka',
    events:['science Fair', 'bijoy dibosh', '21 february'],
    uniqe:{
        color: 'blue',
        result:{
            gpa:5,
            merit:'top'
        }
    }

};
college.uniqe.color= 'red';
chgcolor = college.uniqe.color;
// console.log(chgcolor);



// 1 
const player= {
    name:'Jahid',
    age: 25,
    sports: 'Cricket',
    team:'bangladesh'
}
console.log(player.team);


// 2 
let lap={
    brand:'hp', 
    price:27398,
    hardDisk: '240', 
    screenSize: 19

}
console.log(lap.price);


// 3---- baki nai parbo

const favplace = {
    name: 'sundorban',
    distance: "3838km",
    popularty:'high'
}

const nap=favplace['popularty'];
console.log(nap);



const computer = {
    brand:'hp',
    brand:200,
    processor:'i3',
    ssd:'240'
}
const ke= Object.keys(computer);
console.log(ke);
conslol.log(ke);