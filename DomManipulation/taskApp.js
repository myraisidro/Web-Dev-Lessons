//  Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListeners();

// Load all event listener
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
    // add remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTask);
    // filter
    filter.addEventListener('keyup', filterTask);
}

// Add Task
function addTask(e){
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create Element 'li'
    const li = document.createElement('li');

    li.className = 'collection-item'; // Add Class
    li.appendChild(document.createTextNode(taskInput.value)); //create text node and append to li

    const link = document.createElement('a'); //create element for 'a'

    link.className = 'delete-item secondary-content'; //add class
    link.innerHTML = '<i class="far fa-trash-alt"></i>'; //add icon html
    
    li.appendChild(link); //append link to li
    document.querySelector('ul.collection').appendChild(li); //append li to ul


    e.preventDefault();
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}


    // const taskVal = document.getElementById('#task').value;
    // let tasksVal;

    // if (localStorage.getItem('Tasks') === null) {
    //     tasksVal = [];
    // } else {
    //     tasksVal = JSON.parse(localStorage.getItem('Tasks'));
    // }

    // tasks.push(taskVal);

    // localStorage.setItem('Tasks',JSON.stringify(tasksVal));
    // tasks.forEach(function(task){
    //     console.log(task);
    //     });