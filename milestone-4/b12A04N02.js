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
