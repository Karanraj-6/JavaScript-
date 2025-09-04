// What is a Callback?
// A callback is just a function passed as an argument to another function, 
// so that it can be executed later (after some work is done, usually async work like fetching data, reading files, timers, etc.).


// Callback Syntaxes

// 1. Named Function as Callback

function task(callback) {
  console.log("Task started...");
  callback();
}

function done() {
  console.log("Task finished ✅");
}

task(done);

// 2. Anonymous Function as Callback


task(function() {
  console.log("Task finished (anonymous ✅)");
});

// 3. Arrow Function as Callback
task(() => {
  console.log("Task finished (arrow ✅)");
});


// 4. Callback with Parameters

function greet(name, callback) {
  console.log("Hello " + name);
  callback(name);
}

greet("Karan", (n) => {
  console.log("How are you, " + n + "?");
});



// 5. Returning Data via Callback
function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

add(5, 10, (sum) => {
  console.log("Sum is:", sum);
});


// 6. Asynchronous Callback (setTimeout)
console.log("Start");

setTimeout(() => {
  console.log("After 2 seconds ⏳");
}, 2000);

console.log("End");

// 7. Error-First Callback (Node.js style)
// Common in Node.js APIs

function readFile(filename, callback) {
  // fake example
  let error = null;
  let data = "File content here";

  if (!filename) error = "Filename missing!";
  callback(error, data);
}

readFile("myfile.txt", (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Data:", data);
  }
});

// 8. Callback Hell (Nested Callbacks 😖)

doStep1((res1) => {
  doStep2(res1, (res2) => {
    doStep3(res2, (res3) => {
      console.log("Final Result:", res3);
    });
  });
});


// ⚡ In short:

// Callback = pass function as argument.
// Can be named, anonymous, arrow, with/without params.
// Used in sync & async code.
// Too many → leads to callback hell → replaced by Promises/async-await.