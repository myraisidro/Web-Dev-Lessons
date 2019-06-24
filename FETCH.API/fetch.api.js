document.getElementById('button1').addEventListener('click', () =>{
    fetch('test.txt')
    .then (res => {
         console.log(res);
         return res.text();
    })
    .then(data =>{
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
});


document.getElementById('button2').addEventListener('click', () =>{
    fetch('post.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach((post) =>{
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err =>console.log(err));
});

document.getElementById('button3').addEventListener('click', () =>{
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        let output = '';
        data.forEach((post) =>{
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
});

// Get local text file data



// Get local text file data
// function getText() {
//     fetch('test.txt')
//     .then(function(res){
//          console.log(res);
//          return res.text();
//     })
//     .then(function(data){
//         console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }

// function getJson(){
//     fetch('post.json')
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//         let output = '';
//         data.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }

// function getExternal(){
//     fetch('https://api.github.com/users')
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//         let output = '';
//         data.forEach(function(post) {
//             output += `<li>${user.login}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }