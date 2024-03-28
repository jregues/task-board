// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem(".tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    taskCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Due Date: ${dueDate}</p>
    `;

    return taskCard;
}
// const newTaskCard = createTaskCard('Task Title', 'Task Description', '2022-12-31');

// const taskContainer = document.getElementById('task-container');
// taskContainer.appendChild(newTaskCard);


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const lists = document.createElement('ul')
    taskList.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        lists.appendChild(listItem);
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
