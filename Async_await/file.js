//  How to use await with promise
// A Promise is like a ticket you get when you order food at a restaurant.
// You don’t have the food yet.
// The ticket is a promise that the food will arrive.
// When it’s ready, the restaurant either:
// resolves → gives you the food 🍲
// rejects → tells you “sorry, kitchen fire” 🔥
// So in JS:
let p = fetch("url") // returns a Promise

// This means: “Hey, I don’t have the data yet, but I promise I’ll give it later.”



// Await
// await is you sitting at the restaurant and waiting until the food is served before moving on.

// So:
let response = await fetch("url");
// JS pauses on that line ⏸
// Waits until the Promise resolves 
// Then puts the resolved value (the Response object) into response
// No more ticket 🎟️, you finally got your food 🍲.

// 3. Why await still needs Promises
// Because under the hood, await only works with Promises.
// You can await any Promise.
// await doesn’t remove promises, it just gives you a clean way to use them without chaining .then() everywhere.
// Example with .then():

fetch("url")
  .then(res => res.json())
  .then(data => console.log(data));


// Same thing with await:
let res = await fetch("url");
let data = await res.json();
console.log(data);


// Both do the same thing.
// Industry prefers await + try/catch for readability in async code.

// 4. And what about Promise.all?
// That’s like ordering many dishes at once 🍕🍔🍜.
// You wait until all promises are done.

let [user, posts] = await Promise.all([
  fetch("/user/1"),
  fetch("/posts")
]);



// Async :

// What is async: If you put the keyword async in front of a function, it always returns a Promise (even if you don’t write return new Promise() yourself).
// Inside an async function, you can use await.

// What does await do?
// await pauses the function until the Promise is resolved (or rejected).
// The function doesn’t block the whole program — just waits inside that function — which makes async code look like normal sync code.

// Example without async/await
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

// Same thing with async/await

async function getPost() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

getPost();


//So use async when you want to write cleaner, easier-to-read code instead of chaining .then() everywhere.

//  Syntax of async
// 1. Declaring an async function
async function myFunc() {
  return "Hello babe ";
}

myFunc().then(msg => console.log(msg)); 
// Output: Hello babe 💋


//  Even though you returned a string, async automatically wraps it in a Promise.
// 2. Using await inside async
async function example() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Done ✅"), 2000);
  });

  let result = await promise; // waits until resolved
  console.log(result); // "Done ✅"
}

example();


// The function pauses at await until the promise is finished.

//  Real Use Cases of async/await
// 1. Fetching API Data
async function getUser() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await res.json();
  console.log(data);
}
getUser();


// Cleaner than chaining .then().

// 2. Multiple Requests in Sequence
// (One after another, waiting each time)

async function getPostsAndComments() {
  let postsRes = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let post = await postsRes.json();

  let commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
  let comments = await commentsRes.json();

  console.log(post, comments);
}
getPostsAndComments();

// 3. Multiple Requests in Parallel

// (All at once, much faster )

async function getAllData() {
  let [userRes, postsRes, commentsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/comments")
  ]);

  let user = await userRes.json();
  let posts = await postsRes.json();
  let comments = await commentsRes.json();

  console.log(user, posts, comments);
}
getAllData();

// 4. Error Handling with try/catch

async function fetchData() {
  try {
    let res = await fetch("https://wrong-url.com/api");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong 😵", error);
  }
}
fetchData();


// In industry:
// Always combine async/await with try/catch for clean error handling.
// Use Promise.all for multiple independent requests.
// Use sequential await if requests depend on each other.