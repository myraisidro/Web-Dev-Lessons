// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[3]);

// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'red';
// items[2].textContent = 'hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName();
// let list = document.getElementsByTagName('li');
// console.log(list);
// console.log(list[0]);
// list[1].style.color = 'red';
// list[1].textContent = 'hello';

// Convert HTML Collection into array

// list = Array.from(list);
// list.reverse();

// list.forEach(function(lis, index) {
//     console.log(lis.className);
//     lis.textContent = `${index}: hey`;
// });

// list.forEach((lis, index) => {
//     console.log(lis.className);
//     lis.textContent = `${index}: hello`;
// });
// console.log(list);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach(function(item, index) {
//     item.textContent = `${index}: hello `;
// });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
// console.log(liEven);
// console.log(liOdd);

liOdd.forEach(function(odd, index) {
    odd.style.background = 'cyan';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'pink';
}



