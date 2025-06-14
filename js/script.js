let myLibrary = [new Book("The Silent Patient", "Alex", 259)];
const container = document.querySelector(".container");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const deleteBtn = document.querySelector("#delete-btn");
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

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let idToRemove = e.target.dataset.bookId;
    myLibrary = myLibrary.filter(book => book.id !== idToRemove);
    displayBooks();
  }
});

function Book(name, author, pages) {
  if(!new.target){
    throw Error("Use new keyword");
  }
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
        newBookElement.classList.add("book-item");

        let bookName = document.createElement("h4");
        bookName.textContent = book.name;

        let bookAuthor = document.createElement("p");
        bookAuthor.innerHTML = `<b>Author:</b>${book.author}`;

        let bookPages = document.createElement("p");
        bookPages.innerHTML = `<b>No of pages:</b>${book.pages}`;
        
        let bookDeleteBtn = document.createElement("button");
        bookDeleteBtn.textContent = "Delete"; 
        bookDeleteBtn.classList.add("delete-btn");
        bookDeleteBtn.dataset.bookId = book.id;

        newBookElement.appendChild(bookName);
        newBookElement.appendChild(bookAuthor);
        newBookElement.appendChild(bookPages);
        newBookElement.appendChild(bookDeleteBtn);

        container.appendChild(newBookElement);
    });
}