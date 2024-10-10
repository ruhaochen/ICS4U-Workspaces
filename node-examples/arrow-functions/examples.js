//traditional anonymous function
let add = function(x,y){
    return x + y;
}

console.log(add(1,2));

//arrow function
let add2 = (x,y) => x+y;

console.log(add2(3,8)); 

let subtract = (x,y) => {return x - y}; 

console.log(7,5); 

const arr = [1,5,6,3,5,8,9,7];

let callback = x => x%2 == 0;

const even = arr.filter((x) => x % 2 == 0);
const even2 = arr.filter(callback)
console.log(even);  //output: [ 6, 8 ]
console.log(even2); //output: [ 6, 8 ] 

const mystery = () => {console.log(7)};

mystery(); 

const mystery2 = arr.map(x => x * x);
console.log(mystery2); 

arr.forEach(x => {
    if(x%2 == 0)
            x = 23;
    else  
        return x;
    console.log(mystery2); 
})