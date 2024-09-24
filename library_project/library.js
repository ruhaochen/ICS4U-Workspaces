const prompt = require('./node_modules/prompt-sync')();
let choice = '';

let library = [
    { title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isAvailable: true }
  ];


function addBook(){
  let bookTitle = prompt('What is the name of the book? ');
  let bookAuthor = prompt('What is name of the author? ');
  let publicationDate = parseInt(prompt('What year was the book published? '));
  
  let book = {
    title : bookTitle,
    author : bookAuthor, 
    year : publicationDate,
    isAvailable: true
  }
  library.push(book)
}

function listAvailableBooks(){
  for(let i = 0; i < library.length; i++){
    for(const key in library.slice(i,i+1)){
      if(library.slice(i,i+1)[key].isAvailable == true){
        console.log(library.slice(i,i+1)[key].title);
      }
    }
  }
}

function borrowBook(bookTitle){
  for(const i in library){
    if(library[i].title == bookTitle && library[i].isAvailable == true){
      library[i].isAvailable = false;
      return '';
    }  
  }
  console.log("Sorry this book is not avaiable at the moment.");
}

function returnBook(bookTitle){
  for (const i in library){
    if(library[i].title == bookTitle){
      library[i].isAvailable = true;
      return '';
    }
  }
  console.log("Sorry this book is not in the database, but you can add it if you want (option 1).");
}

function listBooksByAuthor(authorName){
  for(const i in library){
    if(library[i].author == authorName){
      console.log(library[i].title);
    }
  }
}

function findBooksBeforeYear(year){
  for(const i in library){
    if(library[i].year < year){
      console.log(`${library[i].title} by ${library[i].author}`); 
    }
  }
}

function removeBook(bookTitle){
  for(const i in library){
    if(library[i].title == bookTitle){
      library.splice(i, i+1); 
    }
  }
}

function printMenu(){
  console.log();
  console.log('1. Add new book');
  console.log('2. List avaiable books');
  console.log('3. Borrow a book');
  console.log('4. Return a book');
  console.log('5. List books by author');
  console.log('6. Find books before a year');
  console.log('7. Remove a book');
  console.log('8. Exit the program');
  choice = parseInt(prompt('What do you want to do? '));
  if(choice == 8){
      console.log("Thank you. Bye bye!");
  }
}

while(choice!=8){
  printMenu();
  if(choice == 1){
      console.log();
      addBook();
  }else if(choice == 2){
      console.log();
      listAvailableBooks();
  }else if(choice == 3){
      console.log();
      let bookName = prompt('What book do you want to borrow? ');
      borrowBook(bookName);
  }else if(choice == 4){
      console.log();
      let bookName = prompt('What book do you want to return? ');
      returnBook(bookName);
  }
  else if(choice == 5){
    console.log();
    let authorName = prompt('Which author? ');
    listBooksByAuthor(authorName);
  }
  else if(choice == 6){
    console.log();
    let year = prompt('Which year? ');
    findBooksBeforeYear(year);
  }
  else if(choice == 7){
    console.log();
    let bookName = prompt('What book do you want to remove? ');
    removeBook(bookName);
  }
}