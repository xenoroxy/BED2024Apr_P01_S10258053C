## Step 5: Implementing GET Book Functionality

This step dives into creating models and controllers for handling GET requests related to books in your enhanced Books API:

**1. Models Folder and Book Class (models/book.js):**

- Create a folder named `models` inside your project directory.
- Inside the `models` folder, create a file named `book.js` with the following code:

```javascript
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static async getAllBooks() {
    const connection = await sql.connect(dbConfig);

    const sqlQuery = `SELECT * FROM Books`; // Replace with your actual table name

    const request = connection.request();
    const result = await request.query(sqlQuery);

    connection.close();

    return result.recordset.map(
      (row) => new Book(row.id, row.title, row.author)
    ); // Convert rows to Book objects
  }

  static async getBookById(id) {
    const connection = await sql.connect(dbConfig);

    const sqlQuery = `SELECT * FROM Books WHERE id = @id`; // Parameterized query

    const request = connection.request();
    request.input("id", id);
    const result = await request.query(sqlQuery);

    connection.close();

    return result.recordset[0]
      ? new Book(
          result.recordset[0].id,
          result.recordset[0].title,
          result.recordset[0].author
        )
      : null; // Handle book not found
  }
}

module.exports = Book;
```

**Explanation:**

- This code defines a `Book` class that represents a book entity with properties for `id`, `title`, and `author`.
- The class includes two static methods:
  - `getAllBooks`: This method retrieves all book records from the "Books" table using a `SELECT *` query. It establishes a connection, executes the query, parses the results, and returns an array of `Book` objects constructed from the retrieved data. Finally, it closes the connection.
  - `getBookById`: This method retrieves a specific book by its ID using a parameterized query to prevent SQL injection vulnerabilities. It takes an `id` parameter, connects to the database, executes the query with the provided ID, and returns either a `Book` object if found or `null` if not found. It also closes the connection upon completion.

**2. Controllers Folder and booksController.js:**

- Create a folder named `controllers` inside your project directory.
- Inside the `controllers` folder, create a file named `booksController.js` with the following code:

```javascript
const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving books");
  }
};

const getBookById = async (req, res) => {
  const bookId = parseInt(req.params.id);
  try {
    const book = await Book.getBookById(bookId);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving book");
  }
};

module.exports = {
  getAllBooks,
  getBookById,
};
```

**Explanation:**

- This code defines a controller object with functions for handling GET requests related to books.
- `getAllBooks`: This function utilizes the `Book.getAllBooks` method to retrieve all books. It catches potential errors and sends appropriate error responses to the client.
- `getBookById`: This function retrieves a book by ID using the `Book.getBookById` method. It parses the `id` from the request parameters, checks for successful retrieval, and sends either the retrieved book object or a "Book not found" response with a 404 status code.

**3. Integrating Controllers and Routes in app.js:**

- In your `app.js` file, here's how to integrate the controllers and define routes in your `app.js` file:

```javascript
const express = require("express");
const booksController = require("./controllers/booksController");
const sql = require("mssql");
const dbConfig = require("./dbConfig");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port

// Routes for GET requests (replace with appropriate routes for update and delete later)
app.get("/books", booksController.getAllBooks);
app.get("/books/:id", booksController.getBookById);

app.listen(port, async () => {
  try {
    // Connect to the database
    await sql.connect(dbConfig);
    console.log("Database connection established successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    // Terminate the application with an error code (optional)
    process.exit(1); // Exit with code 1 indicating an error
  }

  console.log(`Server listening on port ${port}`);
});

// Close the connection pool on SIGINT signal
process.on("SIGINT", async () => {
  console.log("Server is gracefully shutting down");
  // Perform cleanup tasks (e.g., close database connections)
  await sql.close();
  console.log("Database connection closed");
  process.exit(0); // Exit with code 0 indicating successful shutdown
});
```

**Explanation:**

- We import the `booksController` module that contains the functions for handling GET requests.
- We define routes for the two GET functionalities:
  - `/books`: This route maps to the `getAllBooks` function in the `booksController`. Upon receiving a GET request to this route, the controller function will be invoked to retrieve all book records.
  - `/books/:id`: This route with a dynamic parameter `:id` maps to the `getBookById` function. The controller function will extract the ID from the request parameters and use it to retrieve the corresponding book record.

**Testing with Postman:**

1. Start your Node.js application using `node app.js`.
2. Open Postman or a similar HTTP client tool.
3. **Get All Books (`/books`):**

   - Make a GET request to `http://localhost:3000/books`.
   - If successful, you should receive a response with a JSON array containing all book objects from your database.

4. **Get Book by ID (`/books/:id`):**
   - Make a GET request to `http://localhost:3000/books/1`.
   - If successful, you should receive a response with a JSON object representing the retrieved book.
   - If the book with the provided ID doesn't exist, you should receive a 404 "Not Found" response.

By implementing these steps, you've established a mechanism to handle GET requests for fetching all books and retrieving a specific book by ID using your Node.js API with database integration. You can extend this functionality in the next steps to include functionalities for creating, updating, and deleting book records.

**Understanding the concepts here!**

**1. result.recordset in the mssql Package**

In the `mssql` package for Node.js, the `result.recordset` property holds the actual data retrieved from your SQL Server database after executing a query. It's a core aspect of interacting with query results:

- **Structure:** The `result.recordset` is an array of JavaScript objects.
- **Object Mapping:** Each object in the array represents a single row returned by the SQL query.
- **Property Mapping:** The properties of each object in the array correspond to the column names from the queried table.
- **Example:**

```javascript
const sqlQuery = "SELECT id, title, author FROM Books";
const request = connection.request();
const result = await request.query(sqlQuery);

console.log(result.recordset); // Array of objects representing book rows
console.log(result.recordset[0]); // First object (first row)
console.log(result.recordset[0].id); // Accessing the "id" property from the first row
```

**Importance:**

The `result.recordset` provides the essential data extracted from the database. You can iterate through this array to process each row of results and extract the desired information.

**2. Unchanged Controller Code and MVC**

The fact that the controller code remains unchanged from the Week 3 practical highlights a key benefit of the Model-View-Controller (MVC) design pattern:

- **Separation of Concerns:** MVC promotes separation of concerns by dividing the application into distinct layers:

  - **Model:** Represents data and business logic (e.g., `Book` class)
  - **View:** Handles presentation and user interface (not directly involved here)
  - **Controller:** Receives requests, interacts with the model, and prepares responses

- **Reusable Controller Logic:** In this scenario, the controller logic in `booksController.js` focuses on handling HTTP requests related to books. It doesn't rely on specific database implementation details.
- **Database Abstraction:** The `Book` class acts as a model layer abstraction. It interacts with the database using generic methods (`getAllBooks`, `getBookById`) that can be implemented differently depending on the chosen database technology (e.g., using `mssql` for SQL Server in this case).

By following the MVC pattern, you've achieved:

- **Reusable code:** The controller logic can be reused with different database technologies as long as the model layer (`Book` class) provides the necessary functionalities.
- **Maintainability:** Separation of concerns makes the code easier to understand, maintain, and test.

In the next steps, you can focus on modifying the model layer (`Book` class) to implement functionalities like creating, updating, and deleting books. You can keep the controller logic unchanged from the Week 3 practical.
