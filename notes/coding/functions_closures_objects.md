# Javascript Notes for Functions, Closures,  and Objects
## Let, Var, & Const
- Variables declared by `let` are only available inside the block where they’re defined.
- Variables declared by `var` are available throughout the function in which they’re declared.
- Variables declared by `const` should not be reassigned after their initial declaration.

## Functions
**Basic Syntax:** Standard way of writing functions.
```js
function f(a,b){
    const sum = a + b;
    return sum;
}
console.log(f(1,5)); // Returns 6
```
You can use `...arg`

**Anonymous Syntax:** Variable is name of function. 
```js
var f = function(a,b){
    const sum = a  + b;
    return sum;
}
console.log(f(1,5)); // Returns 6
```

**Immediately Invoked Function Expression (IIFE):** This form of function syntax allows for the encapsulation of a variable within a new scope. 
```js
const result = (function(a,b){
    const sum = a + b;
    return sum;
})(1,5);
console.log(result); // Returns 6
```

**Arrow Syntax:** A way to declare functions. However, it is used in more unique circumstances.
```js
const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(1,5)); // Returns 6
```

Arrow syntax is different from function syntax because:
- More minimalistic. Useful for single-line functions.
- No automatic hoisting. You can use the function after it was declared. Good for readability.
- Cannot be bound to `this`, `super`, and arguments can be used as a constructor.

**Omit Return:** Shorter option for writing functions. You can omit the `return` keyword.
```js
const f = (a, b) => a + b;
console.log(f(1,5)); // Returns 6
```

## Closure
A  closure is an *inner-function* that can locate variables found in the *outer-function's* scope. 

This example is a basic demostration of a closure.

```js
// This is the outer-function. We will be using its parameter as reference.
const createName = function(first) {
    // Now lets declare an inner-function
    return function(last){
        return ( first + " " +last );
    };
}
firstName = createName("John"); // Stores the inner-function.
firstName("Doe") // Outputs "John Doe"
```

In this example, a closure is used to create a counter.
```js
// An anonymous function called 'createCounter' is created.
var createCounter = function(n) {
    // The 'n' parameter is stored in the 'count' variable. The inner-function can call back to this.
    var count = n;
    // Returns a newly declared function, and...
    return function counter() {
        //... increments the 'count' variable.
        return count++;
    };
};
const counter = createCounter(10);
counter(); // Returns 10
counter(); // Returns 11
counter(); // Returns 12
```
The first return of `n` is not incremented because `n++`  is the postfixed increment operator. If we used a prefixed increment operator `++n`, then `n` would be incremented before the return.

Here is another example of a counter that is more optimized.
```js
var createCounter = function(n) {
    return ()=> n++
};
```

## Objects & Classes
**Objects** are constructs that hold data and functions.

Here is a fun, game-like example of a function demostrates objects:
```js
// The player has two hundred dollars.
var playerMoney = 200;
// This function allows for the creation of items, as it returns an object.
function createItem(name, description, value){
    return{
        name: name,
        value: value
    };
}
// Stores the object in this variable.
const itemSoda = createItem("Soda", 50);
//The player buys the item, with its associated value subtracted from the player.
playerMoney -= itemSoda.value; // Return 150;
```
**Classes** are templates for JavaScript objects. 

Here is another version of the previous example that utilizes classes.

```js
var playerMoney = 200;
// The following code-block is a blueprint for "Item" objects.
class Item {
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
};
// Creates a new object based off the item class, and stores it inside a variable.
const itemSoda = new Item("Soda", 50)
playerMoney -= itemSoda.value; // Return 150;
```