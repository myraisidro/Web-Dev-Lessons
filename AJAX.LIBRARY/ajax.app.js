const http = new easyHTTP;

//Get Posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
});

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custome post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, posts){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

// UPDATE POST
http.put('https://jsonplaceholder.typicode.com/posts/1'), data, function(err, posts){
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
}

// DELETE REQUEST
http.delete('https://jsonplaceholder.typicode.com/posts/1'), data, function(err, response){
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
}