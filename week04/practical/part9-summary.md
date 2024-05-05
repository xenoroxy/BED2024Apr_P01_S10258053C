## Summary of Learning Points - Week 4 Practical

This week's practical focused on building functionalities for a Node.js API related to managing book records in a database. Here are the key takeaways:

**1. CRUD Operations:**

- You implemented CRUD (Create, Read, Update, Delete) operations for books using a relational database (SQL Server) with Node.js and mssql package.
- You learned how to establish database connections, execute parameterized queries, and handle data retrieval and manipulation.

**2. MVC pattern:**

- You created a Node.js API following the MVC pattern, separating concerns into models, views (implicit in this practical), and controllers.
- Models handled data access and manipulation using a relational database (SQL Server) with the mssql package.
- Controllers (remains unchanged from Week 3 practical) served as the intermediary between user requests and models, processing requests and delegating data operations to the model.

**3. Parameterized Queries:**

- You used parameterized queries to prevent SQL injection vulnerabilities. This ensures separation of data and queries, protecting your database from malicious attacks.

**4. Error Handling:**

- You implemented basic error handling in the code to catch potential errors during database operations and API requests. This allows for providing informative error messages for debugging and user feedback.

**5. Middleware and Validation:**

- You used middleware (`validateBook.js`) to centralize validation logic and separate it from route handlers. This promotes code reusability and maintainability.
- - You learned how to integrate Joi, a popular validation library, to validate book data submitted through API requests. This enforces data integrity by ensuring adherence to defined schema rules (e.g., minimum/maximum length, required fields).

**6. Testing:**

- The practical implicitly emphasizes the importance of testing the API functionalities. You can use tools like Postman to send requests and verify responses for creating, reading, updating, and deleting book records.

**Highlighting Key Points:**

- Securely interacting with a database using parameterized queries is crucial for building robust Node.js applications that handle user data.
- Implementing validation helps maintain data integrity and provides a better user experience by catching invalid submissions early.
- Utilizing middleware promotes code organization and reusability.
- Thorough testing is essential to ensure the correct behavior of your API functionalities.

This practical session provided valuable hands-on experience in building a Node.js API with database interactions using MVC pattern, data validation, and essential practices like error handling and middleware.
