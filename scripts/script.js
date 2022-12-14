//  GET TODAYS DATE

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

var newlist1 = document.querySelector('#newli');
var newlist2 = document.querySelector('#newli2');

newlist1.addEventListener("click", function onclick(event) {
    newbox();
});

newlist2.addEventListener("click", function onclick(event) {
    newbox1();
});



// MAKE CLEAR CRAWLABLE

// var c1 = document.querySelector('#clear1');
// var c2 = document.querySelector('#clear2');
// var c3 = document.querySelector('#clear3');

// c1.addEventListener("click", function onclick(event) {
//     confirmation();
// });

// c2.addEventListener("click", function onclick(event) {
//     confirmit()
// });

// c3.addEventListener("click", function onclick(event) {
//     confirmit2()
// });

