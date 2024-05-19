## Week 6 Practical - Step 4: Building User Management Functionalities with MSSQL

This step focuses on building the User controller and model with functions for CRUD operations, interacting directly with the MSSQL library. We'll leverage your existing Books API implementation and structure for guidance.

**Project Structure:**

- You already have the `models` and `controllers` folders. We will build on top of these existing folders.

**1. User Model (models/user.js):**

- Create `user.js` file in the `models` folder
- Inside `models/user.js`, define the `User` class with properties like `id` (unique identifier), `username`, and `email`.
- Include methods for each CRUD operation using the MSSQL library:
  - **createUser(user):** This function should:
    - Connect to the MSSQL database using your connection details.
    - Create a SQL INSERT statement to insert the user data (`user` object) into the Users table.
    - Execute the query using the MSSQL library and handle any errors.
    - Retrieve the newly created user's information (e.g., using SELECT statement after insertion) and return the user object.
    - Close the connection to the database.
  - **getAllUsers():** This function should:
    - Connect to the MSSQL database.
    - Create a SQL SELECT statement to retrieve all user data from the Users table.
    - Execute the query using the MSSQL library and handle any errors.
    - Return an array of user objects constructed from the retrieved data.
    - Close the connection to the database.
  - **getUserById(id):** This function should:
    - Connect to the MSSQL database.
    - Create a SQL SELECT statement to retrieve a specific user by ID from the Users table.
    - Execute the query using the MSSQL library and handle any errors.
    - Return the user object (or `null` if not found).
    - Close the connection to the database.
  - **updateUser(id, updatedUser):** This function should:
    - Connect to the MSSQL database.
    - Create a SQL UPDATE statement to update the user information for the specified ID, using the provided `updatedUser` data.
    - Execute the query using the MSSQL library and handle any errors.
    - Return a success message or updated user information (optional).
    - Close the connection to the database.
  - **deleteUser(id):** This function should:
    - Connect to the MSSQL database.
    - Create a SQL DELETE statement to delete the user with the specified ID from the Users table.
    - Execute the query using the MSSQL library and handle any errors.
    - Return a success message (or handle deletion failure).
    - Close the connection to the database.

**2. User Controller (controllers/usersController.js):**

- Create `usersController.js` file in the `controllers` folder
- Inside `controllers/usersController.js`, import the `User` class from `models/user.js`.
- Define functions for each CRUD operation, calling the corresponding methods from the `User` model:
  - **createUser(req, res):** This function should:
    - Extract user data from the request body.
    - Call the `User.createUser` method to save the new user.
    - Upon successful creation, return a success response with the created user data.
    - Handle potential errors during user creation and return appropriate error responses.
  - **getAllUsers(req, res):** This function should:
    - Call the `User.getAllUsers` method to retrieve all users.
    - Upon successful retrieval, return a response with the list of user objects.
    - Handle potential errors during user retrieval and return appropriate error responses.
  - **getUserById(req, res):** This function should:
    - Extract the user ID from the request parameter.
    - Call the `User.getUserById` method to find the user.
    - If found, return a response with the user object.
    - If not found, return a not-found error response.
    - Handle potential errors during user retrieval and return appropriate error responses.
  - **updateUser(req, res):** This function should:
    - Extract the user ID and updated data from the request.
    - Call the `User.updateUser` method to update the user information.
    - Upon successful update, return a success response.
    - Handle potential errors during user update and return appropriate error responses.
  - **deleteUser(req, res):** This function should:
    - Extract the user ID from the request parameter.
    - Call the `User.deleteUser` method to delete the user.
    - Upon successful deletion, return a success response.
    - Handle potential errors during user deletion and return appropriate error responses.

**3. Main Application (app.js):**

- Go to the `app.js` file
- Import the `usersController` from `controllers/usersController.js`.
- Define routes for user functionalities
- For each route, call the corresponding function from the `usersController` instance, passing the request and response objects (similar structure to your Books API routes).

**Example Route (app.js):**

```javascript
// existing code above
const usersController = require("./controllers/usersController");

// ... existing code in between

app.post("/users", usersController.createUser); // Create user
app.get("/users", usersController.getAllUsers); // Get all users
app.get("/users/:id", usersController.getUserById); // Get user by ID
app.put("/users/:id", usersController.updateUser); // Update user
app.delete("/users/:id", usersController.deleteUser); // Delete user

// ... existing code after
```

**Implementation:**

We won't provide code examples for the User Model methods or the Users controller functions. Focus on building these functionalities yourself, consulting the existing Books API implementation and past practicals and documentation for guidance. Remember to implement proper error handling at each step to ensure a robust application.

**Additional Tips:**

- Continue to use prepared statements in your MSSQL queries to prevent SQL injection vulnerabilities.
- Validate user input (e.g., username format, email format) before saving data to the database.

Feel free to ask any questions or seek clarification on specific parts of the implementation process. Good luck building your User management system with MSSQL!
