// GET ELEMENT BY ID - getElementById 
// get elements of HTML Tags - document.getElementById('class');

console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').id); //get ID of element
console.log(document.getElementById('task-title').className); //get class of element

const taskTitle = document.getElementById('task-title');

// Change Styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.fontSize = '20px';
// taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task';
taskTitle.innerHTML = '<span class="grey-text text-darken-4"> hello </span>'; //add another element tag inside the parent tag
// taskTitle.outerHTML = '<span class="red-text"> hello </span>'; //change the parent tag

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'hello';
document.querySelector('li:nth-child(even)').textContent = 'hello world';
document.querySelector('li:nth-child(even)').style.background = 'purple';