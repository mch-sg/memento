



// FUNCTION FOR DRAG AND DROP (NOT IN USE)

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}




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


// U SURE?

// if (!localStorage.hideAlert) {
//     $(function() {
//       $("#dialog").dialog();
//     });
//   } else {
//     $("#dialog").css("display", "none");
//   }
//   $(".yes").on("click", function() {
//     $("#dialog").dialog("close");
//   });
//   $(".no").on("click", function() {
//     localStorage.setItem('hideAlert', true);
//     $("#dialog").dialog("close");
// });

