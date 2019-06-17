// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child Element
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTE
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');

val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com.ph'); //first parameter (papalitan), 2nd param (ipapalit)
link.setAttribute('title', 'Google');

console.log(link);