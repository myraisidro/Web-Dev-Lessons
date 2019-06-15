// FUNCTION DECLARATION

// function greet(firstName = 'John', lastName = 'Doe') {
//     if (typeof firstName === 'undefined') {
//         firstName = 'John';
//     }

//     if (typeof lastName === 'undefined') {
//         lastName = 'Doe';
//     }
    
//     console.log('hello');
//     // return 'Hello ' + firstName + ' ' + lastName;
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet());

// FUNCTION EXPRESSIONS

// const square = function(x = 3) {
//     return x * x;
// }
// console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFE'S

(function(){
    console.log('IIFE Ran ...');
})();

(function(name){
    console.log('Hello ' + name );
})('myra');

// Property Methods
const todo = {
    add: function () {
        console.log('Add todo ..');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function(){
    console.log('Delete todo');
};

// User define function
todo.add();
todo.edit(22);
todo.delete();