// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// New Text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title')

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(cardAction);