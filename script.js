const myLibrary = [];
const shelf = document.querySelector('.shelf');
const dialog = document.querySelector('dialog');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const colour = document.getElementById('colour');





function Book(title, author, pages, read, colour) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.colour = colour;
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
    card.classList.add('card');
    card.style.backgroundColor = `${book.colour}`;

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
    const book = new Book(title.value, author.value, pages.value, read.checked, colour.value);
    addBookToLibrary(book);
    displayOnScreen(book);
    dialog.close();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    colour.value = '#ffffff';
}

function prepopulateBook(title, author, pages, read, colour) {
    const book = new Book(title, author, pages, read, colour);
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




prepopulateBook('Brave New World', 'Aldous Huxley', 311, true, '#1981ff');
prepopulateBook('Animal Farm', 'George Orwell', 112, true, '#ff195a');
prepopulateBook('Fahrenheit 451', 'Ray Bradbury', 249, true, '#ffb71c');
