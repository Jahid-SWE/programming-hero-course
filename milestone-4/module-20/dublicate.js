

function noDublicate(arr){
    let uniq=[];
    for(let item of arr){
        if(uniq.includes(item)===false){
            uniq.push(item)
        }
    }
    return uniq;
}


const name =['kabul','jaman', 'hasnat','simul','polash','jaman']
const uniqarr = noDublicate(name);
console.log(uniqarr);


// number dublicate remove
function dublicateNumber(numbers){
    let uniqNumber=[];
    for(let number of numbers){
        if(uniqNumber.includes(number)===false){
            uniqNumber.push(number);
        }
    }
    return uniqNumber;

}
let numbers= dublicateNumber([1,3,4,2,7,1,6,4,2,4,5,8,7]);
console.log(numbers)