// const myLibrary = [];
const bookForm = document.querySelector('#bookForm');
const submitBtn = document.querySelector("#submit-btn");
const libraryContainer = document.getElementById('library-container');
const modalForm = document.querySelector('#form-modal');

// class for the book cards to be outputted in the container
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// Library class 
// can have multiple "library containers"
class Library {
    constructor() {
        this.books = [];
    }

    // add method to push a new book object into the 'books' array
    addBook(title, author, pages) {
        const newBook = new Book(title, author, pages);
        this.books.push(newBook);
    }

    // remove method that filters out the selected book card
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    // method to output the book cards
    renderLibrary() {
        libraryContainer.innerHTML = '';

        this.books.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('book-card');
            card.innerHTML = `
                <p>Author: ${book.author}</p>
                <h3>${book.title}</h3>
                <p>Pages: ${book.pages}</p>
                <button class="delete-btn" data-title="${book.title}">Delete</button>
            `;
            libraryContainer.appendChild(card);
        });

        // Add event listener for delete button
        libraryContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const title = e.target.dataset.title;
                this.removeBook(title);
                this.renderLibrary();
            }
        });
    }
}

const myLibrary = new Library();

// adding temporary books
myLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);
myLibrary.addBook('To Kill a Mockingbird', 'Harper Lee', 281);
myLibrary.addBook('1984', 'George Orwell', 328);

// Render the library
myLibrary.renderLibrary();

// Add event listener for adding a new book
submitBtn.addEventListener('click', (e) => {
    // Code to open a form to add a new book, then call myLibrary.addBook() with the form data
    e.preventDefault();
    // Get form values
    let author = document.getElementById('author');
    let title = document.getElementById('title');
    let pages = document.getElementById('pages');

    // form validation; if input values are empty
    if(author.value != "" && title.value != "0" && pages.value != "0"){
        myLibrary.addBook(title.value, author.value, pages.value);
        myLibrary.renderLibrary();
        // clears the input fields
        bookForm.reset();
    }
});