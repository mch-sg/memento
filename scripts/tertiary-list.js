// NEW LIST SCRIPT
// by Magnus Hvidtfeldt
// inspiration from Florin Pop


// music load
const ding2 = new Audio('assets/sounds/complete.mp3');
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
        TodoEl2.id = Math.floor(Math.random() * 100000);

        
        // var para = document.createElement('p');
        var spana2 = document.createElement('span');
        spana2.classList.add('spanCheck');

        var label2 = document.createElement('label');

        // var deldiv = document.createElement('div');
        var delcom2 = document.createElement('span');
        delcom2.classList.add('destroy');



        // drag and drop
        // *
        TodoEl2.classList.add('draggable');
        TodoEl2.draggable = true;

        if(todo2 && todo2.completed) {
            TodoEl2.classList.add('completed');
            spana2.classList.add('completed');
        }

        label2.innerText = todoText2;

        TodoEl2.addEventListener('click', () => { /* CHANGED FOR TESTING */
            if(document.body.classList.contains('light-theme')) {
                spana2.classList.add('spanLight');
            }

            TodoEl2.classList.toggle('completed');
            spana2.classList.toggle('completed');

            if (TodoEl2.classList.contains('completed') && !delcom2.classList.contains('nosound')) {
                ding2.play(); 
            }

            updateLS2();
        });



        delcom2.addEventListener('click', (e) => {
            delcom2.classList.add('nosound');
            e.preventDefault();
            TodoEl2.remove();

            updateLS2();
        });

        todoUL2.appendChild(TodoEl2);

        // TodoEl2.appendChild(spana2); // CHANGED FOR TESTING
        TodoEl2.appendChild(label2);
        TodoEl2.appendChild(delcom2);

        input2.value = '';
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
