## Step 7: Create Validation Middleware (middlewares/validateBook.js)

1. **Create a new folder:** Make a new directory named `middlewares` inside your project directory.

2. **Create `validateBook.js` file:** Inside the `middlewares` folder, create a file named `validateBook.js`. This file will house the validation logic using Joi.

3. **Install Joi:** If you haven't already, install the Joi package using npm or yarn:

   ```bash
   npm install joi
   ```

4. **Write Validation Logic:** Add the following code to `middlewares/validateBook.js`:

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

- We import the `Joi` library for schema validation.
- The `validateBook` function is a middleware that intercepts requests.
- It defines a Joi schema object that specifies the expected structure and validation rules for book data.
  - `title`: Required string with a minimum length of 3 and a maximum length of 50.
  - `author`: Required string with a minimum length of 3 and a maximum length of 50.
- The `validate` function validates the request body (`req.body`) against the schema.
- The `abortEarly: false` option ensures that all errors are collected and reported.
- If validation fails, an error response with a status code of 400 (Bad Request) is sent, along with an array of error messages.
- The `return` statement terminates the middleware execution to prevent further processing of the request.
- If validation passes, the `next()` function is called, allowing the request to proceed to the next route handler in the chain.
- Finally, we export the `validateBook` function to be used in other parts of the application.
