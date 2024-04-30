## Practical Summary: Building a Node.js API with Express.js and CRUD Operations

In this practical, we've built the foundation for a Node.js API that manages book data using Express.js and the Model-View-Controller (MVC) architecture. Here's a summary of the key steps:

**1. Setting Up the Project:**

- Created a project directory and initialized it with `npm init -y`.
- Installed required dependencies like `express`, `body-parser` (or similar for form data parsing), and a validation library like `joi`.
- Defined models to represent data structures (e.g., `Book` model with properties like title, author).

**2. Implementing Controllers:**

- Created a `controllers` folder to organize controller logic.
- Defined controller functions for CRUD (Create, Read, Update, Delete) operations on book data:
  - `getAllBooks` to retrieve all books.
  - `getBookById` to retrieve a book by its ID.
  - `createBook` to create a new book.
  - `updateBook` to update an existing book.
  - `deleteBook` to delete a book.
- Each controller function interacts with the `Book` model (or a data access layer) to perform the desired operations.

**3. Configuring Express App (app.js):**

- Created the main entry point (`app.js`).
- Initialized the Express app using `const app = express()`.
- Configured middleware like `body-parser` to parse incoming JSON data (or form data if needed).
- Defined individual routes for each controller function directly in `app.js` using appropriate HTTP methods (GET, POST, PUT, DELETE) and paths (e.g., `app.get('/books', booksController.getAllBooks)`).
- Defined the port number for the server (e.g., `const port = process.env.PORT || 3000;`).
- Started the server using `app.listen(port, ...)` to listen for incoming requests.

**4. Validation Middleware (Optional):**

- Created a `middlewares` folder to organize validation logic.
- Implemented a middleware function using Joi to validate incoming data (e.g., title, author) for book creation requests.
- Integrated the validation middleware into specific routes in `app.js` to ensure data integrity before processing it in controller functions.

**5. Testing the API:**

- Used tools like Postman to send requests to API endpoints:
  - GET requests to retrieve data (e.g., `/books`).
  - POST requests with valid book data to create new books.
  - PUT requests with updated book data to modify existing books.
  - DELETE requests with book IDs to delete books.
- Verified that the API responds as expected based on the defined routes and controller logic, including handling errors and validation failures.

**By completing this practical, you've gained experience with essential concepts for building Node.js APIs with Express.js, including controllers, middleware, validation, and data access using models.**
