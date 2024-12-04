const countValue = document.querySelector('#counter');  // document.getElementbyId('counter')

const increment = () => {  // function increment
    // get the value from UI
 let value = parseInt(countValue.innerText);  // why we used let due to const doesn't change 
 // update the value
 value = value + 1;
 // set the value onto UI
 countValue.innerText = value;
}

const decerment = () => {
  // get the value from UI
  let value = parseInt(countValue.innerText);
  // update the value
  value = value - 1;
  // set the value onto UI
  countValue.innerText = value;
}