const prompt = require('./node_modules/prompt-sync')();
let choice = '';
let books = [];

class Book{
    constructor(title, author, year, isAvailable){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = isAvailable; 
    }

    borrowBook(){
        if (this.isAvailable == true){
            this.isAvailable = false;
            console.log(`You have succesfully borrowed ${this.title} by ${this.author}`);
        }
    }
      
    returnBook(){
      if (this.isAvailable == false){
        this.isAvailable = true;
        console.log(`You have succesfully returned ${this.title} by ${this.author}`);
      }else{
        console.log('This book is already in the library.')
      }        
    }
}

class Library{
    addBook(book){
        books.push(book)
    }

    listAvailableBooks(){
        for(let i = 0; i < books.length; i++){
          for(const key in books.slice(i,i+1)){
            if(books.slice(i,i+1)[key].isAvailable == true){
              console.log(books.slice(i,i+1)[key].title);
            }
          }
        }
      }

      borrowBook(bookTitle){
        for(const i in books){
          if(books[i].title == bookTitle && books[i].isAvailable == true){
            books[i].borrowBook();
            return '';
          }  
        }
        console.log("Sorry this book is not avaiable at the moment.");
      }
      
      returnBook(bookTitle){
        for (const i in books){
          if(books[i].title == bookTitle){
            books[i].returnBook();
            return '';
          }
        }
        console.log("Sorry this book is not in the database, but you can add it if you want (option 1).");
      }
}

function printMenu(){
    console.log();
    console.log('1. Add new book');
    console.log('2. List avaiable books');
    console.log('3. Borrow a book');
    console.log('4. Return a book');
    console.log('5. Exit the program');
    choice = parseInt(prompt('What do you want to do? '));
    if(choice == 5){
        console.log("Thank you. Bye bye!");
    }
}

let library = new Library();
while(choice!=5){
    printMenu();
    if(choice == 1){
        console.log();
        let bookTitle = prompt('What is the name of the book? ');
        let bookAuthor = prompt('What is name of the author? ');
        let publicationDate = parseInt(prompt('What year was the book published? '));
        
        let book = new Book(bookTitle, bookAuthor, publicationDate, true);
        library.addBook(book);
        
    }else if(choice == 2){
        console.log();
        library.listAvailableBooks();
    }else if(choice == 3){
        console.log();
        let bookName = prompt('What book do you want to borrow? ');
        library.borrowBook(bookName);
    }else if(choice == 4){
        console.log();
        let bookName = prompt('What book do you want to return? ');
        library.returnBook(bookName);
    }
}