function varScopeExample() {
  if (true) {
    var x = 10;
  }
  console.log("var x is accessible:", x); 
}
varScopeExample();


function letScopeExample() {
  if (true) {
    let y = 20;
    console.log("let y inside block:", y);
  }
  // console.log(y); // will give error
}
letScopeExample();


const user = {
  name: "Jidnya",
  age: 22
};
user.age = 23; 
console.log("Updated user age:", user.age);

const colors = ["red", "green"];
colors.push("blue");
console.log("Colors array:", colors);


function greet(name) {
  return "Hello, " + name;
}

// Function expression
const greetExpr = function(name) {
  return "Hi, " + name;
};

// Arrow function (explicit return)
const greetArrow = (name) => {
  return "Hey, " + name;
};

// Arrow function (implicit return)
const greetArrowShort = name => `Yo, ${name}`;

console.log(greet("Alice"));
console.log(greetExpr("Bob"));
console.log(greetArrow("Charlie"));
console.log(greetArrowShort("Dana"));

// Demonstrating "this" binding
const obj = {
  value: 42,
  regularFn: function () {
    return this.value;
  },
  arrowFn: () => {
    return this.value;
  }
};
console.log("Regular function this:", obj.regularFn()); 
console.log("Arrow function this:", obj.arrowFn()); 

//Object Manipulation
const person = {
  name: "Jidnya",
  age: 22,
  address: {
    city: "Pune",
    zip: 411001
  },
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

// Object destructuring
const { name, address } = person;
console.log("Name:", name, "City:", address.city);

// Nested destructuring
const { address: { zip } } = person;
console.log("ZIP code:", zip);

// Spread operator to merge objects
const job = { role: "Developer", company: "Mindbowser" };
const fullProfile = { ...person, ...job };
console.log("Merged object:", fullProfile);

// Access and modify properties
person.age += 1;
person["email"] = "jidnya@example.com";

// Computed property names
const key = "score";
const player = {
  [key]: 95
};
console.log("Player score:", player.score);

//array operations
const numbers = [1, 2, 3, 4, 5];

// map: double each number
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// filter: only even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce: sum of all numbers
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// find: first number > 3
const greaterThan3 = numbers.find(n => n > 3);
console.log("First > 3:", greaterThan3);

// some: any number > 4
const hasGreaterThan4 = numbers.some(n => n > 4);
console.log("Any > 4:", hasGreaterThan4);

// Spread operator
const moreNumbers = [...numbers, 6, 7];
console.log("Extended array:", moreNumbers);

