## Practical 4: Enhanced Books API with MSSQL Integration

**Objective:**

This practical session builds upon the Books API developed in Practical 3. Our goal is to enhance it by connecting to a Microsoft SQL Server Express database via the `mssql` Node.js package. This will enable our API to perform CRUD (Create, Read, Update, Delete) operations on book data using a persistent data store.

**Tasks:**

1. **Database Setup:**

   - Install Microsoft SQL Server Express on your local development machine (if not already done).
   - Create a database `bed_db` for storing book information.
   - Create the necessary database table for books (e.g., `id`, `title`, `author`).
   - Configure a dedicated SQL Server login user with appropriate permissions for your Node.js application.

2. **Node.js and mssql Integration:**

   - Install the `mssql` package in your Node.js project to interact with the SQL Server database.
   - Establish a connection to the SQL Server database using the `mssql` package and your configured connection details.
   - Implement functions to perform CRUD operations on book data:
     - **Create:** Create a new book entry in the database.
     - **Read:** Retrieve existing book information by ID or retrieve all books.
     - **Update:** Modify existing book data in the database.
     - **Delete:** Remove a book entry from the database.
   - Implement appropriate error handling and validation for user input and database operations.

3. **Testing:**

   - Continue to use Postman for testing to ensure the functionality of your CRUD operations and API endpoints.

4. **Deliverables:**

   - Updated code for the Books API with MSSQL integration.

5. **Success Criteria:**

   - A functional Books API that can perform CRUD operations on book data using a connected Microsoft SQL Server Express database.
   - Proper error handling and validation implemented throughout the application.

6. **Additional Notes:**

   - Feel free to read up about the `mssql` package (e.g., stored procedures, connection pooling).
   - Adhere to security best practices when connecting to a database and handling user data (e.g. using environmental variables .env file).

This brief outlines the key aspects of Practical 4, guiding you through the process of enhancing your Books API with SQL Server integration.
