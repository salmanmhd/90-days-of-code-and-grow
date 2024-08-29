# 90 days of code and Grow challenge

## Day 1:

### HTML

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

### CSS

#### Flexbox Essentials

- **Main Axis**: Horizontal (by default).
- **Cross Axis**: Vertical (by default).

##### Alignment Properties

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

#### Grid

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
