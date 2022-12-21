// NEW LIST SCRIPT
// by Magnus Hvidtfeldt
// inspiration from Florin Pop


// music load
const ding2 = new Audio('assets/complete.mp3');
ding2.volume = 0.3;

// todo load

let form2 = document.getElementById('form2');
let input2 = document.getElementById('input2'); // document.get
let todoUL2 = document.getElementById('todos2');

let todos2 = JSON.parse(localStorage.getItem('todos2'));

if (todos2) {
    todos2.forEach(todo2 => {
        addTodo2(todo2)
    });
}


form2.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo2();
}); 

function addTodo2(todo2) {
    let todoText2 = input2.value; 

    if(todo2) {
        todoText2 = todo2.text;
    }

    if (todoText2) { 
        let TodoEl2 = document.createElement('li'); 
        TodoEl2.classList.add('terlist');

        // drag and drop
        // *
        TodoEl2.classList.add('draggable');
        TodoEl2.draggable = true;

        if(todo2 && todo2.completed) {
            TodoEl2.classList.add('completed');
        }

        TodoEl2.innerText = todoText2;

        TodoEl2.addEventListener('click', () => {
            TodoEl2.classList.toggle('completed');

            if (TodoEl2.classList.contains('completed')) {
                ding2.play(); 
            }

            updateLS2();
        });



        TodoEl2.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            TodoEl2.remove();

            updateLS2();
        });

        todoUL2.appendChild(TodoEl2);

        input2.value = '';
    }

    updateLS2();
}


function updateLS2() {
    let todosEl2 = document.querySelectorAll('.terlist');

    let todos2 = [];

    todosEl2.forEach((todoEl2) => {
        todos2.push({
            text: todoEl2.innerText,
            completed: todoEl2.classList.contains('completed'),
        });
    });
    
    localStorage.setItem('todos2', JSON.stringify(todos2));
}

// CLEAR

let cleared2 = 0;

function clearthis2() {
    cleared2 = 1;
    console.log('clear2');
    localStorage.removeItem('todos2');
    todoUL2.innerHTML = '';
    updateLS2();
}

function confirmit2() {
    var returcofir = confirm("Are you sure you want to delete all your todos in this list?");

    if (returcofir == true) {
        clearthis2();
    }
}
