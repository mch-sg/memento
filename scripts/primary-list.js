// SCRIPT FOR THE TODO APP
// by Magnus Hvidtfeldt
// inspiration from Florin Pop


// music load
var ding = new Audio('assets/complete.mp3');
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
        TodoEl.id = Math.floor(Math.random() * 100000);

        
        // var para = document.createElement('p');
        var spana = document.createElement('span');
        spana.classList.add('spanCheck');

        var label = document.createElement('label');
        label.classList.add('todo-text');

        // var deldiv = document.createElement('div');
        var delcom = document.createElement('span');
        delcom.classList.add('destroy');


        // drag and drop
        // *
        TodoEl.classList.add('draggable');
        TodoEl.draggable = true;
        

        // editable content
        // *
        // TodoEl.setAttribute("contentEditable", true);
        // if(TodoEl.classList.contains('toedit')) {
        //     TodoEl.setAttribute("contentEditable", true);
        // }


        if(todo && todo.completed) {
            TodoEl.classList.add('completed');
            spana.classList.add('completed');
        }

        // TodoEl.innerText = todoText;
        label.innerText = todoText;

        TodoEl.addEventListener('click', () => {   /* CHANGED ( TodoEl -> spana ) CHANGED FOR TESTING */
            if(document.body.classList.contains('light-theme')) {
                spana.classList.add('spanLight');
            }

            TodoEl.classList.toggle('completed');
            spana.classList.toggle('completed');

            if (TodoEl.classList.contains('completed') && !delcom.classList.contains('nosound')) {
                ding.play(); 
            }
            
            updateLS();
        });



        // delcom.addEventListener('contextmenu', (e) => {
        //     e.preventDefault();
        //     TodoEl.remove();

        //     updateLS();
        // });

        delcom.addEventListener('click', (e) => {
            delcom.classList.add('nosound');

            e.preventDefault();
            TodoEl.remove();

            updateLS();
        });


        todoUL.appendChild(TodoEl); // label

        // TodoEl.appendChild(spana); // CHANGED FOR TESTING (COMMENTING)
        TodoEl.appendChild(label);
        TodoEl.appendChild(delcom);
        
        input.value = '';

    }


    // drag and drop
    // *
    // *
    let draggables = document.querySelectorAll('.draggable');
    let containers = document.querySelectorAll('.todos');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setDragImage(new Image(), 0, 0);
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            let afterElement = getDragAfterElement(container, e.clientY);
            let draggable = document.querySelectorAll('.dragging');
            if (afterElement == null) {
                draggable.forEach(draggabl => {
                    container.appendChild(draggabl);
                    updateLS(); 
                    updateLS1(); 
                    updateLS2();
                })
            } else {
                draggable.forEach(draggabl => {
                    container.insertBefore(draggabl, afterElement);
                    updateLS(); 
                    updateLS1(); 
                    updateLS2();
                })
            }
        });
    })

    function getDragAfterElement(container, y) {
        let draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            let box = child.getBoundingClientRect();
            let offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }


    updateLS();
}


function updateLS() {
    let todosEl = document.querySelectorAll('.primlist');

    let todos = [];

    todosEl.forEach((TodoEl) => {
        todos.push({
            text: TodoEl.innerText,
            completed: TodoEl.classList.contains('completed'),
            id: TodoEl.id,
        });
    });
    
    localStorage.setItem('todos', JSON.stringify(todos));
}


// primlist contenteditable
// *
// *

// var list = document.querySelector('li');
// var plist = document.querySelector('.primlist');
// var plist2 = document.getElementsByClassName('primlist')[0];

// // If disabled, save text
// if(!list.contentEditable === 'false') {
//     localStorage.setItem('content', plist2.innerHTML);
// }




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


// read
let cleared = 0;

function clearthis() {
    cleared = 1;
    localStorage.removeItem('todos');
    todoUL.innerHTML = '';
    updateLS();
}

function confirmation() {
    var returcofir = confirm("Are you sure you want to delete all your todos in this list?");

    if (returcofir == true) {
        clearthis();
    }
}