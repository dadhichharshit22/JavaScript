// let name = [1,2,3,4];
// console.log(name);

// // Insertion in array

// // At end ->push
// name.push(9);
// console.log(name);

// // At begining ->unshift
// name.unshift(0);
// console.log(name);

// // At middle ->splice
// name.splice(2,0,'a','b','c');
// console.log(name);

// // Searching
// console.log(name.indexOf(2));

// // we want to number are persent in  the array

// if(name.indexOf(2)!=-1){
//     console.log("Present");
// }

// console.log(name.includes(2));

// console.log(name.indexOf(2,2)); //2->KeyboardEvent,2->starting index where we want to start

// // Array object
// let courses=[
//     {no:1,naam :'Harshit'},
//     {no:2,naam : 'Dadhich'}

// ];
// console.log(courses);
// //console.log(courses.indexOf({no:1,naam:'Harshit'})); // due to reference are different in object it is not working
// //console.log(courses.includes({no:1,naam:'Harshit'})); // due to reference it is also not working



// // object camparsion

// let course = courses.find(function(course){
//     return course.naam == 'Harshit';
// })
// //console.log(course);

// // or second method to find in the object
// // Arrow function
// let cours = courses.find(cours=> cours.naam==='Harshit');
// console.log(cours);

// // Removing from the array
// let arr = [1,2,3,4,5,6,7];
// // end
// arr.pop();
// // begin
// arr.shift();
// // middle
// arr.splice(2,1);
// console.log(arr);

// // Emptying the array

// let ha = [1,2];
// let va = ha;
// //ha = [];
// // console.log(ha);
// // console.log(va);


// // now write method of emptying is:
// ha.length = 0;

// // third method
// ha.splice(0,ha.length);
// console.log(va);
// console.log(ha);

// // Combined the array
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second);
// //console.log(combined);

// let silced = combined.slice(2,4);
// //console.log(silced);

// // spread operator
// let sl = [...first,'a',...second,'b'];
// console.log(sl);

// // copy kaisa create karu
// let another = [...combined];

// let arr = [1,2,3,4,5];
// // for_of loop for iterator
// for(let value of arr){
//     console.log(value);
// }

// // for_each loop for iterator
// arr.forEach(function(number){
//     console.log(number);
// });
// // convert into arrow funcction
// arr.forEach(number=>console.log(number));

// let number = [1,2,3,4,5];
// //const joined = number.join(',');
// //console.log(joined);

// let message = 'this is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join(' ');
// console.log(joined);

// let a = [1,5,2,4];
// a.sort();
// console.log(a); 

// a.reverse();
// console.log(a);

// a.sort(function(a,b){return a-b});  // sort in ascending order

// a.sort(function(a,b){return b-a}); // sort in descending order

// filter 

let x = [1,2,3,-6,-7];
let filtered = x.filter(function(values){
    return values>0;
});
// let filtered = x.filter(values=>values>=0);
console.log(filtered);

let numbers = [1,2,3,4];
let mapping = numbers.map(function(value){
    return 'student_no' + value;
});
// arrow function
// let mapping = numbers.map(value=>'student_no'+value);
console.log(mapping);

let item = mapping.map(function(num){
    return {value: num};
});
console.log(item);

// chaining
let z = numbers.filter(value => value>=0).map(num=>{value:num});
console.log(z);