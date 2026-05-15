// All JavaScript Operators - Comprehensive Examples

console.log("=== ARITHMETIC OPERATORS ===");
// Addition
console.log("Addition: 5 + 3 =", 5 + 3);
// Subtraction
console.log("Subtraction: 10 - 4 =", 10 - 4);
// Multiplication
console.log("Multiplication: 6 * 7 =", 6 * 7);
// Division
console.log("Division: 15 / 3 =", 15 / 3);
// Modulus (Remainder)
console.log("Modulus: 17 % 5 =", 17 % 5);
// Increment
let a = 5;
console.log("Increment: a++ =", a++); // Post-increment
console.log("After increment: a =", a);
// Decrement
let b = 8;
console.log("Decrement: --b =", --b); // Pre-decrement

console.log("\n=== COMPARISON OPERATORS ===");
// Equal to (loose)
console.log("Loose Equal: 5 == '5' =", 5 == '5');
// Strict Equal to
console.log("Strict Equal: 5 === '5' =", 5 === '5');
// Not Equal (loose)
console.log("Loose Not Equal: 5 != '6' =", 5 != '6');
// Strict Not Equal
console.log("Strict Not Equal: 5 !== '5' =", 5 !== '5');
// Greater Than
console.log("Greater Than: 10 > 5 =", 10 > 5);
// Less Than
console.log("Less Than: 3 < 7 =", 3 < 7);
// Greater Than or Equal
console.log("Greater or Equal: 5 >= 5 =", 5 >= 5);
// Less Than or Equal
console.log("Less or Equal: 4 <= 6 =", 4 <= 6);

console.log("\n=== LOGICAL OPERATORS ===");
// AND
console.log("AND: true && false =", true && false);
// OR
console.log("OR: true || false =", true || false);
// NOT
console.log("NOT: !true =", !true);

console.log("\n=== ASSIGNMENT OPERATORS ===");
// Simple Assignment
let x = 10;
console.log("Assignment: x = 10, x =", x);
// Add and Assign
x += 5;
console.log("Add Assign: x += 5, x =", x);
// Subtract and Assign
x -= 3;
console.log("Subtract Assign: x -= 3, x =", x);
// Multiply and Assign
x *= 2;
console.log("Multiply Assign: x *= 2, x =", x);
// Divide and Assign
x /= 4;
console.log("Divide Assign: x /= 4, x =", x);
// Modulus and Assign
x %= 3;
console.log("Modulus Assign: x %= 3, x =", x);

console.log("\n=== BITWISE OPERATORS ===");
// AND
console.log("Bitwise AND: 5 & 3 =", 5 & 3); // 0101 & 0011 = 0001
// OR
console.log("Bitwise OR: 5 | 3 =", 5 | 3);  // 0101 | 0011 = 0111
// XOR
console.log("Bitwise XOR: 5 ^ 3 =", 5 ^ 3); // 0101 ^ 0011 = 0110
// NOT
console.log("Bitwise NOT: ~5 =", ~5);
// Left Shift
console.log("Left Shift: 5 << 1 =", 5 << 1); // 0101 << 1 = 1010
// Right Shift
console.log("Right Shift: 5 >> 1 =", 5 >> 1); // 0101 >> 1 = 0010
// Zero-fill Right Shift
console.log("Zero-fill Right Shift: -5 >>> 1 =", -5 >>> 1);

console.log("\n=== TERNARY OPERATOR ===");
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Ternary: age >= 18 ? 'Yes' : 'No' =", canVote);

console.log("\n=== TYPEOF OPERATOR ===");
console.log("typeof 42 =", typeof 42);
console.log("typeof 'hello' =", typeof 'hello');
console.log("typeof true =", typeof true);
console.log("typeof undefined =", typeof undefined);

console.log("\n=== INSTANCEOF OPERATOR ===");
let arr = [1, 2, 3];
console.log("arr instanceof Array =", arr instanceof Array);
let str = "hello";
console.log("str instanceof String =", str instanceof String); // false, primitive
let strObj = new String("hello");
console.log("strObj instanceof String =", strObj instanceof String);