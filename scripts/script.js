//  GET TODAYS DATE
// *
// *

const date = new Date();
let day = date.getDate();
let year = date.getFullYear(); 
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const days = ["sun.", "mon.", "tue.", "wed.", "thu.", "fri.", "sat."];

const d = new Date();
let month = months[d.getMonth()];
let daysa = days[d.getDay()];
console.log(d);

let currentDate = `${daysa} ${month} ${day}, ${year}`; // Load the name
document.getElementById("date").innerHTML = currentDate; // input the name




// NEWLI MAKE A CRAWLABLE
// *
// *

var newlist1 = document.querySelector('#newli');
var newlist2 = document.querySelector('#newli2');

newlist1.addEventListener("click", function onclick(event) {
    newbox();
});

newlist2.addEventListener("click", function onclick(event) {
    newbox1();
});





// toggle light mode
// *
// *

var td = document.querySelector('#toggleLight');

td.addEventListener("click", function onclick(event) {
    td.style.transition = "0.5s";
    light();
});


// light mode
function light() {
    const tee = document.querySelector('i');
    tee.style.transition = "0.5s";
    tee.classList.toggle('bi-moon');

    

    var element = document.body;
    element.classList.toggle("light-theme");


    // var
    var theme;

    if(element.classList.contains("light-theme")) {
        theme = "light";
    } else {
        theme = "dark";
    }

    // save localstorage
    localStorage.setItem("theme", JSON.stringify(theme));

}


// check localstorage for theme
let getTheme = JSON.parse(localStorage.getItem("theme"));
console.log(getTheme);

if(getTheme === "light") {
    // document.body.classList = "light-theme";
    light();
}


// If user prefers light mode in os settings,
// it will automatically change to light mode
const lightModePreference = window.matchMedia("(prefers-color-scheme: light)");

// specify event-type as first argument
lightModePreference.addEventListener("change", e => e.matches && light());







// modal toggle
// *
// *

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}