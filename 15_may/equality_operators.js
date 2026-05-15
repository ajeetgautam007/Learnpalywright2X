// Equality Operators in JavaScript: == vs ===

// == (Loose Equality): Compares values after type coercion
// === (Strict Equality): Compares values without type coercion (recommended)

console.log("Loose Equality (==):");
console.log(5 == '5');      // true (string '5' is coerced to number 5)
console.log(0 == false);    // true (false is coerced to 0)
console.log(null == undefined); // true (both are falsy)

console.log("\nStrict Equality (===):");
console.log(5 === '5');     // false (different types: number vs string)
console.log(0 === false);   // false (different types: number vs boolean)
console.log(null === undefined); // false (different types: null vs undefined)

// Best practice: Always use === for comparisons to avoid unexpected behavior
console.log("\nRecommended usage:");
console.log(5 === 5);       // true
console.log('hello' === 'hello'); // true
console.log(true === true); // true