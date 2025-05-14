const names = ['John', 'Jane', 'Jim']
const ages = [25, 30, 35]

names.push('Jack')
ages.push(40)

let rcombine = names.reduce((acc,name, index)=>{
    acc[name] = ages[index]
    return acc
}, [])
console.log(rcombine)


const add = (...arr) => arr.reduce((acc, curr) => acc + curr, 0);

const multiply = (...arr) => arr.reduce((acc, curr) => acc * curr, 1);

// To run reducer in reverse order
const subtract = (...arr) => arr.reduceRight((acc, curr) => curr-acc, 0);

const divide = (...arr) => arr.reduceRight((acc, curr) => curr/acc, 1);


let a = add(5, 10);
let s = subtract(10, 5);
let m = multiply(5, 10);
let d = divide(10, 5);

console.log("Addition: " + a);
console.log("Subtraction: " + s);
console.log("Multiplication: " + m);
console.log("Division: " + d);

// Map is like dictionary
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');
console.log(map.get('name')); // John
console.log(map.get('age')); // 30
console.log(map.get('city')); // New York
console.log(map.size); // 3
map.delete('age');
console.log(map.size); // 2