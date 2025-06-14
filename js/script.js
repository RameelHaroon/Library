const myLibrary = [new Book("Test 1", "Test Author", 69)];
const container = document.querySelector(".container");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector("#modal");

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
displayBooks();
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