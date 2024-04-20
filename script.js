const myLibrary = [];
const shelf = document.querySelector('.shelf');
const dialog = document.querySelector('dialog');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const colour = document.getElementById('colour');
const submit = document.querySelector('.submit');
const form = document.querySelector('form');
const inputs = document.querySelectorAll(".check");





inputs.forEach((input) => {
    const error = document.createElement('p');
    error.classList.add('error');
    input.after(error);
});

inputs.forEach((input) => input.addEventListener('blur', (e) => {
    if (e.target.checkValidity() && e.target.value != "") {
        e.target.nextElementSibling.textContent = "";
        input.classList.remove('error');
    }
}));

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
    card.style.color = `${invertColour(book.colour)}`;

    const remove = document.createElement('button');
    remove.innerText = `×`;
    remove.classList.add(`${book.index}`);
    remove.style.color = `${invertColour(book.colour)}`;
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

function invertColour(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000'
        : '#FFFFFF';
}

function checkForm() {
    if (form.checkValidity()) {
        addNewBook();
    } else {
        inputs.forEach((input) => {
            if (input.value == "") {
                input.nextElementSibling.textContent = "This field is required";
                input.classList.add('error');
            }
        });
    }
};




prepopulateBook('Brave New World', 'Aldous Huxley', 311, true, '#1981ff');
prepopulateBook('Animal Farm', 'George Orwell', 112, true, '#ffb71c');
prepopulateBook('Fahrenheit 451', 'Ray Bradbury', 249, true, '#ff195a');
