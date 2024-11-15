let person = {
    name : "Steve",
    age : 30,
    isStudent : false
}

// console.log(person.name);
// console.log(person['age']);

const key = 'age';
// console.log(person.key);    //undefined
// console.log(person[key]);   //30

person.age = 34;
person.city = 'Toronto';    //creates attribute 'city'.
// console.log(person.city);

let calculator = {
    add(a, b){
        return a + b; 
    },

    subtract : function(a,b){
        return a - b;
    }
}

// console.log(calculator.subtract(5,3));

let user = {
    name : 'Ella',
    greet : function(){
        console.log(`Jeff says happy birthday to ${this.name}`);
    }
}

// user.greet();

const obj = {
    a : 6,
    b : "hi",
    c : function(){
        // console.log(`${this.a}`);
        console.log(this.b);
    }
}
console.log(obj.b);
let{b, c} = obj;

console.log(b)

for(const key in obj){
    console.log(obj[key]);
}