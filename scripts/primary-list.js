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
        let abc = document.getElementsByClassName('primlist');
        TodoEl.classList.add('primlist');
        

        // drag and drop
        // *
        TodoEl.classList.add('draggable');
        TodoEl.draggable = true;
        

        // editable content
        // *
        // TodoEl.setAttribute("contentEditable", true);
        if(TodoEl.classList.contains('toedit')) {
            TodoEl.setAttribute("contentEditable", true);
        }


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
let cleared = 0;

function clearthis() {
    cleared = 1;
    console.log('clear');
    // localStorage.clear();
    // todoUL.remove();
    todoUL.innerHTML = '';
}

function confirmation() {
    var returcofir = confirm("Are you sure you want to delete all your todos in this list?");

    if (returcofir == true) {
        clearthis();
    }
}


// primlist contenteditable
// *
// *

var list = document.querySelector('li');
var plist = document.querySelector('.primlist');
var plist2 = document.getElementsByClassName('primlist')[0];

// If disabled, save text
if(!list.contentEditable === 'false') {
    localStorage.setItem('content', plist2.innerHTML);
}




// primlist drag and drop
// *
// *

let dragged;
let id;
let index;
let indexDrop;
let lists;

document.addEventListener("dragstart", ({target}) => {
      dragged = target;
      id = target.id;
      lists = target.parentNode.children;
      for(let i = 0; i < lists.length; i += 1) {
      	if(lists[i] === dragged){
          index = i;
        }
      }
});

document.addEventListener("dragover", (event) => {
      event.preventDefault();
});

document.addEventListener("drop", ({target}) => {
   if(target.className == "dropzone" && target.id !== id) {
       dragged.remove( dragged );
      for(let i = 0; i < lists.length; i += 1) {
      	if(lists[i] === target){
          indexDrop = i;
        }
      }
      console.log(index, indexDrop);
      if(index > indexDrop) {
      	target.before( dragged );
      } else {
       target.after( dragged );
      }
    }
});



// edit button
// *

// function editthis() {
//     let aa = document.getElementsByClassName('todos')[0];
//     let editme = document.createElement('img'); 
    
//     for (var i = 0; i < abc.length; i++) {
//         abc[i].classList.add('toedit');
//     }

//     editme.classList.add('dropzone');


//     aa.appendChild(editme);
// }
