// adding 100 para
// const t1 = performance.now();
// for(let i = 1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this look " + (t2-t1)+"ms")

// optimissing a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i=1;i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'this is para' + i;
//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this look " + (t4-t3)+"ms")

// Document fragment
// let fragment = document.createDocumentFragment();
// for(let i = 1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;
//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);  // 1 Reflow, 1 Repaint


// javascript is single threaded language

// this is call stack 
// function newparra(){
//     let element = document.createElement('p');
//     element.textContent = ' Js is single thread language';
//     document.body.appendChild(element);
// }

// function newpara(){
//     let element = document.createElement('p');
//     element.textContent = ' kya haal chal';
//     document.body.appendChild(element);
// }

// newparra();
// newpara();
