function Person (name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log("hello my name is " + this.name);
}

let jeff = new Person("jeff");

console.log(jeff.__proto__)

// jeff.greet();

let arr1 = ['hi', 'bye', 'see ya later', 'alligator'];

// for (const key in arr1) {
//     console.log(key);
// }

let smth = {hi: 'hello', bye: 'goodbye'};

// for (const key in smth) {
//     console.log(smth[key]);
// }

// for (const x of smth) {
//     console.log(x);
// }

class kevin{
    constructor(){
        this.hello = function(){
            console.log('kevin says hi')
        }
    }
}

kevin.prototype.hi = function(){
    console.log('hihihihih')
}

let kev = new kevin('h');
console.log(kev.__proto__);