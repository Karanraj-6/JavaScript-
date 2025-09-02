/*
                    1. Parent Properties
Property	                                            Description
element.parentNode	                Returns the parent node of the element (can be an element, document, or document fragment).
element.parentElement	            Returns the parent element, or null if parent is not an element (safer than parentNode for element navigation).
element.closest(selector)	        Returns the nearest ancestor that matches the selector.

                    2. Child Properties
Property	                                            Description
element.childNodes	                Returns all child nodes, including text, comment, and element nodes (NodeList).
element.children	                Returns only element children (HTMLCollection).
element.firstChild	                Returns the first child node (could be text).
element.firstElementChild	        Returns the first child element.
element.lastChild	               Returns the last child node.
element.lastElementChild	        Returns the last child element.
element.hasChildNodes()	            Returns true if the element has any child nodes.

                 3. Sibling Properties
Property	                                            Description
element.nextSibling	                Returns the next sibling node (could be text).
element.nextElementSibling	        Returns the next sibling element.
element.previousSibling	            Returns the previous sibling node.
element.previousElementSibling	    Returns the previous sibling element.

                4. Node Info & Traversal
Property/Method	                                        Description
element.nodeType	                Returns the type of the node (1 for element, 3 for text, etc.).
element.nodeName	                Returns the name of the node (e.g., DIV, SPAN).
element.contains(node)	            Returns true if node is a descendant of element. */

let div = document.getElementById("myDiv");

// Parent
console.log(div.parentNode);        // parent element
console.log(div.parentElement);     // parent element

// Children
console.log(div.childNodes);        // all child nodes
console.log(div.children);          // only element children
console.log(div.firstChild);        // first node
console.log(div.firstElementChild); // first element

// Siblings
console.log(div.nextSibling);       // next node
console.log(div.nextElementSibling);// next element


// DOM Selection Methods 
// (By ID / Class / Tag)

document.getElementById("id");            // Single element by ID
document.getElementsByClassName("class"); // HTMLCollection of elements
document.getElementsByTagName("div");     // HTMLCollection of <div> elements

// CSS Selectors
document.querySelector(".class");         // First element matching selector
document.querySelectorAll(".class");      // NodeList of all matches

/*  DOM Traversal Properties
Property	                           What it does
.parentNode / .parentElement	       Get parent
.childNodes / .children	               Get child nodes / only elements
.firstChild / .firstElementChild	   First child
.lastChild / .lastElementChild	       Last child
.nextSibling / .nextElementSibling	   Next sibling
.previousSibling / .previousElementSibling	 Previous sibling  */


// DOM Manipulation Methods
// (Create / Insert)
document.createElement("div");            // Create element
document.createTextNode("Hello");         // Create text node
parent.appendChild(child);                // Append at end
parent.insertBefore(newNode, refNode);    // Insert before another child
element.insertAdjacentHTML("beforeend", "<p>Hi</p>"); // Insert raw HTML
element.append("text or node");           // Append multiple nodes/text
element.prepend("first!");                // Insert at beginning
element.after("outside sibling");         // Insert after element
element.before("outside sibling");        // Insert before element

// Remove / Replace
parent.removeChild(child);                // Remove child
element.remove();                         // Remove itself
parent.replaceChild(newNode, oldNode);    // Replace child

// Content Manipulation
element.innerHTML = "<b>Hi</b>";          // Set HTML
element.innerText = "Hi";                 // Set visible text
element.textContent = "Hi";               // Set all text (ignores styling)

// Attributes
element.getAttribute("id");               // Get attribute
element.setAttribute("id", "newId");      // Set attribute
element.hasAttribute("id");               // Check attribute
element.removeAttribute("id");            // Remove attribute

// Classes
element.classList.add("myClass");         // Add class
element.classList.remove("myClass");      // Remove class
element.classList.toggle("myClass");      // Toggle class
element.classList.contains("myClass");    // Check class

// Styles
element.style.color = "red";              // Inline style
element.style.backgroundColor = "blue";   // CamelCase for CSS props

// Events
function handler() {
  console.log("Clicked!");
}

element.addEventListener("click", handler);  // attach
element.removeEventListener("click", handler); // detach