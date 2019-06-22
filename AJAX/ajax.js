// document.getElementById('button').addEventListener('click', function(){});

document.getElementById('button').addEventListener('click', loadData);
function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open Method or Property of the Object (XMLHttpRequest)
    xhr.open('GET','data.txt', true);   // Param: HTTP Verb, Data, Boolean asynchronus

    xhr.onload = function(){ //onload is a property of XHR Object
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h6> ${this.responseText} </h6>`;
        }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function (){
        console.log('Request error ...');
    }

    xhr.send(); //method inisde the object of xhr

    // READY STATE VALUE
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "FORBIDDEN"
    // 404: "NOT FOUND"
}