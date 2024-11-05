// let car = {
//     // properties
//     color: 'white',
//     release: true,
//     model: 2024,
//     manufactrur: 'Twetta',
//     // methods

//     play: function (){
//         console.log(`${this.color}`);
//     }

// }

// console.log(car.color)
// console.log(car.play())

// seconnd way to declarre object

// let person = new Object({
//     fname: "Ghazi",
//     school: "City",
//     age: 20,

//     status: function (){
//         return ("Going");
//     }
// })
// console.log(person.status())

// empty object
// let school = {}
// let schoolTwo = new Object();
// school.sName = 'City'
// school.department = 15
// console.log(school)
// schoolTwo.cDeparment =  true
// console.log(schoolTwo)
// console.log(schoolTwo["cDeparment"]);

// how to make a copy of this object

// let person = new Object({
//     fname: "Ghazi",
//     school: "City",
//     age: 20,

//     status: function (){
//         return ("Going");
//     }
// })

// let abdullah = person;
// abdullah.fname = "Abdullah"
// console.log(abdullah.fname)

// properties in detail

let root = document.getElementById('root')

let person = {
    fname: "Ghazi",
    lName: "Malik",
    fullName: function (){
        return (`${this.fname} ${this.lName.toUpperCase()}`)
    },
    school: "City",
    age: 20,
    
    status: function () {
        return "Going";
    },
    
    car: {
        // properties
        color: "white",
        release: true,
        model: 2024,
        manufactrur: "Twetta",
        // methods
        
        play: function () {
            console.log(`${this.color}`);
        },
    },
};
// ading new properrties to object

person.city = "Isb";

// console.log(person)

// deleting property from object

// delete person.age;
delete person["age"];

// console.log(person.car.manufactrur);
console.log(person.fullName())

console.log(root)
// root.innerText = person.fname;

// displaying object 

// let hamza = Object.values(person);

// root.innerText=hamza

let hamza = JSON.stringify(person)

root.innerHTML=hamza
