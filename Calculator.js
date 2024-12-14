const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const performOperation=(numbers, operator) => {
    switch(operator){
        case '+':
            return numbers.reduce((a, b) => a + b, 0);
        case '-':
            return numbers.reduce((a, b) => a - b, 0);
        case '*':
            return numbers.reduce((a, b) => a * b, 1);
        case '/':
            return numbers.reduce((a, b) => a / b, 1);
        default:
            throw new Error('Invalid operator');
    }
};
const getNumbers= (input) => {
    return input.split(',').map(Number);
};
rl.question("Enter numbers separated by space:",(numbersInput)=>{
    rl.question("Enter operation (+, -, *, /): ", (operator) => {
        if(numbers.some(isNaN)) {
            console.log("Invalid input. Please enter numbers separated by space and valid operator.");
        } else {
            const result = performOperation(numbers, operation);
            console.log('The result is:', $(result));
        }
        rl.close();
    });
});