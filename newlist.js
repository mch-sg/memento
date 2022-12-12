// NEW LIST SCRIPT
// by Magnus Hvidtfeldt
// inspiration from Florin Pop


// music load
const ding1 = new Audio('assets/myding2.wav');
ding1.volume = 0.3;

// todo load

let form1 = document.getElementById('form1');
let input1 = document.getElementById('input1'); // document.get
let todoUL1 = document.getElementById('todos1');

let todos1 = JSON.parse(localStorage.getItem('todos1'));

if (todos1) {
    todos1.forEach(todo1 => {
        addTodo1(todo1)
    });
}


form1.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo1();
}); 

function addTodo1(todo1) {
    let todoText1 = input1.value; 

    if(todo1) {
        todoText1 = todo1.text;
    }

    if (todoText1) { 
        let TodoEl1 = document.createElement('li'); 
        TodoEl1.classList.add('newlist');

        if(todo1 && todo1.completed) {
            TodoEl1.classList.add('completed');
        }

        TodoEl1.innerText = todoText1;

        TodoEl1.addEventListener('click', () => {
            TodoEl1.classList.toggle('completed');

            if (TodoEl1.classList.contains('completed')) {
                ding1.play(); 
            }

            updateLS1();
        });



        TodoEl1.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            TodoEl1.remove();

            updateLS1();
        });

        todoUL1.appendChild(TodoEl1);

        input1.value = '';
    }

    updateLS1();
}


function updateLS1() {
    let todosEl1 = document.querySelectorAll('.newlist');

    let todos1 = [];

    todosEl1.forEach((todoEl1) => {
        todos1.push({
            text: todoEl1.innerText,
            completed: todoEl1.classList.contains('completed'),
        });

        localStorage.setItem('todos1', JSON.stringify(todos1));
    });

}

// CLEAR

let cleared1 = 0;

function clearthis1() {
    cleared1 = 1;
    console.log('clear1');
    todoUL1.innerHTML = '';
}

function confirmit() {
    var returcofir = confirm("Are you sure you want to delete all your todos in this list?");

    if (returcofir == true) {
        clearthis1();
    }
}
