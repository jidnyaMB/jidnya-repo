// 1. Synchronous
console.log('1. Start');

// 2. process.nextTick (executed immediately after stack clears, before I/O or setTimeout)

process.nextTick(() => {
    console.log('2. process.nextTick');
});

// 3. Promise (microtask)

Promise.resolve()
    .then(() => console.log('3. Promise microtask'));

// 4. setTimeout (timers)

setTimeout(() => {
    console.log('4. setTimeout');
}, 0);

// 5. setImmediate (check)

setImmediate(() => {
    console.log('5. setImmediate');
});

// 6. I/O (simulate)

const fs = require('fs'); 
fs.readFile(__filename, () => {
    console.log('6. File I/O');
});

// Final
console.log('1. End');
