const user = {name: "Jidnya", address: {city: "Pune", pin: 411001}};
const{address: { city }} = user;


//array destructuring with defaults
const[a = 1, b = 2] = [undefined];

//function param destructuring
function greet({name}){
    console.log(`Hello, ${name}`);
}