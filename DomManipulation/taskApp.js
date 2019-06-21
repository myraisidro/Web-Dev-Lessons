//  Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTask); //DOM Load Event
    form.addEventListener('submit', addTask); // Add task event
    taskList.addEventListener('click', removeTask); // add remove task event
    clearBtn.addEventListener('click', clearTask); // Clear task event
    filter.addEventListener('keyup', filterTask); // filter
}

// Get task from LS
function getTask(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="far fa-trash-alt"></i>';
    
        li.appendChild(link);
        taskList.appendChild(li);
    });
}


// Add Task
function addTask(e){
    if (taskInput.value === '') {
        alert('Add a task');
    } else {

    const li = document.createElement('li');// Create Element 'li'

    li.className = 'collection-item'; // Add Class
    li.appendChild(document.createTextNode(taskInput.value)); //create text node and append to li

    const link = document.createElement('a'); //create element for 'a'

    link.className = 'delete-item secondary-content'; //add class
    link.innerHTML = '<i class="far fa-trash-alt"></i>'; //add icon html
    
    li.appendChild(link); //append link to li
    document.querySelector('ul.collection').appendChild(li); //append li to ul

    //store in ls
    storeTaskInLocalStorage(taskInput.value);

    }
    e.preventDefault();
}

function storeTaskInLocalStorage(){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(taskInput.value);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement); //remove from LS
        }
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task
function clearTask(e){
    if(confirm('Are you sure?')){
        taskList.innerHTML = '';
        clearTasksFromLocalStorage();
    }
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// filter task
function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}