// CALLBACK FUNCTION

const posts = [
    {title: 'Post One', body: 'This is post one'}, 
    {title: 'Post Two', body: 'This is post two'}
];

// ASYNCHRONUS
// function createPost(post) {
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `
//             <li> ${post.title} </li>
            
//             `;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();


function createPost(post, callBack) {
    setTimeout(function(){
        posts.push(post);
        callBack();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
