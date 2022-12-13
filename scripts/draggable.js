const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.todos');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            container.appendChild(draggable);
            updateLS(); 
            updateLS1(); 
            updateLS2();
        } else {
            container.insertBefore(draggable, afterElement);
            updateLS(); 
            updateLS1(); 
            updateLS2();
        }
    });
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
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