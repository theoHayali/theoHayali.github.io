let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
function yes(){
   x = Math.floor(Math.random() * 10);
   y = Math.floor(Math.random() * 10);
   let question = `What is ${x} times ${y}`
   let q = document.querySelector('.question').innerHTML = question
   document.getElementById('answer').value = "";


 let result = document.querySelector('.result').innerHTML = ""
 let message = document.querySelector('.message').innerHTML = ""
 let buttonYes = document.querySelector('.buttonYes').innerHTML = ""
 let buttonNo = document.querySelector('.buttonNo').innerHTML = ""

}
function answer(){
   let answer = document.querySelector('#answer').value
   if((x * y) === parseInt(answer)){



    let result = document.querySelector('.result').innerHTML = "<p class='messsage'>Very Good</p>"
    let message = document.querySelector('.message').innerHTML = "<p class='messsage'>Do You Want to Play Again?</p>"
    let buttonYes = document.querySelector('.buttonYes').innerHTML = "<button class='button' onClick='yes()'>YES</button>"
    let buttonNo = document.querySelector('.buttonNo').innerHTML = "<button class='button'  onClick='no()'>NO</button>"
   }else{
    let result = document.querySelector('.result').innerHTML = "<p class='messsage'>No. Please try again</p>"
    document.querySelector('.result').innerHTML = "<p class='messsage'>No. Please try again</p>"

   }


}
function no(){
   let message = document.querySelector('.message').innerHTML = "<p class='messsage'>Thanks for playing, see you next time!</p>"
   let result = document.querySelector('.result').innerHTML = ""

   let buttonYes = document.querySelector('.buttonYes').innerHTML = ""
   let buttonNo = document.querySelector('.buttonNo').innerHTML = ""
}


document.addEventListener("DOMContentLoaded", function(){
  let question = `What is ${x} times ${y}`
    let q = document.querySelector('.question').innerHTML = question

});
