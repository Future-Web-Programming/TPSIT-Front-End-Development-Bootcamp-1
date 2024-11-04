// creat element using js
let heading = document.createElement('h2');

// selecting element using tag name
// const root = document.getElementsByTagName('div')[0];

// selecting element using id 

// const root = document.getElementById('root');

// selectt element using class

// const root = document.getElementsByClassName('main')[0];

// select element using query selectorr

const root = document.querySelector('#root');

heading.innerText="Learning HTML";
root.appendChild(heading);


heading.style.background='#ccc';
heading.style.fontSize="2rem";
heading.style.color="#000";
heading.style.padding='10px';