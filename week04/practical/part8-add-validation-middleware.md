## Step 8: Add validation functionality

As the final step, we add the validation functionality (implemented in Week 03 practical) for book data using Joi in your Node.js application:

**1. Middlewares Folder and validateBook.js (middlewares/validateBook.js):**

- Create a folder named `middlewares` inside your project directory.
- Inside the `middlewares` folder, create a file named `validateBook.js` with the following code:

```javascript
const Joi = require("joi");

const validateBook = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    author: Joi.string().min(3).max(50).required(),
  });

  const validation = schema.validate(req.body, { abortEarly: false }); // Validate request body

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(400).json({ message: "Validation error", errors });
    return; // Terminate middleware execution on validation error
  }

  next(); // If validation passes, proceed to the next route handler
};

module.exports = validateBook;
```

**Explanation:**

- This code defines a middleware function named `validateBook`.
- It utilizes the `Joi` library for schema-based validation of the request body.
- A schema object is defined to specify validation rules for the `title` and `author` properties:
  - `title` must be a string with a minimum length of 3 and a maximum length of 50 characters.
  - `author` must be a string with a minimum length of 3 and a maximum length of 50 characters.
  - Both properties are marked as `required`.
- The `schema.validate` method performs the validation against the request body (`req.body`).
- The `abortEarly: false` option ensures that all validation errors are collected before sending a response.
- If validation errors occur:
  - The errors are extracted and formatted into an array of messages.
  - A response with status code 400 (Bad Request) is sent, containing a message and the list of validation errors.
  - The `return` statement terminates further execution of the middleware.
- If validation succeeds, the `next()` function is called, allowing the request to proceed to the next route handler (e.g., `booksController.createBook` or `booksController.updateBook`).

**2. app.js:**

```javascript
const validateBook = require("./middlewares/validateBook");

// ... existing code

app.post("/books", validateBook, booksController.createBook); // POST for creating books (can handle JSON data)
app.put("/books/:id", validateBook, booksController.updateBook);
```

**Explanation:**

- The `validateBook` middleware is imported from the `./middlewares/validateBook` path.
- The existing routes for creating (`POST /books`) and updating (`PUT /books/:id`) books are updated to include the `validateBook` middleware before the controller functions.
- This ensures that the request body is validated against the defined schema before processing the request further.

**Key Points:**

- This approach improves data integrity by ensuring that book data submitted through API requests adheres to the specified requirements.
- Joi provides a flexible and user-friendly way to define validation rules for your API endpoints.

By incorporating this validation middleware, you enhance the robustness of your application and provide meaningful error messages to users in case of invalid book data submissions.
