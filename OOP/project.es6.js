// Book Constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Constructor
class UI {
    constructor() { }
    // Add Book to List
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
        list.appendChild(row);
    }
    // Show alert
    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add Class to div
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.container');
        // get form
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);
        // Timeout after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    // Delete Book
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    // Clear fields
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}





// Event Listener
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get Form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    
    const book = new Book(title, author, isbn); // Instantiate book

    const ui = new UI; // Instantiate UI

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book); // Add Book
        ui.clearFields(); // Clear Fields
        ui.showAlert('Book Added!', 'success'); //alert success
    }

    e.preventDefault();
});

// Event listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){
    // Instantiate UI
    const ui = new UI();
    // Delete book
    ui.deleteBook(e.target);

    ui.showAlert('Book Removed', 'success');
});