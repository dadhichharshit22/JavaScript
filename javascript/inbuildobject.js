// Math

Math.max(1,2,3,4);
Math.min(1,2,3,4);

// string

let lastName = 'Dadhich';

// primitive use as a object by using
// lastName.

let firstName = new String('Harshit');

let message = 'this is \' my first \" message';
console.log(message);

let words = message.split(' ');
console.log(words);

let write = 'this is \n my second \n message';
console.log(write);

// Template literals
// by using back tick ``
// ${} -> this is place holder
let ans = `this ${lastName},  
is 
my 
third
message`;
console.log(ans);

let date = new Date();
console.log(date);

let date1 = new Date('22 Dec 2002 12:45');
console.log(date1);

let date2 = new Date(2002,11,22,12);
date.setFullYear(2000);
date.setMonth(10);
console.log(date2);