//  set local storage item
// localStorage.setItem('name', 'John Doe');
// localStorage.setItem('age', '30');

// Set session storage item
// sessionStorage.setItem('name', 'John Doe');

// // Remove from Storage
// localStorage.removeItem('name');

// // Get Item
// const age = localStorage.getItem('age');

// // Clear Local Storage
// localStorage.clear();

// // alert(age);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    // console.log(task);

    let tasks;

    if (localStorage.getItem('Tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('Tasks'));
    }

    tasks.push(task);

    localStorage.setItem('Tasks',JSON.stringify(tasks));

    e.preventDefault();


    tasks.forEach(function(task){
    console.log(task);
    });
});
