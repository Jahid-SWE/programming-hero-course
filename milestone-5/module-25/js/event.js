
// practice
// document.getElementById('btnschool').addEventListener('click', function makepink(){
// document.body.style.backgroundColor='green'
// })























// document.getElementById('update-btn').addEventListener('click',function(){
//     // console.log('He Clicked me');
//     const pageTitle = document.getElementById('page-title');
//     // console.log(pageTitle)
//     pageTitle.innerText= "It has updated"
// })




// document.getElementById('nameBtn').addEventListener('click', function(){
//     // console.log('Name updated finally')
//     const nameInput= document.getElementById('input-name');
//     const name = nameInput.value;
//     // console.log(name)
//     // set name 
//     const namep= document.getElementById('name');
//     namep.innerText=name

// })

// document.getElementById('btnaddress').addEventListener('click', function(){
//     const headingaddress = document.getElementById('address');
//     headingaddress.innerText= " Natore"
// })


// document.getElementById('btnname').addEventListener('click',function(){
//     const inputName = document.getElementById('input');
//     const name=inputName.value;
//     const fullName=document.getElementById('fullName');
//     fullName.innerText='my name is : '+name;
// })



document.getElementById('btn-result').addEventListener('click', function(){
    const gradeElement = document.getElementById('grade');
    gradeElement.innerText= 'You got gpa 5';
})

document.getElementById('btn-loged-in').addEventListener('click',function(){
    const logInElement = document.getElementById('logedin-status');
    logInElement.innerText= 'Now User LogIn';
})



document.getElementById('btn-update').addEventListener('click', function(){
    const inputElement =document.getElementById('input-name');
    const name= inputElement.value;
    const nameField = document.getElementById('name');
     nameField.innerText=name;
})

document.getElementById('btn').addEventListener('click',function(){
  const resultInput= document.getElementById('result-input');
  const result =resultInput.value;  
  const resultField= document.getElementById('result');
resultField.innerText= result;
})