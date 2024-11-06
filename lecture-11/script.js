let main = document.getElementById('main');
let heading = document.createElement('h1');
let timer = document.createElement('p');
timer.textContent = Date();
main.appendChild(timer);
main.appendChild(heading)

// applying styles to elements
main.style.display='grid'
main.style.gridTemplateColumns ="1fr 1fr";
main.style.gridTemplateRows = "1fr 1fr";
main.style.justifyContent='center'
main.style.alignItems='center'
main.style.padding="60px 100px"
main.style.height='70vh'
heading.innerText="HTML DOM lecture 3"
heading.style.fontSize='4.6rem'
// setting attributes on Eleemtns
heading.setAttribute('class', 'heading')
heading.setAttribute('id', 'main-heading')
heading.setAttribute('name', 'main-heading')
heading.setAttribute('title', 'main-heading')

const img = document.createElement('img');
main.appendChild(img)

// setting attributes

img.setAttribute('class', 'main-img')
img.setAttribute("src", "product.jpg");
// img.setAttribute('width', '200px')
// img.setAttribute('height', '200px')

// styling image

img.style.width='20rem'
img.style.height='20rem'

