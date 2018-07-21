const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 
// function absurdBubbleSort(arr, sortCompletionCallback){
// 
// 
// }

function isGreaterThan(el) {
  return el;
}


function askIfGreaterThan(el1, el2, callback){
  reader.question(`is ${el1} bigger than ${el2}?, please answer yes or no. \n` , function (answer) {
    if(answer === "yes"){
      callback(true);
    }else{
      callback(false);
    }

    });
}

function madeAnySwaps(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length -1){
    
  let totalChaos = askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan); 
  if (totalChaos === true) {  
    madeAnySwaps(arr[i], arr[i + 1]);
    // 
  }
  innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
  }
  
}



