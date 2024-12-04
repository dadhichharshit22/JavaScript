// // function declaration
// function functionname(){
//     console.log('hello dunia');
// };

// // function call or invoke
// functionname();

// // Named function assignment
// let stand = function walk(){
//     console.log('waiting');
// };

// stand();
// // Anonymous function assignment
// let stand2 = function (){
//     console.log('waiting');
// };

// let jump = stand;
// jump();

// // javascript is dynamic language
// let x = 1;
// x='a';

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// };
// function summ(a,b){
//     let total = 0;
//     for(let value of arguments){
//         total = total + value;
//     }
//     return total;
// }
// console.log(sum(1,2));

// console.log(summ(1,2,3,4,5,6));

// // Rest operator

// function summm(num,value,...args){
//     console.log(...args);
// };
// console.log(summ(1,2,3,4,5,5));

// // default parmeter
// function interset(p,r=5,y=70){
//     return p*r*y/100;
// };

// console.log(interset(100,5,7));
// console.log(interset(6,undefined,9));

// // let person = {
// //     fName : 'Harshit',
// //     lName  : 'Dadhich',

// //     get fullname(){
// //        return `${person.fName} ${person.lName}`; 
// //     },
// //     set fullname(value){

// //         if(typeof value!==String){
// //             throw new Error("you have not sent a string");
// //         }
// //         let parts = value.split(' ');
// //         this.fName = parts[0];
// //         this.lName = parts[1];
// //     }
// // };

// // person.fullname = 'Vanshaj Dadhich';
// // console.log(person.fullname);
// // function fullname(){  // issue only we can read
// //  return `${person.fName}  ${person.lName}`;
// // }
// // console.log(fullname());

// // Getter, Setter

// // Getter -> access properties
// // Setter -> change or mutate properties



// // Try and catch error handling

// try{

// person.fullname = 1;
// }
// catch(e){
//     alert(e);
// }

// //console.log(person.fullname);


// // scope 

// {
//     var a = 5;

// }
// console.log(a);

// sorting
// let  a = [1,2,9,3,4,5];
// a.sort(function(a,b){
//     return a-b;
// });
// console.log(a);


let arr = [1,2,3,4,5];
let total = 0;
for(let value of arr){
     total+=value;
}
console.log(total);



let totalsum = arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(totalsum);