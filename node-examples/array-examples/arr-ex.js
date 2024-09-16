let arr = [2,4,6, 'hi', true, 7.8];
console.log(arr);

let arr1 = ['Jeff', 'is', 'dumb', ':)'];
arr1.push('haha');
console.log(arr1);
let spliced = arr1.splice(2,2);
console.log(arr1);
console.log(spliced);

for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

//arr1.forEach(x => console.log(x));    //unit three stuff dw abt it rn

let x = arr1.pop();
console.log(x);