// Global variables
const myLibrary = [];

// DOM elements
const container = document.querySelector(".container");

// Constructors
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

// Methods
function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const divTitle = document.createElement("div");
    const divAuthor = document.createElement("div");
    const divPages = document.createElement("div");
    const divRead = document.createElement("div");

    divTitle.textContent = book.title;
    divAuthor.textContent = book.author;
    divPages.textContent = book.pages;
    divRead.textContent = book.read;

    divCard.appendChild(divTitle);
    divCard.appendChild(divAuthor);
    divCard.appendChild(divPages);
    divCard.appendChild(divRead);

    container.appendChild(divCard);
  });
}

//Programm start
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const book2 = new Book("Harry Potter", "J.K. Rowling", 471, "not read yet");
myLibrary.push(book1);
myLibrary.push(book2);

displayBooks();
