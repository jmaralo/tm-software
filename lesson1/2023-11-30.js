console.log("2023-11-30/leason1\n\nExercise1");

// Exercise 1
// Hello World!
console.log("Hello World");


console.log("\nExercise 2");
// Exercise 2
// The types of variables

// var is a global variable
var a = 10;
var b = "a";
var c = true;
var abc = [a, b, c];
console.log(abc);

console.log("\nExercise 3");
// let is a local variable (block scope)
let d = 10;

if (true) {
    let d = 5;
}
console.log(d);

// const is a constant variable
const e = 10;
// e = 5; // error, because e can't be changed
console.log(e);

console.log("\nExercise 4");
// Exercise 4
// The types of loops

// for loop
for (let i = 0; i < 10; i++) {
    console.log("for");
}

// while loop
let i = 0;
while (i < 10) {
    console.log("while");
    i++;
}

console.log("\nExercise 5");
// Exercise 5
// Functions

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// const are functions
const add2 = (a, b) => {
    return a + b;
}

console.log("\nExercise 6");
// Exercise 6
// Arrays

const array = [1, 2, 3, 4, 5];
console.log("array length: " + array.length);

// iterating over an array
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // this prints the value
}

for (let b in array) {
    console.log(b); // this prints the index
}

console.log("\nBonus");
// tricks for this week's exercise:
string = "Hello World";
arrayOfStrings = string.split(" "); // split the string into an array of strings    
console.log(arrayOfStrings);