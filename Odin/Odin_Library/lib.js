// refactoring code for library project
// using class instead of objects
const myLibrary = [];
const bookForm = document.querySelector('#bookForm');
const submitBtn = document.querySelector("#submit-btn");
const outputContainer = document.querySelector('#output');
const modalForm = document.querySelector('#form-modal');

function Book(title, author, pages){
    // this is the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = ()=>{return `${this.title} by ${this.author}, ${this.pages} pages. ${(this.read ? "Read" : "Not Read.")}`}
}

// function to output books into the dom library from array
function addBookToLibrary(){
    // erase content to repopulate new content
    outputContainer.innerHTML = '';

    // loop through library array and output each book into cards
    for(let i = 0; i < myLibrary.length; i++){
        let cardHTML = createBookCard(myLibrary[i], i);
        outputContainer.innerHTML += cardHTML;
    }

    // call the btn event listeners here 
    addButtonListeners();
}

// function to create html book cards
function createBookCard(book, i) {
    return `
      <div class="col h-300">
        <div class="card">
            <div class="card-body h-100 d-flex flex-column justify-content-start gap-3 align-items-center">

                <p class="card-text m-0">${book.author}</p>
                <h4 class="card-title mb-3 mt-3">${book.title}</h4>
            </div>
            <div class="card-footer d-flex w-100 justify-content-between ">
                <p class="card-text small">${book.pages} Pages</p>
                <button type="button" id="deleteBtn${i}" class="delete-btn btn btn-danger p-1">Delete</button>
            </div>
        </div>
      </div>
    `;
}

// Delete book function
function deleteBook(index) {
    myLibrary.splice(index, 1);
    addBookToLibrary(); // Refresh the display after deletion
}

function addButtonListeners(){
    // book button event listener to add book to library
    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        // Get form values
        let author = document.getElementById('author');
        let title = document.getElementById('title');
        let pages = document.getElementById('pages');

        // form validation; if input values are empty
        if(author.value != "" && title.value != "0" && pages.value != "0"){
            myLibrary.push(new Book(`${title.value}`, `${author.value}`, pages.value));
            addBookToLibrary();

            // clear the input fields
            bookForm.reset();
        }
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', ()=>{
            deleteBook(i);
        });
    }
}

// adding temp books 
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295));
myLibrary.push(new Book("The Lion, The Witch, and the Wardrobe", "C.S. Lewis", 208));
myLibrary.push(new Book("Harry Potter and the Deathly Hallows", "J.K. Rowling", 607));

// initialize the functions 
addBookToLibrary();