console.log("welcome to project 2 classs version");

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    console.log("Adding to ui");
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`;
    tableBody.innerHTML += uiString;
  }

  clear() {
    let libraryForm = document.getElementById("libraryForm");

    libraryForm.reset();
  }

  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  show(type, Displaymessage) {
    let html = "";
    let message = document.getElementById("message");

    message.innerHTML = `<div class="alert alert-${type}  alert-dismissible fade show" role="alert">
    <strong> Message: </strong> ${Displaymessage} 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 1500);
  }
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libaryFormSubmit);

function libaryFormSubmit(e) {
  console.log("you have submitted library form");

  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let type;
  let fiction = document.getElementById("Fictional");
  let nonfictional = document.getElementById("nonfictional");
  let Programming = document.getElementById("Programming");

  if (fiction.checked) {
    type = fiction.value;
  } else if (Programming.checked) {
    type = Programming.value;
  } else if (nonfictional.checked) {
    type = nonfictional.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book is succesfully Added in the library.");
  } else {
    display.show("danger", "Sorry you cannot Add this book.");
  }

  e.preventDefault();
}

