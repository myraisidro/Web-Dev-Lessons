// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('Im a Column');
// });

// Event Delegation
const delItem = document.querySelector('.delete-item');

document.body.addEventListener('click', deleteItem);

// delItem.addEventListener('click', deleteItem);

function deleteItem(e){
    if (e.target.parentElement.claassName === 'delete-item secondary-content') {
        console.log('deleteeeeeee');
    } //check kung tama yung ma ddelete
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('Delete item');
        e.target.parentElement.parentElement.remove();
    }

}

