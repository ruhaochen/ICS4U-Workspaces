//Question 1
let add = (x, y) => x + y; 
console.log(add(4,6));

//Question 2
let evenodd = (x) => {return x % 2 == 0};
console.log(evenodd(5));

//Question 3
let arr = [1,2,3,4,5];
const arr_squared = arr.map(x => x * x);
console.log(arr_squared);

//Question 4
let arr1 = [-1,-5,-7,3,4,8.-9]; 
const positive = arr1.filter(x => x > 0);
console.log(positive); 

//Question 5
let factorial = (x) => {
    for(let i = x-1; i > 0; i--){
        x*=i;
    }
    return x; 
}
console.log(factorial(3)); 

//Question 6 - Something's wrong
let arr2 = [5,7,8,2, 15 ,-9,-8];
let sortArray = (arr) => {
    return arr.sort();
}
console.log(sortArray(arr2));

//Question 7 - IDK
let x = "bob"
let checkPalindrom = (string) => {
    let arr = [];
    for (const value of x) {
        arr.push(value);
    }
    arr.sort();
    
}

//Question 8
let findMaxValue = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (const value of arr) {
        if(value > max)
            max = value;
    }
    return max;
}

//Question 9
let convertFahrenheit = (num) =>{
    return (num-32) * 5 / 9;
}

//Question 10
let mapArrayToString = (arr) =>{
    let length = 0; 
    for (const value of arr) {
        length += value.length;
    }
    let array = new Array(5);
    return array;
}
arr3 = ['hello'];
console.log(mapArrayToString(arr3).length);