// Global variables
const myLibrary = [];

// DOM elements
const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector("dialog + button");
const closeBtn = document.querySelector("dialog #closeBtn");
const confirmBtn = document.querySelector("dialog #confirmBtn");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");

// Constructors
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.displayed = false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

// Methods
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    if (book.displayed) return;

    book.displayed = true;
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

function resetInputFields() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.value = "";
}

// Event listeners
newBookBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
confirmBtn.addEventListener("click", () => {
  addBookToLibrary(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.value
  );
  displayBooks();
  resetInputFields();
  dialog.close();
});

//Programm start
// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
// const book2 = new Book("Harry Potter", "J.K. Rowling", 471, "not read yet");
// const book3 = new Book("Harry Potter", "J.K. Rowling", 471, "not read yet");
// const book4 = new Book("Harry Potter", "J.K. Rowling", 471, "not read yet");
// const book5 = new Book("Harry Potter", "J.K. Rowling", 471, "not read yet");
// const book6 = new Book("Harry Potter", "J.K. Rowling", 471, "not read yet");
// const book7 = new Book("Harry Potter", "J.K. Rowling", 471, "not read yet");
// myLibrary.push(book1);
// myLibrary.push(book2);
// myLibrary.push(book3);
// myLibrary.push(book4);
// myLibrary.push(book5);
// myLibrary.push(book6);
// myLibrary.push(book7);

displayBooks();
