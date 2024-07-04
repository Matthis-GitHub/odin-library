// Global variables
const myLibrary = [];

// DOM elements
const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book");
const closeBtn = document.querySelector("dialog #closeBtn");
const confirmBtn = document.querySelector("dialog #confirmBtn");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const btnRead = document.querySelector("#read");

// Constructors
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.displayed = false;
}

// Prototype functions
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Functions
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
    divRead.textContent = `Already read: ${book.read}`;

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", () => {
      container.removeChild(divCard);
      myLibrary.splice(myLibrary.indexOf(book), 1);
    });

    const btnToggleRead = document.createElement("button");
    btnToggleRead.textContent = "Change read status";
    btnToggleRead.addEventListener("click", () => {
      book.toggleRead();
      divRead.textContent = `Already read: ${book.read}`;
    });

    divCard.appendChild(divTitle);
    divCard.appendChild(divAuthor);
    divCard.appendChild(divPages);
    divCard.appendChild(divRead);

    divCard.appendChild(btnDelete);
    divCard.appendChild(btnToggleRead);

    container.appendChild(divCard);
  });
}

function resetFormFields() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  btnRead.textContent = "Unread";
  if (btnRead.classList.contains("read")) {
    btnRead.classList.remove("read");
  }
}

// Event listeners
newBookBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
confirmBtn.addEventListener("click", () => {
  addBookToLibrary(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    btnRead.textContent === "Read" ? true : false
  );
  displayBooks();
  resetFormFields();
  dialog.close();
});
btnRead.addEventListener("click", () => {
  btnRead.classList.toggle("read");
  btnRead.textContent = btnRead.classList.contains("read") ? "Read" : "Unread";
});

//Programm start
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("Harry Potter", "J.K. Rowling", 471, false);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book4 = new Book("Harry Potter", "J.K. Rowling", 471, false);
const book5 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book6 = new Book("Harry Potter", "J.K. Rowling", 471, false);
const book7 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);
myLibrary.push(book7);

displayBooks();
