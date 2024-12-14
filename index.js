console.log("This is my first programme");
console.log("Well come John your month salary is 500000")

const num1=5;
const num2=3;
//add two numbers
const sum = num1 + num2;
// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// program that checks if the number is positive,negative or zero
//input from the user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);
    
    if (isNaN(number)) {
        console.log("That's not a valid number.");
    } else {
        console.log(`You entered: ${number}`);
    }
    
    rl.close();
});
  