// Library ES6

class EasyHTTP{
    // Make an HTTP Get Request
    get(url){
        return new Promise((resolve, reject) =>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make an HTTP Post Request
    post(url, data){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    put(url, data){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(() => resolve('Post Deleted'))
            .catch(err => reject(err));
        })
    }

}