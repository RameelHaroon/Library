const myLibrary = [new Book("The Silent Patient", "Alex", 259)];
const container = document.querySelector(".container");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector("#modal");
const form = document.getElementById("form");

displayBooks();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary(document.querySelector("#bookName").value,
   document.querySelector("#bookAuthor").value,
   document.querySelector("#bookPages").value);
  displayBooks();
  modal.close();
});

openBtn.addEventListener("click", () =>{
  modal.showModal();
});

closeBtn.addEventListener("click", () =>{
  modal.close();
});

function Book(name, author, pages) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
}

Book.prototype["info"] = function(){
    return `${this.name} by ${this.author}, ${pages} pages long`;
};

function addBookToLibrary(name, author, pages) {
  myLibrary.push(new Book(name, author, pages));
}

function displayBooks(){
    container.textContent = "";

    myLibrary.forEach(book => {
        const newBookElement = document.createElement("div");
        newBookElement.className = "book-item";

        let bookName = document.createElement("h4");
        bookName.textContent = book.name;

        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = book.author;

        let bookPages = document.createElement("p");
        bookPages.textContent = book.pages;

        newBookElement.appendChild(bookName);
        newBookElement.appendChild(bookAuthor);
        newBookElement.appendChild(bookPages);

        container.appendChild(newBookElement);
    });
}