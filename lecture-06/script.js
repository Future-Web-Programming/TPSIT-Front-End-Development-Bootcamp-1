let root = document.getElementById('root');

function welcomeUser (username,rollNumber){
    return (`Welcome ${username} and Your Roll Number is ${rollNumber} `);
}

let welcome = welcomeUser("Waseem Malik", 29);
console.log(welcome)