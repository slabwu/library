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
    book.index = myLibrary.length;
    myLibrary.push(book);
}

function displayOnScreen(book) {
    const card = document.createElement('div');
    card.classList.add("card");

    const remove = document.createElement('button');
    remove.innerText = `x`;
    remove.classList.add(`${book.index}`);
    remove.setAttribute('onclick', 'deleteBook(this.className, this.parentElement)');
    card.appendChild(remove);

    const title = document.createElement('h1');
    title.innerText = `${book.title}`;
    card.appendChild(title);

    const author = document.createElement('h2');
    author.innerText = ` by ${book.author}`;
    card.appendChild(author);

    const pages = document.createElement('h3');
    pages.innerText = `${book.pages} pages`;
    card.appendChild(pages);

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

function deleteBook(bookIndex, card) {
    myLibrary.splice(bookIndex, 1);
    for (i = bookIndex; i < myLibrary.length; i++) {
        myLibrary[i].index--;
    }
    card.remove();
}




prepopulateBook('cat', 'mr cat', 100, true);
prepopulateBook('dog', 'mr dog', 200, true);
prepopulateBook('cat', 'mr bird', 300, true);
