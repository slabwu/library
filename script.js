const myLibrary = [];
const shelf = document.querySelector('.shelf');
const dialog = document.querySelector('dialog');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');





function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
    return read ? `${this.title} by ${this.author}, ${this.pages}, read` :
    `${this.title} by ${this.author}, ${this.pages}, not read yet` ;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayOnScreen(book) {
    const card = document.createElement('div');
    card.innerText = `${book.info()}`;
    card.classList.add("card");
    shelf.appendChild(card);
}

function addNewBook() {
    const book = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(book);
    displayOnScreen(book);
    dialog.close();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

function prepopulateBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    displayOnScreen(book);
}





prepopulateBook('cat', 'mr cat', 100, true);
prepopulateBook('dog', 'mr dog', 200, true);
prepopulateBook('cat', 'mr bird', 300, true);