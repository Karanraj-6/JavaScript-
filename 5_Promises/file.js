// Promise in JavaScript

// Definition:A Promise is an object that represents the result of an asynchronous operation.
// It can be in one of three states:
// pending → initial state, not resolved or rejected.
// fulfilled → operation completed successfully.
// rejected → operation failed.

// Promise Syntaxes:

// 1. Creating a Promise
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Task completed!");
  } else {
    reject("❌ Something went wrong!");
  }
});

// 2. Consuming with .then()
promise.then((result) => {
  console.log(result);
});

// 3. Handling Errors with .catch()
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 4. Always Running Code with .finally()
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("✨ Promise settled"));

// 5. Promise Chaining
new Promise((resolve) => resolve(10))
  .then((num) => {
    console.log(num); // 10
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 20
    return num * 3;
  })
  .then((num) => console.log(num)); // 60

// 6. Async/Await with Promise
async function runTask() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("✨ Done with async/await");
  }
}
runTask();

// 7. Promise.all() (parallel execution)
let p1 = Promise.resolve("🍎 Apple");
let p2 = Promise.resolve("🍌 Banana");
let p3 = Promise.resolve("🍇 Grapes");

Promise.all([p1, p2, p3]).then((results) => console.log(results));

// 8. Promise.race() (first one wins 🏃)
let fast = new Promise((resolve) => setTimeout(() => resolve("Fast 🏎️"), 500));
let slow = new Promise((resolve) => setTimeout(() => resolve("Slow 🚶"), 2000));

Promise.race([fast, slow]).then((result) => console.log(result));

// 9. Promise.allSettled() (waits for all, no matter success/failure)
let ok = Promise.resolve("✅ Success");
var fail = Promise.reject("❌ Failure");

Promise.allSettled([ok, fail]).then((results) => console.log(results));

// 10. Promise.any() (first successful one)
let fail = Promise.reject("❌ Fail 1");
let success = Promise.resolve("✅ Success");

Promise.any([fail, success]).then((result) => console.log(result));


// So summary:

// then → handle success.

// catch → handle failure.

// finally → run always.

// Promise.all / race / allSettled / any → handle multiple promises.

// async/await → cleaner syntax to consume promises.