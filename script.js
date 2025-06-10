// PRINT
console.log('Hello, World!');

// ALERT
//window.alert('this is alert msg');

// CONFIRM 
//const userConfirmed = window.confirm('Do you want to proceed?');

// variable

let name = 'karan';
let number = 6;
console.log('User Name:',name);
console.log(`User Name: ${name}`); // Template literals for string interpolation

/*
Type	Supports Interpolation (${})	Multi-line Strings	Common Usage
'Single'	❌	❌	General text
"Double"	❌	❌	HTML attribs
`Backtick`	✅	✅	Templates, React
*/

// Data Types

//(typeof) operator
console.log(typeof(name)); // string
console.log(typeof(number)); // number

console.log(typeof(true)); // boolean
console.log(typeof(null)); // object (this is a known JavaScript quirk)
console.log(typeof(undefined)); // undefined
console.log(typeof(Symbol('symbol'))); // symbol

let booleanValue = true;
let nullValue = null;
let symbolValue = Symbol('symbol');

console.log(symbolValue)

// Arthimatic Operators
console.log(5 + 3); // Addition
console.log(5 - 3); // Subtraction  
console.log(5 * 3); // Multiplication
console.log(5 / 3); // Division
console.log(5 % 3); // Modulus (Remainder)
console.log(5 ** 3); // Exponentiation (5 raised to the power of 3)\
let n=5
console.log(n++); // Increment (postfix)
console.log(++n); // Increment (prefix)
console.log(n--); // Decrement (postfix)
console.log(--n); // Decrement (prefix)

// Operators Precedence order of evaluation
console.log(2 + 3 * 4); // 14 (Multiplication has higher precedence than addition)

// Associativity determines the order of evaluation for operators with the same precedence
// For example, addition and subtraction are left associative      
// console.log(5 - 3 + 2); // 4 (evaluated left to right)
// console.log(5 - (3 + 2)); // 0 (parentheses change the order of evaluation)


// Accept user input

// Window prompt is used to take input from the user
// const userInput = prompt('Enter your name: ')  // or use `window.prompt` directly
// console.log('User Input:', userInput);

// using HTML input element
let username;
document.getElementById('submit').onclick = function() {
username = document.getElementById('name').value; // there's an input element with id 'username'
console.log(`HELLO ${username}`);
document.getElementById('greeting').textContent = `HELLO ${username}`; // Displaying the greeting in an element with id 'greeting'
}


// Type Conversion
// String to Number
let strNumber = "123";
let num = Number(strNumber); // Converts string to number
console.log(num); // 123

// Number to String
let numToStr = String(num); // Converts number to string
console.log(numToStr); // "123"

// Boolean to String
let boolValue = true;
let boolToStr = String(boolValue); // Converts boolean to string
console.log(boolToStr); // "true"

// String to Boolean
// Non-empty strings are truthy, empty strings are falsy
let strValue = "Hello";
let strToBool = Boolean(strValue); // Converts string to boolean
console.log(strToBool); // true

// Empty string to boolean
let emptyStr = "";
let emptyStrToBool = Boolean(emptyStr); // Converts empty string to boolean
console.log(emptyStrToBool); // false

let x = "pizza";
let y = "pizza";
let z = "pizza";

console.log(Number(x)); // NaN (Not a Number, because "pizza" cannot be converted to a number)
console.log(String(y)); // "pizza" (string remains unchanged)
console.log(Boolean(z)); // true (non-empty string is truthy)

// Constants
const PI = 3.14; // Constant value for Pi
console.log('Value of PI:', PI);


// MATH OBJECT
console.log(Math.PI); // Value of Pi
console.log(Math.E); // Euler's number
console.log(Math.sqrt(16)); // Square root of 16
console.log(Math.pow(2, 3)); // 2 raised to the power of 3
console.log(Math.max(1, 2, 3, 4, 5)); // Maximum value
console.log(Math.min(1, 2, 3, 4, 5)); // Minimum value
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(4.7)); // Rounds down to the nearest integer


// if-else if - else statement
let age = 18;
if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// switch statement
let day = 3; // 1 for Monday, 2 for Tuesday, etc.
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}


// Checked property of checkbox
let checkbox = document.getElementById('myCheckbox'); // Assuming there's a checkbox with id 'myCheckbox'
checkbox.onclick =function() {
    if (checkbox.checked) {
        console.log("Checkbox is checked.");
    } else {
        console.log("Checkbox is unchecked.");
    }
}

// Ternary Operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";

//String Methods
let str = "Hello, World!";
console.log(str.length); // Length of the string
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.indexOf("World")); // Index of substring "World"
console.log(str.slice(0, 5)); // Extract substring from index 0 to 5
console.log(str.replace("World", "JavaScript")); // Replace "World" with "JavaScript"
console.log(str.split(", ")); // Split string into an array using ", " as the delimiter
console.log(str.trim()); // Remove leading and trailing whitespace
console.log(str.startsWith("Hello")); // Check if string starts with "Hello"
console.log(str.endsWith("!")); // Check if string ends with "!"
console.log(str.includes("World")); // Check if string contains "World"
console.log(str.charAt(0)); // Get character at index 0
console.log(str.charCodeAt(0)); // Get ASCII code of character at index 0
console.log(str.concat(" How are you?")); // Concatenate another string
console.log(str.repeat(2)); // Repeat the string 2 times
console.log(str.search("World")); // Search for substring "World" and return its index
console.log(str.match(/World/)); // Match substring "World" using regex
console.log(str.lastIndexOf("o")); // Last index of character "o"
console.log(str.localeCompare("Hello, World!")); // Compare two strings lexicographically
console.log(str.padStart(20, "*")); // Pad the string to a length of 20 with "*" at the start
console.log(str.padEnd(20, "*")); // Pad the string to a length of 20 with "*" at the end


// Method chaining :// Method chaining allows you to call multiple methods on a string in a single line
// This is useful for performing multiple operations on a string without creating intermediate variables.
let chainedString = "   Hello, World!   "
    .trim() // Remove whitespace
    .toUpperCase() // Convert to uppercase
    .replace("WORLD", "JavaScript") // Replace "WORLD" with "JavaScript"
    .slice(0, 15); // Extract substring from index 0 to 15
console.log(chainedString); // "HELLO, JAVASCRIPT"


//logical operators
let a = true;
let b = false;
// AND operator
console.log(a && b); // false (both must be true for the result to be true)
// OR operator
console.log(a || b); // true (at least one must be true for the result to be true)
// NOT operator
console.log(!a); // false (negates the value of a)


// Loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
    if (i === 3) {
        console.log("Breaking the loop at i =", i);
        break; // Breaks the loop when i is 2
    }
    if (i === 4) {
        console.log("Skipping iteration at i =", i);
        continue; // Skips the current iteration when i is 3
    }
}

// while loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}

// do-while loop
let k = 0;
do {
    console.log("Do-While Loop Iteration:", k);
    k++;
}while (k < 5);


// functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Karan')); // Calling the function with an argument


// Arrays
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // Output the array
console.log(fruits.length); // Length of the array
console.log(fruits[0]); // Accessing the first element of the array
console.log(fruits[1]); // Accessing the second element of the array
console.log(fruits[2]); // Accessing the third element of the array
console.log(fruits.indexOf('banana')); // Index of 'banana' in the array
console.log(fruits.includes('cherry')); // Check if 'cherry' is in the array
console.log(fruits.join(', ')); // Join the array elements into a string
console.log(fruits.push('orange')); // Add 'orange' to the end of the array
console.log(fruits); // Output the updated array
console.log(fruits.pop()); // Remove the last element from the array
console.log(fruits); // Output the updated array after pop
console.log(fruits.shift()); // Remove the first element from the array
console.log(fruits); // Output the updated array after shift
console.log(fruits.unshift('kiwi')); // Add 'kiwi' to the beginning of the array
console.log(fruits); // Output the updated array after unshift
console.log(fruits.splice(1, 1)); // Remove the second element from the array
console.log(fruits.sort()); // Output the updated array after splice
console.log(fruits.reverse()); // Reverse the order of the array elements
console.log(fruits.slice(1, 3)); // Extract a portion of the array from index 1 to 3


//spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2]; // Combine two arrays using spread operator
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]   

let maxi = Math.max(...combinedArray); // Find the maximum value in the combined array using spread operator
console.log(maxi); // Output: 6

let mini = Math.min(...combinedArray); // Find the minimum value in the combined array using spread operator
console.log(mini); // Output: 1

let name_ = "Karan";
let chars = [...name_]; // Convert string to array of characters using spread operator
console.log(chars); // Output: ['K', 'a', 'r', 'a', 'n']


// rest parameter : // The rest parameter allows you to represent an indefinite number of arguments as an array
// It is useful when you want to create a function that can accept any number of arguments.

function summ(...numbers) { // Using rest parameter to accept multiple arguments
    console.log('Numbers:', numbers); // Output the array of numbers
    let result = 0;
    for (let n of numbers){ // Iterate over each number in the array
        result = result + n // Increment each number by 1
        console.log('Sum:', result); // Output the Sum of number
    }
    console.log(...numbers) // Spread operator to log each number individually

}
let x1 = 1, x2 = 2, x3 = 3, x4 = 4, x5 = 5;
summ(x1, x2, x3, x4, x5); // Creating an array with the numbers


// CALLBACKS

fun1(fun2); // Passing fun2 as a callback to fun1
// A callback is a function that is passed as an argument to another function

function fun1(callback){
    console.log('Function 1 is called');
    callback();
}

function fun2(){
    console.log('Function 2 is called');
}


//with arguments

fun3(fun4, 5, 10); // Passing fun4 as a callback to fun3 with arguments 5 and 10

function fun3(callback, arg1, arg2) {
    console.log('Function 3 is called');
    let result = arg1 + arg2; // Perform some operation with the arguments
    callback(arg1, arg2 ,result); // Passing arguments to the callback function
}

function  fun4(a, b,res) {
    console.log('Function 4 is called with arguments:', a, b, res);
    console.log('Sum of', a, 'and', b, 'is:', res); // Output the result
}


// fun4(fun5, fun6, fun7, 5, 10); // Passing fun4, fun5, fun6 as callbacks to fun3

// function fun4(cb1, cb2, cb3, arg1, arg2) {
//     console.log('Function 3 is called');
//     let result = arg1 + arg2;

//     cb1(arg1, arg2, result);  // Call first callback
//     cb2(result);              // Call second callback
//     cb3();                    // Call third callback (just for some extra fun)
// }

// function fun5(a, b, res) {
//     console.log('Function 4 called with:', a, b, res);
//     console.log(`Sum of ${a} and ${b} is: ${res}`);
// }

// function fun6(res) {
//     console.log('Function 5 called with result only:', res);
//     console.log(`Double of result is: ${res * 2}`);
// }

// function fun7() {
//     console.log('Function 6 says: Karan, you nailed this! 💥🔥');
// }

//-------------------------------------

//for each : [element, index, array] => { ... }
// The forEach method executes a provided function once for each array element
// It is commonly used to iterate over arrays and perform operations on each element.

function printElement(element, index, array) {
    console.log(`Element at index ${index} is: ${element}`); // Output each element with its index
    console.log('Full array:', array); // Output the full array
}   
// Using forEach to iterate over an array
let fruitsArray = ['apple', 'banana', 'cherry'];
fruitsArray.forEach(printElement); // Passing the printElement function as a callback to forEach
// Using an anonymous function with forEach
fruitsArray.forEach(function(element, index, array) {
    console.log(`Element at index ${index} is: ${element}`); // Output each element with its index
    console.log('Full array:', array); // Output the full array
});


//foreach loop
let numbers = [1, 2, 3, 4, 5];  
numbers.forEach(function(num) {
    console.log('Number:', num); // Output each number in the array
});
// Arrow Functions
let square = (x) => x * x; // Arrow function to calculate square of a number
console.log('Square of 5:', square(5)); // Output: Square of 5: 25
// Arrow function with multiple parameters
let add = (a, b) => a + b; // Arrow function to add two numbers
console.log('Sum of 5 and 10:', add(5, 10)); // Output: Sum of 5 and 10: 15
// Arrow function with no parameters
let greetUser = () => console.log('Hello, User!'); // Arrow function to greet the user
greetUser(); // Output: Hello, User!
// Arrow function with a single parameter
let double = x => x * 2; // Arrow function to double a number
console.log('Double of 5:', double(5)); // Output: Double of 5: 10
// Arrow function with a block body
let multiply = (a, b) => {
    let result = a * b; // Calculate the product
    return result; // Return the result
};
console.log('Product of 5 and 10:', multiply(5, 10)); // Output: Product of 5 and 10: 50
// Arrow function with implicit return
let isEven = num => num % 2 === 0; // Arrow function to check if a number is even
console.log('Is 4 even?', isEven(4)); // Output: Is 4 even? true
// Arrow function with default parameters
// let greet = (name = 'Guest') => console.log(`Hello, ${name}!`); // Arrow function with default parameter
// greet(); // Output: Hello, Guest!
// greet('Karan'); // Output: Hello, Karan!

// Arrow function with rest parameters
let sumAll = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0); // Sum all numbers using reduce
};
console.log('Sum of 1, 2, 3, 4, 5:', sumAll(1, 2, 3, 4, 5)); // Output: Sum of 1, 2, 3, 4, 5: 15
// Arrow function with destructuring
let person = { name: 'Karan', age: 25 }; // Object with properties
let displayPerson = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`); // Destructure and display properties
};
displayPerson(person); // Output: Name: Karan, Age: 25
// Arrow function with array destructuring
let numbersArray = [1, 2, 3]; // Array with numbers
let displayNumbers = ([first, second, third]) => {
    console.log(`First: ${first}, Second: ${second}, Third: ${third}`); // Destructure and display array elements
};
displayNumbers(numbersArray); // Output: First: 1, Second: 2, Third: 3

//----------------------------------------------------------------------------------------------------------

//map method:

let squaredNumbers = numbersArray.map(num => num * num); // Square each number using map
console.log('Squared Numbers:', squaredNumbers); // Output: Squared Numbers: [1, 4, 9, 16, 25]

// map as callback function

// function square(num) {
//     return num * num; // Function to square a number
// }
// let numbersArray2 = [1, 2, 3, 4, 5]; // Another array of numbers
// let squaredNumbers2 = numbersArray2.map(square); // Use map with the square function

console.log('Squared Numbers 2:', squaredNumbers); // Output: Squared Numbers 2: [1, 4, 9, 16, 25]
// map with objects
let users = [
    { name: 'Karan', age: 25 },
    { name: 'John', age: 30 },
    { name: 'Jane', age: 28 }
]; // Array of user objects
let userNames = users.map(user => user.name); // Extract names from user objects using map
console.log('User Names:', userNames); // Output: User Names: ['Karan', 'John', 'Jane']

// map with arrow function
let userAges = users.map(user => user.age); // Extract ages from user objects using arrow function
console.log('User Ages:', userAges); // Output: User Ages: [25, 30, 28]

//--------------------------------------------------------------------------------

// filter method:
let evenNumbers = numbersArray.filter(num => num % 2 === 0); // Filter even numbers using filter    
console.log('Even Numbers:', evenNumbers); // Output: Even Numbers: [2, 4]
// filter with objects
let users2 = [
    { name: 'Karan', age: 25 },
    { name: 'John', age: 30 },
    { name: 'Jane', age: 28 }
]; // Array of user objects
let adults = users2.filter(user => user.age >= 30); // Filter users with age >= 30
console.log('Adults:', adults); // Output: Adults: [{ name: 'John', age: 30 }]
// filter with arrow function
let youngUsers = users2.filter(user => user.age < 30); // Filter users with age < 30
console.log('Young Users:', youngUsers); // Output: Young Users: [{ name: 'Karan', age: 25 }, { name: 'Jane', age: 28 }]
// filter with multiple conditions


let specificUsers = users2.filter(user => user.age >= 25 && user.name.startsWith('K')); // Filter users with age >= 25 and name starting with 'K'

function displayUsers(user){
    return user.name.startsWith('K'); // Display users whose names start with 'K'
}

let people =users2.filter(displayUsers); // Output: Users whose names start with K: [{ name: 'Karan', age: 25 }]
console.log(people);
// filter with empty array


//---------------
// reduce method: reduce is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum all numbers using reduce

//----------------------------------------------------------------

//Function Declaration: A function declaration is a way to define a function in JavaScript. It is hoisted, meaning it can be called before it is defined in the code.
function multiply2(a, b) {
    return a * b; // Function to multiply two numbers
}

//Function expression: A function expression is a way to define a function in JavaScript. It can be assigned to a variable, passed as an argument, or returned from another function.
let multiply3 = function(a, b) {
    return a * b; // Function to multiply two numbers
};  

//Arrow function: An arrow function is a concise way to write a function in JavaScript. It uses the arrow syntax (=>) and does not have its own 'this' context.
// same as lambda function in python
let multiply4 = (a, b) => a * b; // Arrow function to multiply two numbers
// arrow function syntax: (parameters) => { ...code... } 


//------------------------------------

//Objects: Objects are collections of key-value pairs in JavaScript. They can store data and functions as properties.
// this: The 'this' keyword refers to the current object in JavaScript. It is used to access properties and methods of the object.(not work with arrow functions)
let per = {
    name: 'Karan',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // Using 'this' to access object properties
    }
};
// Accessing object properties
console.log(per.name); // Output: Karan

// COnstrucotr Function: A constructor function is a special type of function in JavaScript that is used to create objects. It is called with the 'new' keyword, and it initializes the properties of the object.   
function Person_obj(name, age) {
    this.name = name; // Assigning name to the object
    this.age = age; // Assigning age to the object
    this.greet = function() { // Adding a method to the object
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}


// Creating an object using the constructor function
let person1 = new Person_obj('Karan', 25); // Creating a new object using the Person constructor       
console.log(person1.name); // Output: Karan
console.log(person1.age); // Output: 25

//-----------------------------------------------------------------------------
// Classes: Classes are a way to create objects in JavaScript using a more structured syntax. They were introduced in ES6 and provide a cleaner way to define object-oriented code. 
class Person_class {
    constructor(name, age) { // Constructor method to initialize properties
        this.name = name; // Assigning name to the object
        this.age = age; // Assigning age to the object
    }
    
    greet() { // Method to greet
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object using the class
let person2 = new Person_class('Karan', 25); // Creating a new object using the Person_class constructor

//static methods: Static methods are methods that belong to the class itself rather than to instances of the class. They are called on the class itself, not
// on instances of the class. Static methods are often used for utility functions that do not require access to instance properties.
Person_class.staticMethod = function() { // Static method defined on the class
    console.log('This is a static method.');
};
// Calling the static method
Person_class.staticMethod(); // Output: This is a static method.
// Accessing object properties
console.log(person2.name); // Output: Karan
console.log(person2.age); // Output: 25
// Calling the greet method
person2.greet(); // Output: Hello, my name is Karan and I am 25 years old.
// Inheritance: Inheritance allows one class to inherit properties and methods from another class. This promotes code reuse and establishes a parent-child relationship between classes.
class Employee extends Person_class { // Employee class inherits from Person_class
    constructor(name, age, position) {
        super(name, age); // Calling the parent class constructor
        this.position = position; // Assigning position to the object
    }
    greet() { // Overriding the greet method
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.position}.`);
    }
}
// Creating an object using the Employee class  

let employee1 = new Employee('Karan', 25, 'Software Engineer'); // Creating a new object using the Employee constructor
console.log(employee1.name); // Output: Karan
console.log(employee1.age); // Output: 25
console.log(employee1.position); // Output: Software Engineer
// Calling the greet method
employee1.greet(); // Output: Hello, my name is Karan, I am 25 years old, and I work as a Software Engineer.
// Polymorphism: Polymorphism allows methods to be defined in a way that they can be used in different contexts. In JavaScript, this is often achieved through method overriding.
// In the Employee class, the greet method is overridden to provide a different implementation than the one in the Person_class.
// This allows the Employee class to have its own version of the greet method while still inheriting from the Person_class.
// Encapsulation: Encapsulation is the practice of bundling data and methods that operate on that data within a single unit (class). It restricts direct access to some of an object's components, which can prevent the accidental modification of data.
// In JavaScript, encapsulation can be achieved using classes and methods. By defining properties and methods within a class, you can control access to them.
// In the Person_class and Employee class, properties like name, age, and position are encapsulated within the class.
// This means that they can only be accessed through methods defined in the class, promoting better data integrity and encapsulation.
//----------------------------------------------------------------------------------------------------------

//destrructuring assignment: Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a more concise way to extract values from complex data structures.
// Array Destructuring
let numbersArray3 = [1, 2, 3]; // Array of numbers
let [first, second, third] = numbersArray3; // Destructuring the array into variables
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
// Object Destructuring
let person3 = { name: 'Karan', age:
    25 }; // Object with properties
let { nam, ag } = person3; // Destructuring the object into variables
console.log(nam); // Output: Karan
console.log(ag); // Output: 25
// Nested Destructuring 
let nestedObject = {
    user: {
        name: 'Karan',
        age: 25
    },
    address: {
        city: 'Delhi',
        country: 'India'
    }
}; // Nested object 
let {
    user: { name: userName, age: userAge },
    address: { city, country }
} = nestedObject; // Destructuring nested object
console.log(userName); // Output: Karan
console.log(userAge); // Output: 25

//destructuring in function parameters
function displayUser({ name, age }) { // Destructuring in function parameters
    console.log(`Name: ${name}, Age: ${age}`); // Output the name and age
}
let user = { name: 'Karan', age: 25 }; // User object
displayUser(user); // Calling the function with the user object
// Destructuring with default values
function displayUserWithDefaults({ name = 'Guest', age = 18 } = {}) { // Destructuring with default values
    console.log(`Name: ${name}, Age: ${age}`); // Output the name and age
}
let userWithDefaults = {}; // Empty object

//------------------------------------------------

//dates
let currentDate = new Date(); // Create a new Date object with the current date and time
console.log('Current Date:', currentDate); // Output the current date and time
console.log('Year:', currentDate.getFullYear()); // Output the current year
console.log('Month:', currentDate.getMonth() + 1); // Output the current month (0-indexed, so add 1)
console.log('Date:', currentDate.getDate()); // Output the current date of the month
console.log('Hours:', currentDate.getHours()); // Output the current hour
console.log('Minutes:', currentDate.getMinutes()); // Output the current minutes
console.log('Seconds:', currentDate.getSeconds()); // Output the current seconds
console.log('Milliseconds:', currentDate.getMilliseconds()); // Output the current milliseconds
console.log('Day of the Week:', currentDate.getDay()); // Output the current day of the week (0 = Sunday, 1 = Monday, etc.)
// Formatting the date
let formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}); // Format the date to MM/DD/YYYY
console.log('Formatted Date:', formattedDate); // Output the formatted date
// Formatting the time
let formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}); // Format the time to HH:MM:SS AM/PM
console.log('Formatted Time:', formattedTime); // Output the formatted time
// Creating a specific date
let specificDate = new Date('2023-10-01T12:00:00'); // Create a Date object for a specific date and time
console.log('Specific Date:', specificDate); // Output the specific date
// Comparing dates
let date1 = new Date('2023-10-01'); // Create a Date object for October 1, 2023
let date2 = new Date('2023-10-02'); // Create a Date object for October 2, 2023
if (date1 < date2) {
    console.log('Date 1 is earlier than Date 2'); // Output if date1 is earlier than date2
}
else if (date1 > date2) {
    console.log('Date 1 is later than Date 2'); // Output if date1 is later than date2
} else {
    console.log('Date 1 is the same as Date 2'); // Output if date1 is the same as date2
}
// Date arithmetic
let tomorrow = new Date(); // Create a new Date object for the current date
tomorrow.setDate(currentDate.getDate() + 1); // Set the date to tomorrow
console.log('Tomorrow:', tomorrow); // Output the date for tomorrow
// Getting the timestamp
let timestamp = currentDate.getTime(); // Get the timestamp (milliseconds since January 1, 1970)
console.log('Timestamp:', timestamp); // Output the timestamp
// Converting timestamp to date
let dateFromTimestamp = new Date(timestamp); // Create a Date object from the timestamp
console.log('Date from Timestamp:', dateFromTimestamp); // Output the date from the timestamp

// Date methods
console.log('Current Date:', currentDate); // Output the current date
console.log('Current Year:', currentDate.getFullYear()); // Output the current year
console.log('Current Month:', currentDate.getMonth() + 1); // Output the current month (0-indexed, so add 1)
console.log('Current Date of the Month:', currentDate.getDate()); // Output the current date of the month
console.log('Current Day of the Week:', currentDate.getDay()); // Output the current day of the week (0 = Sunday, 1 = Monday, etc.)
console.log('Current Hours:', currentDate.getHours()); // Output the current hour
console.log('Current Minutes:', currentDate.getMinutes()); // Output the current minutes
console.log('Current Seconds:', currentDate.getSeconds()); // Output the current seconds
console.log('Current Milliseconds:', currentDate.getMilliseconds()); // Output the current milliseconds
console.log('Current Timezone Offset:', currentDate.getTimezoneOffset()); // Output the timezone offset in minutes
// Setting a specific date
currentDate.setFullYear(2023, 9, 1); // Set the date to October 1, 2023 (months are 0-indexed)
console.log('Updated Date:', currentDate); // Output the updated date
// Getting the UTC date
let utcDate = new Date(Date.UTC(2023, 9, 1, 12, 0, 0)); // Create a UTC date for October 1, 2023 at 12:00:00
console.log('UTC Date:', utcDate); // Output the UTC date


//-------------

//SetTimeout and SetInterval 
//setTimeout: The setTimeout function is used to execute a function after a specified delay (in milliseconds). syntax: setTimeout(function, delay, arg1, arg2, ...)
let timeout = 5000; // Timeout in milliseconds (5 seconds)

// setInterval(() => {
//     console.log('This message will be logged every 2 seconds');
// }, 2000); // setInterval is used to repeatedly execute a function at specified intervals (in milliseconds)  
// // clearTimeout and clearInterval are used to stop the execution of setTimeout and setInterval respectively
// let timeoutId = setTimeout(() => {
//     console.log('This message will be logged after 5 seconds');
// }, 5000); // Set a timeout to log a message after 5 seconds
// clearTimeout(timeoutId); // Clear the timeout to prevent the message from being logged
// let intervalId = setInterval(() => {
//     console.log('This message will be logged every 3 seconds');
// }, 3000); // Set an interval to log a message every 3 seconds
// clearInterval(intervalId); // Clear the interval to stop the repeated logging


//----------------------------------------------------------------------------------------------------------------------------------------------

//Synchronuos :Synchronous code is executed in a sequential manner, meaning each line of code is executed one after the other.
// Asynchronous: Asynchronous code allows certain operations to be executed in the background, enabling other code to run 
              // without waiting for the operation to complete. This is often used for tasks like network requests or timers.
              //can handle using callbacks, promises, and async/await syntax.

// Example of synchronous code
console.log('Start'); // This will be executed first
console.log('Middle'); // This will be executed second
console.log('End'); // This will be executed last

// Example of asynchronous code using setTimeout
setTimeout(() => {
    console.log('This message is logged after 2 seconds'); // This will be executed after 2 seconds
}, 2000); // The code below will continue executing without waiting for this timeout
console.log('This message is logged immediately'); // This will be executed immediately



//example using callbacks
function task1(callback) {
    setTimeout(() => {console.log('Task 1 is completed');callback()},3000);
    // Call the callback function after Task 1 is completed
}
function task2() {
    console.log('Task 2 is completed');
}

task1(task2); // Call task1 and pass task2 as a callback function


//---------------------------------------------------------------------------------------------

//Error handling: Error handling is the process of responding to and managing errors that occur during the execution of a program.
//In JavaScript, errors can be handled using try-catch blocks, which allow you to catch and handle exceptions gracefully.

try {
    // Code that may throw an error
    let result = riskyFunction(); // Call a function that may throw an error
    console.log('Result:', result); // Output the result if no error occurs
}
catch (error) {
    // Handle the error
    console.error('An error occurred:', error.message); // Output the error message
}       
function riskyFunction() {
    throw new Error('This is a simulated error'); // Simulate an error
}
// Finally block: The finally block is executed after the try-catch block, regardless of whether an error occurred or not.
try {
    // Code that may throw an error
    let result = riskyFunction(); // Call a function that may throw an error
    console.log('Result:', result); // Output the result if no error occurs
}
catch (error) {
    // Handle the error
    console.error('An error occurred:', error.message); // Output the error message
}
finally {
    console.log('This block is always executed'); // This will always be executed
}
// Custom error handling: You can create custom error classes to handle specific types of errors in your application.
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = 'CustomError'; // Set the name of the error
    }
}
function riskyFunctionWithCustomError() {
    throw new CustomError('This is a custom error'); // Simulate a custom error
}
try {
    // Code that may throw a custom error
    let result = riskyFunctionWithCustomError(); // Call a function that may throw a custom error
    console.log('Result:', result); // Output the result if no error occurs
}
catch (error) {
    // Handle the custom error
    if (error instanceof CustomError) {
        console.error('A custom error occurred:', error.message); // Output the custom error message
    } else {
        console.error('An unexpected error occurred:', error.message); // Output any other unexpected errors
    }
}


//-----------------------------------------
// DOM: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing you to manipulate the content and structure of a web page dynamically.
// Selecting elements: You can select elements from the DOM using various methods like getElementById, getElementsByClassName, querySelector, etc.
let element = document.getElementById('myElement'); // Select an element by its ID
let elements = document.getElementsByClassName('myClass'); // Select elements by their class name
let elementsByTag = document.getElementsByTagName('div'); // Select elements by their tag name
let firstElement = document.querySelector('.myClass'); // Select the first element that matches the CSS selector
let allElements = document.querySelectorAll('.myClass'); // Select all elements that match the CSS selector

//DOM Navigation: You can navigate through the DOM tree using properties like parentNode, childNodes, nextSibling, previousSibling, etc.
let parentElement = element.parentNode; // Get the parent element of the selected element   
let childElements = element.childNodes; // Get all child nodes of the selected element
let firstChild = element.firstChild; // Get the first child node of the selected element
let lastChild = element.lastChild; // Get the last child node of the selected element
let nextSibling = element.nextSibling; // Get the next sibling node of the selected element
let previousSibling = element.previousSibling; // Get the previous sibling node of the selected element


// Manipulating elements: You can manipulate the content and attributes of DOM elements using properties like innerHTML, textContent, className, etc.
element.innerHTML = 'New Content'; // Change the inner HTML of the element
element.textContent = 'New Text'; // Change the text content of the element
element.className = 'newClass'; // Change
// the class name of the element
element.setAttribute('data-custom', 'value'); // Set a custom attribute on the element
element.style.color = 'red'; // Change the style of the element
element.style.backgroundColor = 'yellow'; // Change the background color of the element
// Adding and removing elements: You can create new elements and add them to the DOM, or remove existing elements.
let newElement = document.createElement('div'); // Create a new div element
newElement.textContent = 'This is a new element'; // Set the text content of the new element
document.body.appendChild(newElement); // Add the new element to the body of the document
let existingElement = document.getElementById('existingElement'); // Select an existing element
if (existingElement) {
    existingElement.remove(); // Remove the existing element from the DOM
}



// EVents: Events are actions or occurrences that happen in the browser, such as clicks, key presses, or form submissions. You can listen for events and respond to them using event listeners.
// Adding an event listener: You can add an event listener to an element to respond to a specific event.
element.addEventListener('click', event =>{
    event.target.console.log('Element clicked!'); // Log a message when the element is clicked
});

// Removing an event listener: You can remove an event listener from an element to stop responding to a specific event.
function handleClick(event) {
    console.log('Element clicked!'); // Log a message when the element is clicked
}
element.addEventListener('click', handleClick); // Add the event listener
element.removeEventListener('click', handleClick); // Remove the event listener
// Event propagation: Events can propagate through the DOM tree, allowing you to handle events at different levels of the hierarchy.
element.addEventListener('click', event => {
    console.log('Element clicked!'); // Log a message when the element is clicked
    event.stopPropagation(); // Stop the event from propagating to parent elements
});
// Event delegation: You can use event delegation to handle events on a parent element and respond to events on its child elements.
document.body.addEventListener('click', event => {
    if (event.target.matches('.childElement')) { // Check if the clicked element matches the selector
        console.log('Child element clicked!'); // Log a message when a child element is clicked
    }
});

// Event object: The event object contains information about the event that occurred, such as the target element, type of event, and more.
element.addEventListener('click', event => {
    console.log('Event type:', event.type); // Log the type of event
    console.log('Target element:', event.target); // Log the target element of the event
    console.log('Mouse coordinates:', event.clientX, event.clientY); // Log the mouse coordinates when the event occurred
});

// Preventing default behavior: You can prevent the default behavior of an event, such as preventing a form submission or a link navigation.
element.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default behavior of the event
    console.log('Default behavior prevented!'); // Log a message when the default behavior is prevented
});
// Event bubbling and capturing: Events can bubble up from child elements to parent elements (bubbling) or be captured from parent elements to child elements (capturing).
element.addEventListener('click', event => {
    console.log('Bubbling phase: Element clicked!'); // Log a message during the bubbling phase
}, false); // false indicates bubbling phase

element.addEventListener('mousehover', event => {
    console.log('Capturing phase: Element hovered!'); // Log a message during the capturing phase
}, true); // true indicates capturing phase
// Event listeners with multiple events: You can add multiple event listeners to the same element for different events. 
element.addEventListener('click', event => {
    console.log('Element clicked!'); // Log a message when the element is clicked
});
element.addEventListener('mouseover', event => {
    console.log('Mouse over the element!'); // Log a message when the mouse hovers over the element
});
// Event listeners with options: You can pass options to the event listener, such as whether it should be passive or capture the event.
element.addEventListener('scroll', event => {
    console.log('Element scrolled!'); // Log a message when the element is scrolled
}, { passive: true }); // The passive option indicates that the event listener will not call preventDefault()
// Event listeners with once option: You can use the once option to ensure that the event listener is called only once and then removed automatically.
element.addEventListener('click', event => {
    console.log('Element clicked once!'); // Log a message when the element is clicked
}, { once: true }); // The once option ensures the listener is called only once


//---------------------------------------------------------------------------------------------

//Nodelist: A NodeList is a collection of nodes in the DOM. It can be obtained by methods like querySelectorAll, getElementsByClassName, etc. A NodeList is similar to an array but does not have all the array methods.
let nodeList = document.querySelectorAll('.myClass'); // Get a NodeList of elements with the class 'myClass'
nodeList.forEach(node => {
    console.log(node.textContent); // Log the text content of each node in the NodeList
}
); // Output the text content of each node in the NodeList
// Converting NodeList to Array: You can convert a NodeList to an array using Array.from or the spread operator.
let nodeArray = Array.from(nodeList); // Convert NodeList to an array using Array.from
let nodeArray2 = [...nodeList]; // Convert NodeList to an array using the spread operator
nodeArray.forEach(node => {
    console.log(node.textContent); // Log the text content of each node in the array
}); // Output the text content of each node in the array
// Accessing individual nodes: You can access individual nodes in a NodeList using indexing, similar to arrays.
let firstNode = nodeList[0]; // Access the first node in the NodeList
console.log(firstNode.textContent); // Output the text content of the first node

//nodelist methods: NodeLists have some methods like forEach, item, and length that allow you to iterate over the nodes and access their properties.
console.log('Number of nodes in NodeList:', nodeList.length); // Output the number of nodes in the NodeList
nodeList.forEach(node => {
    console.log('Node text content:', node.textContent); // Log the text content of each node in the NodeList
}); // Output the text content of each node in the NodeList
// Using the item method to access a specific node
let secondNode = nodeList.item(1); // Access the second node in the NodeList using the item method
console.log('Second node text content:', secondNode.textContent); // Output the text content of the second node
// Checking if a NodeList is empty: You can check if a NodeList is empty by checking its length property.
if (nodeList.length === 0) {
    console.log('NodeList is empty'); // Output if the NodeList is empty
}
else {
    console.log('NodeList is not empty'); // Output if the NodeList is not empty
}
// Filtering nodes in a NodeList: You can filter nodes in a NodeList using the Array filter method after converting it to an array.
let filteredNodes = Array.from(nodeList).filter(node => node.textContent.includes('Karan')); // Filter nodes that contain 'Karan' in their text content
console.log('Filtered nodes:', filteredNodes); // Output the filtered nodes
// Converting NodeList to an array and using map to extract text content
let textContentArray = Array.from(nodeList).map(node => node.textContent); // Convert NodeList to an array and extract text content

//------------

//classList: The classList property of an element returns a live DOMTokenList collection of the class attributes of the element. It provides methods to manipulate the classes of an element easily.
let elementWithClasses = document.getElementById('myElement'); // Select an element with multiple classes
// Adding a class: You can add a class to an element using the add method of classList.
elementWithClasses.classList.add('newClass'); // Add a new class to the element
// Removing a class: You can remove a class from an element using the remove method of classList.
elementWithClasses.classList.remove('oldClass'); // Remove an existing class from the element
// Toggling a class: You can toggle a class on an element using the toggle method of classList.
elementWithClasses.classList.toggle('toggleClass'); // Toggle a class on the element (add if not present, remove if present)
// Checking if a class exists: You can check if an element has a specific class using the contains method of classList.
if (elementWithClasses.classList.contains('newClass')) {
    console.log('Element has the class "newClass"'); // Output if the element has the class
}
else {
    console.log('Element does not have the class "newClass"'); // Output if the element does not have the class
}
// Getting all classes: You can get all the classes of an element as an array using the classList property.
let allClasses = Array.from(elementWithClasses.classList); // Convert classList to an array
console.log('All classes:', allClasses); // Output all classes of the element
// Iterating over classes: You can iterate over the classes of an element using forEach.
elementWithClasses.classList.forEach(className => {
    console.log('Class name:', className); // Output each class name
}); // Log each class name of the element
// Replacing a class: You can replace an existing class with a new class using the replace method of classList.
elementWithClasses.classList.replace('oldClass', 'newClass'); // Replace 'oldClass' with 'newClass'

//----------------------------------------------------------------------------------------------------

//promises: Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected.
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulate a successful operation
    if (success) {
        resolve('Operation was successful'); // Resolve the promise with a success message
    } else {
        reject('Operation failed'); // Reject the promise with an error message
    }
}
); // Create a new promise
// Handling promise resolution: You can handle the resolution of a promise using the then method.
myPromise.then(result => {
    console.log(result); // Output the result if the promise is resolved
}).catch(error => {
    console.error(error); // Output the error if the promise is rejected
}); // Handle the promise resolution and rejection
// Chaining promises: You can chain multiple promises together using the then method.
let anotherPromise = myPromise.then(result => {
    console.log('Chained promise:', result); // Output the result of the first promise
    return 'Chained operation was successful'; // Return a new value for the next promise
}
); // Chain another promise
anotherPromise.then(result => {
    console.log(result); // Output the result of the chained promise
}).catch(error => {
    console.error(error); // Output any error that occurs in the chain
}); // Handle the resolution and rejection of the chained promise
// Handling multiple promises: You can handle multiple promises simultaneously using Promise.all or Promise.allSettled.
let promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000); // Resolve after 1 second
}); 
let promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000); // Resolve after 2 seconds
}); // Create another promise
Promise.all([promise1, promise2]).then(results => {
    console.log('All promises resolved:', results); // Output the results of all promises when they are resolved
}).catch(error => {
    console.error('One or more promises failed:', error); // Output any error that occurs in the promises
}); // Handle the resolution and rejection of multiple promises

// Using Promise.allSettled to handle multiple promises

Promise.allSettled([promise1, promise2]).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Promise fulfilled:', result.value); // Output the value of fulfilled promises
        } else {
            console.error('Promise rejected:', result.reason); // Output the reason for rejected promises
        }
    });
}); // Handle the resolution and rejection of multiple promises with their statuses

//------------------------------------------------------------------------------------------------------------------------------------------------


// async/await: The async/await syntax is a more concise way to work with promises. It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.

async function asyncFunction() {
    try {
        let result = await myPromise; // Wait for the promise to resolve
        console.log('Async function result:', result); // Output the result of the promise
    } catch (error) {
        console.error('Async function error:', error); // Output any error that occurs in the async function
    }
} // Define an async function
asyncFunction(); // Call the async function


async function todo() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => resolve('Todo completed'), 2000); // Simulate a todo operation that resolves after 2 seconds
        });
        console.log(result); // Output the result of the todo operation
    } catch (error) {
        console.error('Todo error:', error); // Output any error that occurs in the todo operation
    }
} // Define an async function for a todo operation
 // Call the todo function

async function todoall(){
await todo(); // Call the async function to execute the todo operation
await todo(); // Call the async function again to execute the todo operation again
}
todoall(); // Call the function to execute the todo operations sequentially

