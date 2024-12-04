
// one way to write addeventlistiner
// document.addEventListener('click',function(){
//     console.log('i click on the document');
// })

// or another way to write addeventlistiner
// function eventlistiner(){
//     console.log('I click on the documents');
// }
// document.addEventListener('click',eventlistiner);
//document.removeEventListener('click',eventlistiner);

// Three types of phases of a event
// 1. capturing phases
// 2. at target phase
// 3. bubbling phase

// document.addeventlistener('click',print,true); // true for capturing phase
// by default it is bubbling phase

// const constant = document.querySelector('#wrapper');
// constant.addEventListener('click',function(event){  // we can also write name of event instead of harshit or babber or vanshaj
//     console.log(event);
// })

// let links = document.querySelectorAll('a');
// let thirdlinks = links[2];

// thirdlinks.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aagya')
// });



// let myDiv = document.createElement('div');

// function parastatus(event){
//     console.log('Para' + event.target.textContent);
// }
// myDiv.addEventListener('click',parastatus);
// for(let i = 1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para ' + i;

  
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName == 'SPAN'){
    console.log('span par click kar hai' + event.target.textContent);
    }
});