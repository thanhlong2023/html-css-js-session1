
// Unary and Binary Operators
console.log("Unary and Binary Operators:");
let x = 1;
console.log(-x); // Unary negation: -1
let y = 3;
console.log(y - x); // Binary subtraction: 2

// Math Operations
console.log("Math Operations:");
console.log(5 + 3); // Addition: 8
console.log(5 - 3); // Subtraction: 2
console.log(5 * 3); // Multiplication: 15
console.log(5 / 3); // Division: 1.666...
console.log(5 % 3); // Remainder: 2
console.log(2 ** 3); // Exponentiation: 8

// String Concatenation with +
console.log("String Concatenation:");
console.log("Hello" + " " + "World!"); // "Hello World!"
console.log("1" + 2); // "12"

// Numeric Conversion with Unary +
console.log("Numeric Conversion:");
console.log(+true); // 1
console.log(+""); // 0

// Operator Precedence
console.log("Operator Precedence:");
console.log(1 + 2 * 3); // 7
console.log((1 + 2) * 3); // 9

// Increment and Decrement
console.log("Increment and Decrement:");
let counter = 0;
console.log(++counter); // Prefix: 1
console.log(counter++); // Postfix: 1 (then increments to 2)
console.log(counter); // 2

// Modify-in-place
console.log("Modify-in-place:");
let n = 2;
n += 5; // n = n + 5
console.log(n); // 7
n *= 2; // n = n * 2
console.log(n); // 14

// Chaining Assignments
console.log("Chaining Assignments:");
let a, b, c;
a = b = c = 2 + 2;
console.log(a, b, c); // 4, 4, 4

// Comma Operator
console.log("Comma Operator:");
let result = (1 + 2, 3 + 4);
console.log(result); // 7

