// Dom Events 
const headaing = document.getElementsByClassName('heading')[[0]];
const root = document.getElementById('main');
const btn = document.getElementById('btn')
// function text(){
//     headaing.innerText='Changed Dom Text';
//     headaing.setAttribute('class', 'main-heading');
//     main.setAttribute('id', 'main-heading');
// btn.style.background = "crimson";
// btn.style.color = "#fff";
// btn.style.padding = "10px 20px";
// }
// btn.onclick = text;


// on load and unload events 


function load(){
    headaing.innerText = "Changed Dom Text";
    headaing.setAttribute('class', 'main-heading');
    main.setAttribute('id', 'main-heading');
}

