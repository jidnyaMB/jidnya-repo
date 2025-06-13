let a = 10;
let b = a;
b = 20;
console.log(a , b);

let obj1 = {name : "Jidnya"};
let obj2 = obj1;
obj2.name = "Changed";
console.log(obj.name);


//pitfall
const users = [{name: "Jidnya"}];
const copy = users;
copy[0].name = "Changed";
//solution
const safeCopy = JSON.parse(JSON.stringify(users));

//spread operator
const arr1 = [1, 2], arr2 = [3, 4];
const merged = [...arr1, ...arr2];

const objA = {a:1}, objB = {b:2};
const mergedObj = {...objA, ...objB};

function sum(a, b, c){
    return a+b+c;
}
const nums = [1, 2, 3];
console.log(sum(...nums));
