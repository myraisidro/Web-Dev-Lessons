const task = document.querySelector('#add-task');

task.addEventListener("click", function(){
    
    const li = document.createElement('li');

    // Add Class
    li.className = 'collection-item';

    // Add id
    li.id = 'new-item';

    // Add Attribute
    li.setAttribute('title', 'New Item');

    // Create text node and append
    li.appendChild(document.createTextNode(`${$('#task').val()}`));

    // Create new link element
    const link = document.createElement('a');

    // Add Classes
    link.className = 'delete-item secondary-content';

    // Add Icon
    link.innerHTML = '<i class="far fa-trash-alt"></i>';

    // Append link into li
    li.appendChild(link);

    document.querySelector('ul.collection').appendChild(li);
    
    taskInput.value='';
});




