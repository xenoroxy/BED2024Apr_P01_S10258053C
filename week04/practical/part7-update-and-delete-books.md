## Step 7: Update and Delete Book Functionalities

This step expands your Books API to include functionalities for updating and deleting book records:

**1. Book Model (`book.js`):**

```javascript
class Book {
  // ... existing code for constructor and getBookById

  static async updateBook(id, newBookData) {
    const connection = await sql.connect(dbConfig);

    const sqlQuery = `UPDATE Books SET title = @title, author = @author WHERE id = @id`; // Parameterized query

    const request = connection.request();
    request.input("id", id);
    request.input("title", newBookData.title || null); // Handle optional fields
    request.input("author", newBookData.author || null);

    await request.query(sqlQuery);

    connection.close();

    return this.getBookById(id); // returning the updated book data
  }

  static async deleteBook(id) {
    const connection = await sql.connect(dbConfig);

    const sqlQuery = `DELETE FROM Books WHERE id = @id`; // Parameterized query

    const request = connection.request();
    request.input("id", id);
    const result = await request.query(sqlQuery);

    connection.close();

    return result.rowsAffected > 0; // Indicate success based on affected rows
  }
}

module.exports = Book;
```

**2. Books Controller (`booksController.js`):**

```javascript
const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  // ... existing code
};

const getBookById = async (req, res) => {
  // ... existing code
};

const createBook = async (req, res) => {
  // ... existing code
};

const updateBook = async (req, res) => {
  const bookId = parseInt(req.params.id);
  const newBookData = req.body;

  try {
    const updatedBook = await Book.updateBook(bookId, newBookData);
    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }
    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating book");
  }
};

const deleteBook = async (req, res) => {
  const bookId = parseInt(req.params.id);

  try {
    const success = await Book.deleteBook(bookId);
    if (!success) {
      return res.status(404).send("Book not found");
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting book");
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
```

**3. app.js:**

```javascript
const express = require("express");
const booksController = require("./controllers/booksController");
const sql = require("mssql");
const dbConfig = require("./dbConfig");
const bodyParser = require("body-parser"); // Import body-parser

const app = express();
const port = 3000;

// Include body-parser middleware to handle JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling

app.get("/books", booksController.getAllBooks);
app.get("/books/:id", booksController.getBookById);
app.post("/books", validateBook, booksController.createBook); // POST for creating books (can handle JSON data)
app.put("/books/:id", booksController.updateBook); // PUT for updating books
app.delete("/books/:id", booksController.deleteBook); // DELETE for deleting books

// ... existing code for database connection and graceful shutdown

app.listen(port, async () => {
  // ... existing code
});
```

**Explanation:**

- The `Book` model gains methods for updating (`updateBook`) and deleting (`deleteBook`) book records using parameterized queries.
- The `booksController` has corresponding functions to handle update and delete requests, sending appropriate responses based on success or failure.
- `app.js` defines routes for PUT (update) and DELETE (delete) operations.

**Important! Detailed explanation of the updateBook function:**
The provided code snippet implements the `updateBook` function within the `Book` class. Here's a detailed explanation:

**Function Signature:**

```javascript
static async updateBook(id, newBookData) {
  // ... function body
}
```

- `static`: This keyword indicates a class method, meaning it can be called directly on the class itself without creating an instance of the `Book` class.
- `async`: This keyword signifies that the function is asynchronous, allowing it to handle asynchronous operations like database queries.
- `id`: This parameter represents the ID of the book to be updated.
- `newBookData`: This parameter is an object containing the updated title and author information.

**Function Body:**

```javascript
const connection = await sql.connect(dbConfig);

const sqlQuery = `UPDATE Books SET title = @title, author = @author WHERE id = @id`; // Parameterized query

const request = connection.request();
request.input("id", id);
request.input("title", newBookData.title);
request.input("author", newBookData.author);

await request.query(sqlQuery);

connection.close();

return this.getBookById(id); // returning the updated book data
```

**Explanation:**

1. **Database Connection:**

   - `const connection = await sql.connect(dbConfig);`: This line establishes a connection to the database using the `mssql` package and the configuration defined in `dbConfig`.

2. **Parameterized Query:**

   - `const sqlQuery = ...;`: This line defines the SQL query string for updating a book record. It uses parameterized queries with placeholders (`@title`, `@author`, `@id`) to prevent SQL injection vulnerabilities.

3. **Input Parameters:**

   - `request.input("id", id);`: This line sets the value for the `@id` parameter in the query using the provided `id` value.
   - `request.input("title", newBookData.title || null);`: This line sets the value for the `@title` parameter. It uses the optional chaining operator (`||`) to check if `newBookData.title` exists. If it does, it sets the parameter value. Otherwise, it sets it to `null` to handle optional updates. The same approach is used for `@author`.

4. **Executing the Query:**

   - `await request.query(sqlQuery);`: This line asynchronously executes the prepared SQL query with the set parameters.

5. **Closing Connection:**

   - `connection.close();`: This line closes the database connection to release resources.

6. **Retrieving Updated Book (Optional):**
   - `return this.getBookById(id);`: This line (commented as a consideration) retrieves the updated book record using the `getBookById` method. You can decide whether to return the updated book data or just a success/failure indication.

**Key Point: request.input**

The `request.input` method from the `mssql` package is used to set values for the defined parameters (`@id`, `@title`, `@author`) within the SQL query. This approach promotes security by separating data from the query itself, preventing potential SQL injection attacks.

By utilizing parameterized queries and `request.input`, you ensure that user-provided data is handled safely within your database interactions.
