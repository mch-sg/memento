let draggables = document.querySelectorAll('.draggable');
let containers = document.querySelectorAll('.todos');



draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
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



// if(TodoEl.classList.contains('primlist') && TodoEl.classList.contains('seclist')) {
//     TodoEl.classList.remove('primlist');
// }