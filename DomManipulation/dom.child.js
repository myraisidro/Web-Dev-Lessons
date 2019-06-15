let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;
val = list.childNodes;
val = list.childNodes[9];
val = list.childNodes[9].nodeName;

// Get children of element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'hello';

// Children of children
list.children[3].children[0].id = 'test-link';

val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);