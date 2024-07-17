document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const todoTextElement = document.createElement('span');
    todoTextElement.className = 'todo-text';
    todoTextElement.textContent = todoText;

    const todoActions = document.createElement('div');
    todoActions.className = 'todo-actions';

    const completeBtn = document.createElement('i');
    completeBtn.className = 'fas fa-check';
    completeBtn.addEventListener('click', () => {
        todoItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('i');
    deleteBtn.className = 'fas fa-trash';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoActions.appendChild(completeBtn);
    todoActions.appendChild(deleteBtn);

    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(todoActions);

    todoList.appendChild(todoItem);

    todoInput.value = '';
}


