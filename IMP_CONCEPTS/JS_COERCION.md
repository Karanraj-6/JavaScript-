##  Type coercion 
in JavaScript refers to the automatic or implicit conversion of values from one data type to another during operations, comparisons, or logical evaluations. This happens because JavaScript is a weakly-typed language, meaning it attempts to be flexible with data types.

There are two types of coercion in JavaScript:

1. **Implicit Coercion**: This occurs when JavaScript automatically converts a value from one type to another without explicit instructions from the developer. For example:
```javascript
console.log('5' + 5); // "55" (string concatenation)
console.log('5' - 5); // 0 (string is coerced to number)
```

2. **Explicit Coercion**: This occurs when the developer manually converts a value from one type to another using built-in functions or methods. For example:
```javascript
console.log(Number('5')); // 5 (string to number)
console.log(String(5));   // "5" (number to string)
```

Understanding type coercion is crucial for avoiding unexpected behavior in JavaScript code.

### Common Coercion Scenarios
1. **String Coercion**: When using the `+` operator with a string and another type, JavaScript converts the other type to a string.
   ```javascript
   console.log('Hello ' + 5); // "Hello 5"
   console.log('The answer is ' + true); // "The answer is true"
   ```
2. **Number Coercion**: When using arithmetic operators like `-`, `*`, `/`, JavaScript converts strings and booleans to numbers.
   ```javascript
    console.log('10' - 2); // 8
    console.log(true * 2); // 2
   ```
3. **Boolean Coercion**: In logical contexts, JavaScript converts values to booleans. Falsy values include `0`, `""` (empty string), `null`, `undefined`, `NaN`, and `false`. All other values are truthy.
   ```javascript
   console.log(Boolean(0)); // false
   console.log(Boolean("Hello")); // true
   console.log(Boolean(null)); // false
   console.log(Boolean(42)); // true
   ```
### Equality Comparisons
JavaScript has two types of equality comparisons: `==` (loose equality) and `
===` (strict equality). The `==` operator performs type coercion, while `===` does not.
```javascript
console.log(5 == '5'); // true (type coercion occurs)
console.log(5 === '5'); // false (no type coercion)
```
### Best Practices
- Use `===` and `!==` for comparisons to avoid unexpected type coercion.
- Be explicit with type conversions using `Number()`, `String()`, and `Boolean()` when necessary.
- Test and understand how different values behave in coercion scenarios to prevent bugs.
- Avoid relying on implicit coercion in complex expressions to maintain code clarity and predictability.


# JavaScript Type Coercion Master Table
1️⃣ String '3' with others
Expression	+ (concat / add)	-	*	/	%
'3' + 3	    "33"	            0	9	1	0
'3' + true	"3true"	            2	3	3	0
'3' + false	"3false"	        3	0	Infinity	NaN
'3' + null	"3null"	            3	0	Infinity	NaN
'3' + undefined	"3undefined"	NaN	NaN	NaN	NaN
'3' + NaN	"3NaN"	            NaN	NaN	NaN	NaN

2️⃣ Number 3 with others

Expression	         +	    -	*	/	%
3 + '3'	            "33"	0	9	1	0
3 + true		     4	    2	3	3	0
3 + false		     3	    3	0	Infinity	NaN
3 + null		     3	    3	0	Infinity	NaN
3 + undefined	     NaN	NaN	NaN	NaN	NaN
3 + NaN	             NaN	NaN	NaN	NaN	NaN

3️⃣ Boolean with others

Expression	         +	     -	*	/	%
true + '3'	      "true3"	NaN	NaN	NaN	NaN
false + '3'	      "false3"	NaN	NaN	NaN	NaN
true + 3	        4	-2	3	0.333..	1
false + 3	        3	-3	0	0	0
true + null	        1	1	0	Infinity NaN
false + null	    0	 0	0	NaN	NaN
true + undefined	NaN	NaN	NaN	NaN	NaN
false + undefined	NaN	NaN	NaN	NaN	NaN
true + NaN	        NaN	NaN	NaN	NaN	NaN

4️⃣ null with others

Expression	       +	    -	*	/	%
null + '3'	     "null3"    NaN	NaN	NaN	NaN
null + 3	3	  -3	     0	0	0
null + true	1	  -1	     0	0	0
null + false	   0	     0	0	NaN	NaN
null + undefined  NaN	    NaN	NaN	NaN	NaN
null + NaN	      NaN	    NaN	NaN	NaN	NaN

5️⃣ undefined with others

Expression	          +	         -	*	/	%
undefined + '3'	  "undefined3"	NaN	NaN	NaN	NaN
undefined + 3	    NaN	        NaN	NaN	NaN	NaN
undefined + true	NaN	        NaN	NaN	NaN	NaN
undefined + false	NaN	        NaN	NaN	NaN	NaN
undefined + null	NaN	        NaN	NaN	NaN	NaN
undefined + NaN	    NaN	        NaN	NaN	NaN	NaN

6️⃣ NaN with others


Expression	     +	    -	*	/	%
NaN + '3'      "NaN3"   NaN	NaN	NaN	NaN
NaN + 3	        NaN	    NaN	NaN	NaN	NaN
NaN + true	    NaN	    NaN	NaN	NaN	NaN
NaN + false	    NaN	    NaN	NaN	NaN	NaN
NaN + null	    NaN	    NaN	NaN	NaN	NaN
NaN + undefined	NaN	    NaN	NaN	NaN	NaN

⚡ Key Seduction Rules 😏:

+ with string → concatenates everything into text.

Non-string + → coerces to numbers:

true → 1, false → 0

null → 0

undefined → NaN

NaN → NaN

Any math with NaN → NaN.