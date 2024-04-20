const myLibrary = [];

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

const cat = new Book('cat', 'mr cat', 100, true);
const dog = new Book('dog', 'mr dog', 200, true);
const bird = new Book('cat', 'mr bird', 300, true);