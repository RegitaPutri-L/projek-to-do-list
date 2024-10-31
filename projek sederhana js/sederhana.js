document.getElementById('todoText').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        CreateToDoItems();
    }
});

document.getElementById('AddUpdateClick').addEventListener('click', CreateToDoItems);

function CreateToDoItems() {
    const todoInput = document.getElementById('todoText');
    const todoText = todoInput.value;
    const alertMessage = document.getElementById('Alert');
    const listItems = document.getElementById('list-items');

    if (todoText.trim() === '') {
        alertMessage.innerHTML = 'Please enter a task!';
        alertMessage.style.color = 'red';
        return;
    }

    const li = document.createElement('li');
    
    // Membuat div untuk checkbox dan teks
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    // Membuat checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', function() {
        todoTextDiv.classList.toggle('completed');
    });

    // Membuat div untuk teks todo
    const todoTextDiv = document.createElement('div');
    todoTextDiv.className = 'todo-text';
    todoTextDiv.textContent = todoText;
    
    // Membuat div untuk kontrol (edit dan delete)
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'controls';

    // Membuat tombol edit
    const editButton = document.createElement('img');
    editButton.src = 'https://img.icons8.com/material-outlined/24/000000/edit.png';
    editButton.className = 'todo-controls';
    editButton.onclick = function() {
        todoInput.value = todoTextDiv.textContent;
        listItems.removeChild(li);
    };

    // Membuat tombol delete
    const deleteButton = document.createElement('img');
    deleteButton.src = 'https://img.icons8.com/material-outlined/24/000000/trash.png';
    deleteButton.className = 'todo-controls';
    deleteButton.onclick = function() {
        listItems.removeChild(li);
    };

    // Menggabungkan semua elemen
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextDiv);
    controlsDiv.appendChild(editButton);
    controlsDiv.appendChild(deleteButton);
    li.appendChild(todoItem);
    li.appendChild(controlsDiv);
    listItems.appendChild(li);

    // Reset input dan alert
    todoInput.value = '';
    alertMessage.innerHTML = 'Task added successfully!';
    alertMessage.style.color = 'green';

    setTimeout(() => {
        alertMessage.innerHTML = '';
    }, 2000);
}