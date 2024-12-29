const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();

    if (text === "") {
        alert('Please enter a task');
        return;
    }

    // Create a new list item
    const item = document.createElement('li');
    item.className = 'todo-item';

    // Create task span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(item);
    });

    // Add task span and delete button to the list item
    item.appendChild(taskSpan);
    item.appendChild(deleteBtn);

    // Add the list item to the todo list
    todoList.appendChild(item);

    // Clear the input field
    todoInput.value = '';
});
