const root = document.querySelector('#root');

// root.innerText = "<h2>I am from InnerText</h2>"
// root.innerHTML = "<h1>I am from Inner HTML Property</h1>"

// root.innerText = "I am from InnerText"

// set attribute
root.setAttribute('class','main')

// remove child element 
// let heading = document.querySelector('h2')

// root.removeChild(heading)

// console.log(document.baseURI);
// console.log(document.title);

// finding html elments by css selector

let main = document.querySelectorAll('.main');
console.log(main)

// forrm selection

let form = document.forms["contactForm"];
console.log(form)