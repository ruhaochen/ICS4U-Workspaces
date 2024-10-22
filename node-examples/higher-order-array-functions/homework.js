// Question 1
let arrOfNum = [1,3,4,5,7,-2,-9,-8];
let squares = arrOfNum.map(num => num*num);
console.log(squares);

// Question 2
const students = [
    { name: "Alice", grade: 85},
    { name: "Bob", grade: 92},
    { name: "Charlie", grade: 78},
    { name: "David", grade: 95},
    { name: "Eva", grade: 88}
];
let smartStudents = students.filter(student => student.grade > 80);
console.log(smartStudents);

// Question 3
let numbers = [1,2,3,4,5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//Question 4
let hello = (names) => {
    names.forEach(name => console.log(`Hello, ${name}!`));
}
let arrOfNames = ['Kevin', 'Jeff', 'Eric', 'Evan', 'Joline'];
hello(arrOfNames);

// Question 5
const products = [
    {name: 'shampoo', price: 12},
    {name: 'water', price: 5},
    {name: 'lamborgini', price: 50000},
    {name: 'privateJet', price: 1000000},
    {name: 'textbook', price: 49}
]
console.log(products[products.findIndex(product => product.price >= 50)]);

//Question 6
let arrNums = [3,4,5,6,7,-9];
console.log(!(arrNums.findIndex(num => num < 0) === -1)); 

//Question 7
const books = [
    {name: '1984', isAvailable: true},
    {name: 'To Kill a Mockingbird', isAvailable: false},
    {name: 'A Thousand Splendid Suns', isAvailable: true}
];
console.log(books.every(book => book.isAvailable === true));

//Question 8 
let employees = [
    {name: 'John', yearsAtCompany: 5},
    {name: 'Ashley', yearsAtCompany: 3},
    {name: 'Steward', yearsAtCompany: 8},
    {name: 'Bo', yearsAtCompany: 10}
]; 
employees.sort((a, b) => a.yearsAtCompany - b.yearsAtCompany);
console.log(employees.findIndex(employee => employee.yearsAtCompany > 5));

//Question 9
let arrOfNums = [1,4,6,3,9,8]; 
let newArrOfNums = arrOfNums.flatMap(num => num*3);
console.log(newArrOfNums); 

// Question 10 
let movies = [
    {title: 'Scream', year: 1990},
    {title: 'Smile 2', year: 2024},
    {title: 'The Conjuring', year: 2016},
    {title: 'Terrifier 3', year: 2024},

];
movies.sort((a,b) => a.year - b.year);
console.log(movies);