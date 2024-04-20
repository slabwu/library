const myLibrary = [];
const shelf = document.querySelector('.shelf');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
    return read ? `${this.title} by ${this.author}, ${this.pages}, read` :
    `${this.title} by ${this.author}, ${this.pages}, not read yet` ;
    }
    addBookToLibrary(this);
    displayOnScreen(this);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayOnScreen(book) {
    const newDiv = document.createElement('div');
    console.log(shelf);
    console.log(newDiv);
    newDiv.innerText = `${book.info()}`;
    console.log(newDiv);
    shelf.appendChild(newDiv);
}

const cat = new Book('cat', 'mr cat', 100, true);
const dog = new Book('dog', 'mr dog', 200, true);
const bird = new Book('cat', 'mr bird', 300, true);