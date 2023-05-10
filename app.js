// make a person constructor with name and age parameters for object
// object method: sayHi()
// function to create person card on create click and add to container
// array with random people imgs to add to card with math.random
// display object function return in card

// DOM Elements
const nameInput = document.querySelector("#username-input");
const ageInput = document.querySelector("#age-input");
const createBtn = document.querySelector("#save-btn");
const clearBtn = document.querySelector("#clear-btn");
const userCard = document.querySelector("#user-card");
// CARD ELEMENTS
const userImg = document.querySelector("#user-img");
const userName = document.querySelector("#user-name");
const userGreet = document.querySelector("#user-greet");

//IMGS ARRAY
const femaleUsers = [
    "img/img1-girl.jpeg",
    "img/img3-girl.jpeg",
    "img/img5-girl.jpeg",
    "img/img8-girl.jpeg",
    "img/img10-girl.jpeg"
];
const maleUsers = [
    "img/img2-man.jpeg",
    "img/img4-man.jpeg",
    "img/img6-man.jpeg",
    "img/img7-man.jpeg",
    "img/img9-man.jpeg"
]

//Constructor
function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        return `Hi, my name is ${this.name} and I'm ${this.age} ${this.age === 1 ? "year" : "years"} old`;
    }
}

// GET RANDOM MALE IMG FUNCTION
function getRandomMale(){
    const randomMale = Math.floor(Math.random() * maleUsers.length);
    const maleSource = maleUsers[randomMale];
    userImg.src = maleSource;
}

// GET RANDOM FEMALE IMG FUNCTION
function getRandomFemale(){
    const randomFemale = Math.floor(Math.random() * femaleUsers.length);
    const femaleSource = femaleUsers[randomFemale];
    userImg.src = femaleSource;
}

function createPerson(){
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    const name = nameInput.value;
    const age = +(ageInput.value);
    if(genderRadio.value === "male"){
        getRandomMale();
    }else{
        getRandomFemale();
    }
    let person = new Person(name,age);
    userName.textContent = name;
    userGreet.textContent = person.sayHi();
}

function clearInputs(){
    nameInput.value = "";
    ageInput.value = "";
    const radios = document.querySelectorAll('input[name="gender"]');
    radios.forEach((radio) => {
    radio.checked = false;
  });
}

createBtn.addEventListener("click", createPerson);
clearBtn.addEventListener("click", clearInputs);