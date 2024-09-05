# 90 days of code and Grow challenge

## HTML

```HTML
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <a target="_blank" href="https://google.com">Link to a new page</a>
  </body>
</html>

```

Why tags are important and use different tags when we can do all the things just by using 2 tags div and p.

- Its important to use different tags to improve SEO, for example when we use h1, it show that text is important or considered as topics, h2 for sub topics.
- Another example is for footer, below example demonstrate a better way to write good footer.

  ```html
  <footer>
    <p>near xyz, XYZ city - 12345</p>
  </footer>

  <!-- better way to write -->
  <footer>
    <address>near xyz, XYZ city - 12345</address>
  </footer>
  ```

#### Semantic HTML

Semantic HTML uses meaningful tags that describe the purpose of content. Common semantic elements include:

```html
<header>
  : Defines a header section.
  <nav>
    : Defines a navigation section.
    <main>
      : Represents the main content.
      <footer>
        : Represents a footer section.
        <article>
          : Represents a standalone piece of content.
          <section>
            : Groups related content together. ### CSS ### Extras
          </section>
        </article>
      </footer>
    </main>
  </nav>
</header>
```

## CSS

### Flexbox Essentials

- **Main Axis**: Horizontal (by default).
- **Cross Axis**: Vertical (by default).

#### Alignment Properties

- **Justify-content**: Aligns items along the main axis.
- **Align-items**: Aligns items along the cross axis.
  - Common values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

##### Other Flexbox Properties

- **Align-content**: Aligns multi-line flex containers along the cross axis.
- **Gap, Row-gap, Column-gap**: Defines space between items.

##### Flex-Wrap & Responsiveness

- **Flex-wrap**: Wraps items to the next line when space is reduced, keeping item widths intact (responsive break).

##### Flex-Grow & Flex-Shrink

- **Flex-grow**: Expands items to fill available space.
  - Works well with `min-width` and `max-width` for responsive scaling.
- **Flex-shrink**: Shrinks items when space is tight.

##### Miscellaneous

- **Align-self**: Aligns a single item independently of others.
- **`margin-right: auto;`**: Pushes the element to the far left, using available space.

### Grid

- `grid-template-columns` & `grid-template-rows`

  - Defines the number and size of columns/rows.
  - Example: `grid-template-columns: repeat(3, 1fr);`

- `grid-column-gap` / `grid-row-gap` / `gap`

  - Defines space between columns/rows. Use `gap` for shorthand.
  - Example: `gap: 20px;`

- `grid-template-areas`
  - Defines a grid template using named areas.
  - Example:
    ```css
    grid-template-areas:
      'header header header'
      'sidebar main main'
      'footer footer footer';
    ```

#### Item Properties

- `grid-column` / `grid-row`

  - Specifies how many columns/rows a grid item should span.
  - Example: `grid-column: 1 / 3;`

- `grid-area`

  - Places an item in a named grid area.
  - Example: `grid-area: header;`

- `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));` This will auto maintain the number of columns as per the width.
- `grid-template-columns: repeat(auto-fill, 250px)`

# Javascript

## Primitive Types

## Stack and heap memory

- `Stack memory` - variable get copy of value
- `Heap memory` - variable get reference as copy

- Value Types and Reference Types

  - Primitive are copied by their value
  - Objects are copied by their reference
  - So when we pass the primitive in functions their value will not be changed, as it will be copied by their value but for object it will be copied by reference.

  ```Javascript
  let a = 12;
  function abc(number) {
  number++;
  }

  abc(a);
  console.log(a); // 12

  const obj = [12, 3, 4];

  function array(arr) {
  arr.push(123);
  }
  array(obj);
  console.log(obj); // [12, 3, 4, 123]

  ```

## `Execution Context` (Call Stack, Execution context stack, program stack, control stack, runtime stack, machine stack)

Execution context is a concept that represents the environment in which Js code is executed

1. Memory creation
   - first it will assign the memory to all variable as undefined and for function it stores all the code as it is
2. Code execution
   - In the code execution it will actually run the code and if there is any function call then it will create another execution context for function which is called as `function execution context` which will again have the same thing as global execution context. FEC will be deleted after the function call

### Memory Creation

1. Javascript stores the variables as undefined and for function

- `==` with this we just check the value, Js auto type conversion can change the output as well. Like 2 == "2" -> true
- `Type coersion` can be done while checking two variables (==, >, <,)
  - implicit coersion - auto coversion. It happens when we are `comparing two numbers` or when we are `adding two variable one is number and other is string`, then the resultant will be the sum of those two numbers in String, `truthy or falsy values converting to 1 or 0`
  - explicit coersion - manual converison with the built in methods
- `===` with this we check both the value and type
- `Falsy Values` - false, 0, "", null, undefined, NaN, -0

## Expression vs. Statement

`Expression`: A piece of code that evaluates to a value (e.g., 2 + 2, "Hello", Math.max(10, 20)).
`Statement`: A piece of code that performs an action (e.g., if, for, function, let x = 5;).

## Hoisting

- Hoisting is JavaScript's default behavior of moving declarations to the top of their scope.

### Key Points

1. **Variable Hoisting**

   - `var` declarations are hoisted and initialized with `undefined`
   - `let` and `const` are hoisted but not initialized (Temporal Dead Zone)

2. **Function Hoisting**

   - Function declarations are fully hoisted
   - Function expressions are not hoisted (`const sum = a, b => a+b`)

3. **Order of Precedence**
   - Function declarations are hoisted before variable declarations

## Examples

### Variable Hoisting

```javascript
console.log(x); // Output: undefined
var x = 5;

console.log(y); // ReferenceError
let y = 10;
```

## Lexical Scoping

## Closures

**`Closure`** is function along with its lexical environment.

### Key Points

- **Encapsulation**: Closures allow private variables in JavaScript by wrapping data inside functions.
- **Persistent State**: Variables in closures persist, even when the outer function has returned.
- **Scope Chain**: The inner function maintains a reference to the variables in the outer scope.

### Uses

- Modules Design Pattern
- Currying
- functions like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more

## Functions

```javascript
function sum(num1, num2, ...num3) {
  // num3 will have all the remaining values in the form of array - [3,4,5,6,7,8]
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
```

- `this` give the current context, when used inside the functions it will all the values, etc

## Arrow functions

- When using {}, return keyword is required
- () - no return required
-

### When not to use Arrow functions:

1. Object methods
2. prototypes
3. Constructors
4. Event handlers

## IIFE

An **IIFE** is a function that is **executed immediately** after being defined. It creates a new scope to avoid polluting the global scope.

### Syntax

```javascript
(function () {
  // Code inside IIFE
})();
```

### Use Cases

1. **Avoid Global Variable Pollution**  
   Prevents variables from leaking into the global scope by encapsulating them in a local scope.

2. **Encapsulation of Code**  
   Keeps variables and functions private, avoiding naming conflicts and ensuring that the code remains isolated.

3. **Safe Initialization**  
   Executes initialization code that only needs to run once, such as configuration settings or setting up state.

4. **Modular Code**  
   Allows for the creation of self-contained modules of code that do not interfere with other parts of the application.

5. **Event-Driven Code**  
   Used to create isolated environments for event listeners, preventing variables from affecting other event handlers.

6. **Avoid Variable Hoisting Issues**  
   Since IIFEs are executed immediately, they help avoid issues with variable hoisting, ensuring variables are not misused before they are defined.

## Callback functions

## Higher Order Functions

**Higher-Order Function** is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.

### Common Use Cases

1. **Callbacks**: Passing a function as an argument to another function, e.g., in event handling or asynchronous programming.
2. **Function Composition**: Creating new functions by combining other functions.
3. **Array Methods**: Methods like `.map()`, `.filter()`, and `.reduce()` are examples of higher-order functions.

## Pure Functoions

1. Always `returns the same output`, for a given input. Not dependent on the external variables to return the output.
2. `No side-effects` -

### Example of a Pure Function:

```javascript
function add(a, b) {
  return a + b;
}
```

In this example:

- **Deterministic**: For inputs `2` and `3`, the output will always be `5`.
- **No Side Effects**: The function only computes and returns a value without altering any external state.

**Note**: _If a pure function calls a pure function this isn’t a side effect and the calling function is still pure._

## Side Effects

A **side effect** occurs when a function interacts with external states or has observable effects outside of returning a value. Common examples of side effects include:

- Modifying variables or objects outside the function scope.
- Writing or reading from external resources (e.g., databases, files).
- Manipulating the DOM or console logging.
- Triggering network requests.

### Example of a Function with Side Effects:

```javascript
let count = 0;

function increment() {
  count += 1;
  return count;
}
```

In this example:

- **Non-deterministic**: The result depends on how many times `increment()` is called.
- **Side Effect**: The global variable `count` is being modified.

## Impure functions

- DOM manipulation
- Math.random()
- new Date()
- User input
- File IO
- Network Request
-

## Mutation

**State mutation** occurs when the state (e.g., variables, objects, or arrays) in a program is directly modified or altered. In JavaScript, this can happen when you change the values of objects or arrays in place rather than creating a new version of that data.

### Example of State Mutation:

```javascript
let state = { count: 0 };

function incrementCount() {
  state.count += 1; // Mutating the state
}

incrementCount();
console.log(state.count); // Output: 1
```

In this example, the `state` object is directly modified within the `incrementCount()` function.

## Problems with State Mutation

State mutation can lead to several issues, including:

- **Unpredictability**: The state can be modified by different parts of your code, potentially leading to unpredictable outcomes.
- **Complex Testing**: Functions that mutate state are more difficult to test as they change external data.
- **Concurrency Issues**: When dealing with asynchronous programming, state mutation can cause race conditions and inconsistent states.

### Example of Asynchronous Mutation Issues:

```javascript
let state = { count: 0 };

function asyncIncrement() {
  setTimeout(() => {
    state.count += 1; // Mutating state asynchronously
    console.log(state.count);
  }, 1000);
}

asyncIncrement();
asyncIncrement();
```

Here, depending on the timing, `state.count` might not behave as expected, leading to potential concurrency issues.

### Avoiding State Mutation

#### Immutability

One way to avoid mutation is by working with **immutable data structures**, where instead of changing the existing data, `you create and return a new version of the data with the necessary changes`.

### Example of Avoiding Mutation:

```javascript
let state = { count: 0 };

function incrementCount(state) {
  return { ...state, count: state.count + 1 }; // Returning a new state object
}

let newState = incrementCount(state);
console.log(newState.count); // Output: 1
console.log(state.count); // Output: 0 (Original state remains unchanged)
```

In this case, we avoid mutation by using the spread operator to create a new object with updated values, rather than changing the existing object.

## Objects

- `Singleton` - when objects are made with constructor then it's singleton objects like `Object.create`
- `Object literals` - `const obj = {}`

### Accessing Objects:

1. `dot notaion` - we can access the values of objects using dot notaion like `student.name`
2. square brackets - this can be also used to access the objects. Even this can be more useful sometime when the key is used like `"full name": "your full name"`. Then the only option by which we can access the objects is `student["full name"]`

### Object freeze

- `Object.freeze(student)` - it is used to stop any changes further. If anyone's trying to change the values of that object then it will not change and also no error will be thrown

### Using symbol in Object

```javascript
const studetn = {
  name: 'Random Name',
  [symbol]: 'symbol Name',
};
```

- Accessing symbol: `student[symbol]`

### Combining two objects

```Javascript
  const copiedObjects = Object.assign({}, obj1, obj2);
```

- the first object is the target object and rest are source. Using a blank object in the target will be useful in avoiding mutation.

```Javascript
  const copiedObjects = {...obj1, ...obj2};
```

- This is more easy way to combine objects

### Object.create

Create new object with the existing object

### Getting key and values

```javascript
const keys = Object.keys(obj1);
const values = Object.values(obj1);
const keyValuePairInArray = Object.entries(obj1);
```

## Object Destructure

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const { firstName: name, lastName, age } = person;
```

### Call method

- This method is used to borrow functions for objects. Means we can use the functions outside objects or from other objects with `this` keyword.
- `Method 1:` using functions of other objects

```javascript
const person = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName} from  ${city}, ${country} `;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(person.fullName.call(person1, 'New York', 'USA'));
```

- `Method 2:` using normal functions

```javascript
const person1 = {
  firstName: 'Samm',
  lastName: 'Rei',
};

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
};

function fullName(city, country) {
  return `${this.firstName} ${this.lastName} from  ${city}, ${country}`;
}

console.log(fullName.call(person1, 'New York', 'USA'));
console.log(fullName.call(person2, 'New York', 'USA'));
```

### Apply method

This is similar to call method, the only difference is how we are passing the arguments. we pass the arguments as array.

```javascript
console.log(fullName.apply(person1, ['New York', 'USA']));
// we don't have to use array methods to use that elements
```

### Bind method

Bind method returns a function which we can say is attached to the object that we pass and later on we have to invoke that function

- The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value

```javascript
const details = fullName.bind(person2, 'New York', 'USA');

// now details is a new function bind to only person2, since this is a new function so when we have to use it we have invoke it
// details();
```

### Prototype Inheritance and Prototype Chain

Js attaches properties to the objects.

## Destructuring

### Object destructuring:

- The name should match with the properties of objects
- we can rename them by `objectProperties: newName`

```javascript
const obj = {
  name: 'Salman',
  address: 'New Delhi',
  hometown: 'Patna',
};

const { name, hometown } = obj;
// const { name: personName, hometown: city } = obj;
```

### Array destructuring:

- In array destructuring the index position in important

```javascript
const arr = [1, 2, 3, 4, 5];

// Destructuring the array
const [first, second, third] = arr;
```

## Rest Operator

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Destructuring the array
const [first, second, third, ...rest] = arr;
```

## Spread Operator

### Array

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const nums2 = [...nums, 9, 10, 11];
```

### Objects

Creating a copy of objects and adding properties

```javascript
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { ...obj1, hometown: 'New York', profession: 'Engineer', age: 24 };
// age will be updated to 24
```

## Reduce Method

```javascript
const totalPages = book.reduce((acc, book) => acc + book.pages, 0);
```

## Array Sorting

```javascript
const newArr = [5, 3, 7, 2, 31, 98, 90];

console.log(newArr.sort()); // this is used to sort array consists of string values, for numbers it will give wrong output as it compares the digit not the value digit

console.log(newArr.sort((a, b) => a - b));
console.log(newArr.sort((a, b) => b - a));
```

## Updating array or objects

```javascript
const updatedBooks = books.map((book) =>
  book.id === 1 ? { ...book, page: 210 } : book
);
```

## Strings

we can access the letters just like array `'str'[0]`

```Javascript
  const warning = "don't open that!";
  console.log(warning.indexOf('t'))
  console.log(warning.indexOf('open'))
  console.log(warning.lastIndexOf('open'))

  // SLICE - gives a part of string
  console.log(warning.slice(4)) // start from 4th index
  console.log(warning.slice(4, 9)) // start from 4, end at 8
  console.log(warning.slice(-1)) // start from the end


console.log(str1.trim()); // this will remove whitespaces
console.log(str1.toLowerCase())


const para = 'there are so many flowers in the garden, flowers look amazing';
console.log(a.replaceAll('flowers', 'fruits')); // replace will work only on first occurence, replace do the work as name suggest

.include("")
.startsWith("")
.endsWith("")

.split(" ") // the string will be converted to an array as space separation

.join("-") // will join the arrays separated by -
str.pasStart(25, "-"); // it will make the str length 25, fill the start with "-" in the begining of str

function maskCardNumber(cardNumber) {
  const n = cardNumber + '';
  const lastFourdigits = n.slice(-4);
  return lastFourdigits.padStart(n.length, '*');
}




```
