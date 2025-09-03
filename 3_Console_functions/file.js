// 1. console.assert(condition, message)
// Checks if a condition is true. If false, prints the message as an error.

let age = 15;
console.assert(age >= 18, "❌ Age must be 18+");
//Output:  Assertion failed: ❌ Age must be 18+



// 2. console.clear()
// Clears the console.

console.clear();

// Output: console becomes empty.

// 3. console.count(label)
// Counts how many times it has been called with the same label.

var v="Click"
console.count(v);
console.count(v);
console.count(v);

// Output:
// Click: 1
// Click: 2
// Click: 3

// 4. console.debug(message)
// Logs a debug message (similar to log, but may be hidden by default).
console.debug("Debugging details here...");
// Output:
// Debugging details here...


// 5. console.dir(object)
// Displays an object as a JavaScript object (expandable tree).
//console.dir(document.body);
//Output: expandable list of properties of <body>.


// 6. console.dirxml(node)
// Displays a DOM node as an HTML/XML element.
//console.dirxml(document.body);
// ➡️ Output:
// <body> ... </body>


// 7. console.error(message)
// Logs an error message in red.
console.error("🔥 Something broke!");
// Output:
// Something broke!

// 8. console.group(label)
// Starts a new group of logs (indented).
console.group("User Info");
console.log("Name: Karan");
console.log("Age: 21");
console.groupEnd();

// Output (indented logs under “User Info”).
// User Info
//   Name: Karan
//   Age: 21


// 9. console.groupCollapsed(label)
// Same as group, but collapsed by default.
console.groupCollapsed("Details");
console.log("Secret: Naughty 😏");
console.groupEnd();

//Output: collapsed group (expand to see logs). in give a arrow to expand and see logs in it. in group that doesnt exsist


// 10. console.groupEnd()
// Ends the most recent group.
// (Used above with group / groupCollapsed).


//11. console.info(message)
// Logs an info message (blue "i" icon in Chrome).

console.info("ℹ️ Server started on port 3000");
// ➡️ Output:
// ℹ️ Server started on port 3000

// 12. console.log(message)
// Default log.
console.log("Hello, World!");
// ➡️ Output:
// Hello, World!

//13. console.markTimeline(label) (Deprecated)
// Old Safari method for timeline debugging. Not used now.


// 14. console.profile(label)
// Starts a performance profile (check in DevTools > Performance).
// console.profile("MyProfile");
// code to measure
// for(let i=0;i<1e6;i++){}
// console.profileEnd("MyProfile");
// Output: Profile results in DevTools (not console).

// 15. console.profileEnd(label)
// Ends the performance profile. (Used above).

// 16. console.table(data)
// Displays arrays/objects as a table.

console.table([{name:"Karan", age:21}, {name:"Julie", age:19}]);

// Output:

// (index)	name	age
// 0	Karan	21
// 1	Julie	19
// 17. console.time(label)

// Starts a timer.

// console.time("Loop Timer");
// for(let i=0;i<100000;i++){}
// console.timeEnd("Loop Timer");
// Output:
// Loop Timer: 5.6ms
// 18. console.timeEnd(label)
// Stops the timer and shows elapsed time. (Used above).

// 19. console.timeStamp(label)
// Adds a timestamp marker in the performance timeline.
// console.timeStamp("Checkpoint A");
// Visible in performance recording (not console).

// 20. console.timeline(label) (Deprecated)
// Old feature for timeline recordings. Not supported now.
// 21. console.timelineEnd(label) (Deprecated)
// Ends timeline recording.


// 22. console.trace(message)
// Shows the call stack (how code reached here).
function a(){ b(); }
function b(){ c(); }
function c(){ console.trace("Tracing!"); }
a();


// ➡️ Output:

// Tracing!
// c @ script.js:6
// b @ script.js:2
// a @ script.js:1

// 23. console.warn(message)
// Logs a warning (yellow triangle).
console.warn("⚠️ Deprecated function used");
// Output:
// ⚠️ Deprecated function used



//Summary

// Debugging → log, debug, info

// Warnings/Errors → warn, error, assert

// Organizing → group, table, dir, dirxml

// Performance → time, timeEnd, profile, count

// Tracing → trace

// Deprecated → markTimeline, timeline, timelineEnd