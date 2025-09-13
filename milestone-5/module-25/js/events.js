console.log('External file');

function myYellowColor(){
    document.body.style.backgroundColor='Yellow'
}
function myRedColor(){
    document.body.style.backgroundColor='red'
}

const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick= function makeblue(){
    document.body.style.backgroundColor= 'blue';
}

const btnMakePurple = document.getElementById('btn-make-pink');
btnMakePurple.onclick= makepurple;

function makepurple(){
    document.body.style.backgroundColor= 'pink';
}

const btnMakeGreen= document.getElementById('btn-make-green').addEventListener('click', function btngreen(){
    document.body.style.backgroundColor='green'
})

const btnMakeBlack = document.getElementById('btn-make-black').addEventListener('click', function btnMakeBlack(){
    document.body.style.backgroundColor='black';
})