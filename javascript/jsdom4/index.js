// Synchronise code
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// Asynchrous code
// setTimeout(function(){
//     console.log('third');
// },3000);

// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// before code are for practice 

// First way to write promise 
// these are have two option 1. then 2. catch
// 1. then for return value
// 2. catch the error in the code 
// let merapromise = new Promise(function(resolve,reject){
//     console.log(' I am inside promise');
//     resolve(1998);
// });

// console.log('phela');

// Second way to write the  promise
// let mepromise1 = new Promise(function(resolve,reject){
//  setTimeout(function(){
//     console.log('I am inside the promise');
//  },3000);
//  //resolve(2233);
// reject(new Error('Bhaisabh error aaya hai'));
// })

// mepromise1.then((value) => {console.log(value)},(error) =>{console.log("Recieved Error")});
// //mepromise1.catch((error) =>{console.log("Recieved Error")});

// // let mepromise2 = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //        console.log('I am inside the promise');
// //     },3000);
// //     resolve(2233);
// //    //reject(new Error('Bhaisabh error aaya hai'));
// //    })
// console.log('Phela');


// let waddaa1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('set timeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waddaa1.then(()=>{
//     let waddaa2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('set timeout2 started');
//         },3000);
//         resolve('wadaa 2 is recieved');
//     })
//     return waddaa2;
// })

// output.then((value)=>console.log(value));

// Async await return promise

// async function abcd(){
//     return 7;  // or return "kya hua tera";
// }
// async function utitlity(){
// let delhiMausam = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('delhi ma bahaut grami hai');
//     },1000);
// });

// let HyderbadMausam = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Hyderbaad cool hai');
//     },3000);
// });

// let dM = await delhiMausam;
// let hM = await HyderbadMausam;

// return [dM,hM];
// }

// object literal
// let object = {
//     heading:"head"
// };

// // fetch api of get or retrive
// async function utitlity(){
// let content = fetch('https://jsonplaceholder.typicode.com/todos/1');
// let output = await content.json();
// console.log(output);
// }

// utitlity();

// fetch api for the post or sent 
// async function helper(){
//     let options =  {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Harshit Dadhich',
//           body: 'Smart Person',
//           userId: 2002,
//           weight:86
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
    
//       let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//       let response = content.json();
//       return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// };

// utility();






// Closure
// let->block scoped
//let name = 'Sher';
// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     {
//         let name = "harshit"
//     }
//     function displayName() {
//         let name = "dadhich"
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
  }
  
  let a = init();
  a();