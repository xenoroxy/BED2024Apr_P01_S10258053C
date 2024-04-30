## Step 6: Setting Up Express, Routes, and Connecting Controllers (app.js)

Now that we have controllers for handling CRUD operations on book data, let's create the main entry point (`app.js`) to configure Express, define routes, and connect controllers:

1. **Create the `app.js` file:**

   Create a file named `app.js` at the root of your project directory. This file will be the starting point for your application.

2. **Import Required Modules:**

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const booksController = require("./controllers/booksController"); // Import controllers
```

**Explanation:**

- We use `require` statements to import necessary modules for building our Node.js API:
  - `express`: This is the core module for building web applications using the Express.js framework.
  - `body-parser`: This middleware helps parse incoming request bodies, specifically data sent in JSON format.
  - `booksController`: This line imports the controller functions from a separate file (`./controllers/booksController.js`). We'll assume these functions handle CRUD operations (Create, Read, Update, Delete) on book data.

3. **Initialize Express App**

```javascript
const app = express();
```

**Explanation:**

- We create an instance of the Express application using `const app = express()`. This is the main object we'll use to configure routes, middleware, and other aspects of our API.

4. **Configure Middleware**

```javascript
app.use(bodyParser.json()); // Parse incoming JSON data in request body
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling
```

**Explanation:**

- We use `app.use` to configure middleware that will be applied to all incoming requests.
- Here, we use `bodyParser.json()`. This middleware intercepts incoming requests and parses any JSON data in the request body. This allows us to access book data sent in the body of POST, PUT, and PATCH requests from clients like Postman.

5. **Define Individual Routes**

```javascript
// Define individual routes for each controller function
app.get("/books", booksController.getAllBooks);
app.get("/books/:id", booksController.getBookById);
app.post("/books", booksController.createBook);
app.put("/books/:id", booksController.updateBook);
app.delete("/books/:id", booksController.deleteBook);
```

**Explanation:**

- Here's the key difference from the previous version using a router. We define individual routes for each controller function explicitly.
  - `app.get`: This defines a route that handles GET requests.
  - `app.post`: This defines a route that handles POST requests (typically for creating new data).
  - `app.put`: This defines a route that handles PUT requests (typically for updating existing data).
  - `app.delete`: This defines a route that handles DELETE requests (typically for deleting data).
- The first argument to `app.[method]` specifies the path for the route. Here, all routes are prefixed with `/api/books`.
- The second argument is a reference to the controller function that should handle requests for that route. This connects the specific function from `booksController.js` to the appropriate HTTP method and path.

**Example:**

- `app.get('/books', booksController.getAllBooks)` defines a route that handles GET requests to `/books`. When a GET request arrives at this endpoint, the `getAllBooks` function from `booksController.js` will be executed to retrieve all book data.

6. **Define Port and Start Server**

```javascript
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

**Explanation:**

- We define the port number on which our server will listen for incoming requests. You can use an environment variable (`process.env.PORT`) for flexibility or a default port (3000) in this case.
- The `app.listen` method starts the server and listens for requests on the specified port.
- The callback function logs a message to the console when the server is successfully started.

**Next Steps:**

With this `app.js` configuration, you can run the server and test the API endpoints using tools like Postman. Make sure you have the corresponding controller functions defined in `booksController.js` to handle requests as expected. These functions should interact with your `Book` model for data retrieval, creation, update, and deletion based on the chosen HTTP methods and route paths.
