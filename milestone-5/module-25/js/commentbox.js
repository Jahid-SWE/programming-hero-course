/*
//  step-1   set a event handler here
document.getElementById('btn-post-comment').addEventListener('click', function(){
    // console.log('I clicked post comment button')

    // step-2 input fild hoite valu nie asbe
    const commentTextBox = document.getElementById('comment-text-box');
    // console.log(commentTextBox);
    const newComment = commentTextBox.value;
    // console.log(newComment);

    // step-3 ai comment je nilam akon kothai boshabo
    const commentContainer=document.getElementById('comment-container');
    console.log(commentContainer);

    // step-4 ekhon akta container modhe paragraph tag create korte hobe 
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText= newComment;
    
    // step-5 akon comment container  er modhe parrent node re modhe  child element or node ke add kore dite hobe
    commentContainer.appendChild(commentElement);

    // step-6 
    commentTextBox.value = '';
})
*/











document.getElementById('btn-post-comment').addEventListener('click',function(){
const commentTextBox= document.getElementById('comment-text-box');
const newComment=commentTextBox.value;
const commentContainer= document.getElementById('comment-container');
const commentElement = document.createElement('p');
commentElement.classList.add('comment');
commentElement.innerText= newComment;
commentContainer.appendChild(commentElement);
commentTextBox.value='';






})



























rjjjdk