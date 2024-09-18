//Task 1
let fruits = ['apple', 'orange', 'banana'];
fruits.push('grape', 'mango');
console.log(fruits);

let numbers = [5,10,15];
numbers.unshift('0', '1');
console.log(numbers);

//Task 2
let animals = ['dog', 'cat', 'elephant', 'lion'];
animals.pop();
console.log(animals);

let colours = ['red', 'blue', 'green', 'yellow'];
colours.shift();
console.log(colours);

//Task 3
let cars = ['Toyota', 'Honda', 'Tesla', 'Ford'];
console.log(cars.indexOf('Tesla'));

let drinks = ['water', 'juice', 'soda', 'milk'];
console.log(drinks.includes('coffee'));

//Task 4
let ages = [21, 45, 18, 35, 25];
ages.sort();
console.log(ages);

let letters = ['a', 'b', 'c', 'd'];
console.log(letters.reverse());

//Task 5
let months = ['January', 'Febuary', 'March', 'April', 'May', 'June'];
let two_months = months.splice(3,2);
console.log(two_months);

let cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Pheonix'];
cities.splice(2,2);
console.log(cities);

//Task 6
let hobbies = ['reading', 'swimming', 'gaming', 'traveling'];
console.log(hobbies.join(', '));

let group1 = [1, 2, 3];
let group2 = [4, 5, 6];
console.log(group1.concat(group2));