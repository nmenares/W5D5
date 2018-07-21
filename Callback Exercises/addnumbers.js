const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function completionCallback(num) {
  console.log(`Total Sum: ${sum}`);
}

function addNumbers(sum, numsLeft, completionCallback) {
  let newSum = sum;
  if (numsLeft > 0) {
    reader.question("What is your number?", function (answer) {
      newSum = parseInt(answer) + sum;
      console.log(newSum);
      addNumbers(newSum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(newSum);
  }
  
}


addNumbers(1, 0, sum => console.log(`Total Sum: ${sum}`));
