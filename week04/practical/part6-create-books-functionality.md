## Step 6: Implementing Create Book Functionality

This step focuses on adding the functionality to create a new book record in your Node.js API with SQL Server integration:

**1. Book Model (`book.js`):**

```javascript
class Book {
  // ... existing code for constructor and getBookById

  static async createBook(newBookData) {
    const connection = await sql.connect(dbConfig);

    const sqlQuery = `INSERT INTO Books (title, author) VALUES (@title, @author); SELECT SCOPE_IDENTITY() AS id;`; // Retrieve ID of inserted record

    const request = connection.request();
    request.input("title", newBookData.title);
    request.input("author", newBookData.author);

    const result = await request.query(sqlQuery);

    connection.close();

    // Retrieve the newly created book using its ID
    return this.getBookById(result.recordset[0].id);
  }
}

module.exports = Book;
```

**Explanation:**

- A new static method `createBook` is added to the `Book` class.
- This method takes a `newBookData` object containing the title and author of the new book.
- It establishes a connection to the database.
- The `sqlQuery` uses a single statement for both insertion and ID retrieval:
  - `INSERT INTO Books (title, author) VALUES (@title, @author)` inserts the new book data using parameterized queries.
  - `SELECT SCOPE_IDENTITY() AS id` retrieves the ID of the last inserted record using `SCOPE_IDENTITY()`.
- The code executes the query with parameters, retrieves the result, closes the connection.
- It then calls `getBookById` with the retrieved ID to fetch the newly created book object and return it.

**Importance of SCOPE_IDENTITY():**

- `SCOPE_IDENTITY()` is a Transact-SQL function that retrieves the identity value generated for the last INSERT statement executed within the same scope (e.g., stored procedure, trigger, or batch).

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
  const newBook = req.body;
  try {
    const createdBook = await Book.createBook(newBook);
    res.status(201).json(createdBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating book");
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};
```

**Explanation:**

- A new function `createBook` is added to the `booksController`.
- It retrieves the new book data from the request body (`req.body`).
- It calls the `Book.createBook` method with the new book data to create the book record.
- Upon successful creation, it sends a response with status code 201 (Created) and the newly created book object.
- An error handler is included to catch potential errors during creation and send an appropriate error response.

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

// ... existing code for database connection and graceful shutdown

app.listen(port, async () => {
  // ... existing code
});
```

**Explanation:**

- We import the `body-parser` module to handle JSON data from the request body.
- We use `app.use(bodyParser.json())` to parse incoming JSON requests.
- The POST route for creating books (`/books`) is defined with the `createBook` function from the controller.

**4. Testing Create Book Functionality:**

1. **Ensure your Node.js application is running:** Start your application using `node app.js` in your terminal.
2. **Use Postman to create a POST Request:**
   - In Postman, select the POST method.
   - Set the URL to `http://localhost:3000/books`.
   - Click on the "Body" tab and select "JSON" as the body type.
   - Look for the "Headers" tab. Click on the "+" button next to Headers and select "Key: Content-Type" and "Value: application/json".
3. **Prepare the JSON Data:**
   - Inside the Body section, paste the following JSON data, replacing the values with your desired book title and author:

```json
{
  "title": "Your Book Title Here",
  "author": "Your Book Author Here"
}
```

4. **Send the Request:** Click the "Send" button in Postman.

**Expected Response:**

- If successful, you should receive a response with status code 201 (Created).
- The response body should contain a JSON object representing the newly created book, including its ID, title, and author.

**Verifying Data Persistence:**

1. **Use a tool to view your database:** You can use SQL Server Management Studio (SSMS) or another tool to connect to your SQL Server database.
2. **View the "Books" table:** Navigate to the "Books" table and check if a new record has been added with the details you provided in the POST request.

**Additional Tips:**

- You can repeat the create book request with different book data to add multiple entries.
- Be sure to continue testing your Books API as we continue to add functionalities in this practical.

By following these steps, you can test the create book functionality and confirm that the book data is being persisted correctly in the database. This ensures that your Books API interacts with the database as intended for creating book records.
