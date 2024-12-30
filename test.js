const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();

    if (text === "") {
        alert('Please enter a task');
        return;
    }

    //new list item
    const item = document.createElement('li');
    item.className = 'todo-item';

    //create task span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    //create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(item);
    });

    // Add task span and delete button to the list item
    item.appendChild(taskSpan);
    item.appendChild(deleteBtn);

    //add item to list
    todoList.appendChild(item);

    //clear the input 
    todoInput.value = '';
});
