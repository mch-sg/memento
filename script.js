// SCRIPT FOR THE TODO APP
// by Magnus Hvidtfeldt
// inspiration from Florin Pop


// music load
const ding = new Audio('assets/myding2.wav');
ding.volume = 0.3;

// todo load

let form = document.getElementsByClassName('form')[0];
let input = document.getElementsByClassName('input')[0]; // document.get
let todoUL = document.getElementsByClassName('todos')[0];

let todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => {
        addTodo(todo)
    });
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
}); 

function addTodo(todo) {
    let todoText = input.value; 

    if(todo) {
        todoText = todo.text;
    }

    if (todoText) {
        let TodoEl = document.createElement('li'); 
        TodoEl.classList.add('primlist');

        if(todo && todo.completed) {
            TodoEl.classList.add('completed');
        }

        TodoEl.innerText = todoText;

        TodoEl.addEventListener('click', () => {
            TodoEl.classList.toggle('completed');

            if (TodoEl.classList.contains('completed')) {
                ding.play(); 
            }

            updateLS();
        });



        TodoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            TodoEl.remove();

            updateLS();
        });

        todoUL.appendChild(TodoEl);

        input.value = '';
    }

    updateLS();
}


function updateLS() {
    let todosEl = document.querySelectorAll('.primlist');

    let todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed'),
        });

        localStorage.setItem('todos', JSON.stringify(todos));
    });

}



// FUNCTION FOR DRAG AND DROP (NOT IN USE)

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

let cleared = 0;

function clearthis() {
    cleared = 1;
    console.log('clear');
    // localStorage.clear();
    // todoUL.remove();
    todoUL.innerHTML = '';
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

function confirmation() {
    var returcofir = confirm("Are you sure you want to delete all your todos?");

    if (returcofir == true) {
        clearthis();
    }
}

