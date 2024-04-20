### Part 2: Building the API Server (50 mins)

**1. Import Express:** Add the following line at the top of your app.js file.

```
const express = require('express');
```

**2. Instantiate the Express app:** Create an instance of the Express app using express().

```
const app = express();
```

**3. Define the Port:** Specify the port on which your server will listen for requests.

```
const port = 3000;
```

**4. In-memory Book Data:** Create an array to store book data.

```
let books = [
   { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
   { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' },
];
```

**Important! While this practical used an in-memory array for simplicity, a real-world scenario would likely use a database to store book data persistently.**

**5. Middleware:**

- Parse JSON data: Use `app.use(express.json())` to parse incoming JSON data in requests.

- Parse URL-encoded Form data: Use `app.use(bodyParser.urlencoded({ extended: true }))` to configure body-parser to handle URL-encoded form data. _Setting extended: true allows parsing of nested objects within the form data._

  ```
  // parse incoming JSON data in requests
  app.use(express.json())
  // Configure body-parser to handle URL-encoded form data
  app.use(bodyParser.urlencoded({ extended: true })); // Set extended: true for nested objects
  ```

**6. Let's create the Route for Getting All Books (GET /books):**

```
app.get('/books', (req, res) => {
   res.json(books); // Send the array of books as JSON response
});
```

**Explanation:**

- We use the GET method (app.get) to define a route for retrieving all books.
- When a GET request is made to /books, the provided function is executed.
- The function sends the books array as a JSON response using res.json.
