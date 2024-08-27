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
