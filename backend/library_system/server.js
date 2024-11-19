import express, { urlencoded } from 'express';

const app = express();
const PORT = process.env.PORT || 5001 ;

let books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isAvailable: true },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949, isAvailable: true },
    { id: 3, title: 'Moby Dick', author: 'Herman Melville', year: 1851, isAvailable: true }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

app.post('/books', (req, res) =>{
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: parseInt(req.body.year),
        isAvailable: true
    };
    books.push(book);
    res.send(book); 
}); 

app.get('/books/available', (req, res) => {
    res.send(books);
});

app.post('/books/borrow', (req, res) =>{
    const book = books.find(book => book.title === req.body.title);
    if(!book || book.isAvailable === false){
        return res.status(404).send('Book not available or already borrowed.');
    }
    book.isAvailable = false;
    res.send(book); 
}); 

app.post('/books/return', (req, res) =>{
    const book = books.find(book => book.title === req.body.title);
    if(!book || book.isAvailable === true){
        return res.status(404).send('Book not found or not borrowed.');
    }
    book.isAvailable = true;
    res.send(book); 
}); 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));