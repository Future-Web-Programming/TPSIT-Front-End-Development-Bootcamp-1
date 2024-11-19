// oninput event
// const userName = document.querySelector('#userName');
// const str = "SDF"
// str.toUpperCase
// function upperCase(){
    //     userName.value =userName.value.toUpperCase();
    //     console.log(userName.value);
    
    // }
    
    // onchangeEvvent
// const userName= document.querySelector('#userName');

// function converStrToUpperCase(){
    //     userName.value = userName.value.toUpperCase()
    //     console.log(userName.value)
    // }
    
    // mouseover 
// const userInput = document.querySelector('#btn');
// function changeCase(){
//     userInput.innerText = "Changed"
//     console.log(userInput.innerText);  
//     userInput.style.background="orange";;  
//     userInput.style.color="#fff";  
// }

// this keyword understanndinng

// function welcome(element){
//     element.innerText = "Changed"
//     console.log(element.innerText);
    
// }

// addevent listner

const btn = document.getElementById('btn')
const userInput = document.getElementById("userInput");
function changeCase(){
   userInput.value = userInput.value.toUpperCase()
}

btn.addEventListener('click', changeCase);