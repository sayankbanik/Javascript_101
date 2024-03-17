// with var redeclaring varaiable with same name is possible
var number = 123;
var number = 696;
var number = "hi var";
console.log(number);

let message = "hello Let";
message = "ho Let";
// let message = "hehe Let"; // redeclaring a variable with existed name is not possible
console.log(message);

const num = 3.14159;
// num = 3.225;  TypeError: Assignment to constant variable.
// const num = 3.225; SyntaxError: Identifier 'num' has already been declared
console.log(num);

// var is not used that much as it is so much confusing
// instead use let and for constant value use const
