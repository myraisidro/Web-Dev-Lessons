// Sample of normal function without async await
// function myFunc(){
//     return 'Hello';
// }
// console.log(myFunc());

// async function myFunc(){
//     return 'Hello';
// }
// console.log(myFunc());

// async function myFunc(){
//     return 'Hello1';
// }

// myFunc().then(res => console.log(res));

// async function myFunc(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 2000);
//     });

//     const error = false;
//     if(!error){
//         const res = await promise; //wait until promise is resolved
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'))
//     }
    
// }

// myFunc().then(res => console.log(res))
// .catch(err => console.log(err));


async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await response.json();

    // only proceed once second promise is resolved
    return data;
}

getUsers()
.then(users => console.log(users))
.catch(err => console.log(err));


// CREATE POST
const user = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// async function createPost(){
//     // await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'POST',
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(user)
//     });

//     // Only proceed once its resolved
//     const data = await response.json();

//     // only proceed once second promise is resolved
//     return data;
// }

// createPost()
// .then(users => console.log(users))
// .catch(err => console.log(err));

// UPDATE POST
async function updatePost(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user)
    });

    // Only proceed once its resolved
    const data = await response.json();

    // only proceed once second promise is resolved
    return data;
}

updatePost()
.then(users => console.log(users))
.catch(err => console.log(err));


// DELETE POST
async function deletePost(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}
    });

    // Only proceed once its resolved
    const data = await response.json();

    // only proceed once second promise is resolved
    return data;
}

deletePost()
.then(() => console.log('Post Deleted'))
.catch(err => console.log(err));