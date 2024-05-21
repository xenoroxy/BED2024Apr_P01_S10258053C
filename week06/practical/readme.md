## Week 6 Practical: Building User functionalities and Relationships

This week's practical focuses on building user functionalities into your existing books API application. We'll continue to use the `mssql` package to interact with your MSSQL database and establish relationships between users and books.

Here's a breakdown of the key tasks:

1. **User Database Table:**

   - You'll create a new table in your MSSQL database to store user information. This table will typically include fields like username, email, etc.

2. **User-Book Relationship Table:**

   - You'll create a separate table to represent the many-to-many relationship between users and books. This table would have foreign keys referencing both the User and Book models.

3. **User Model:**

   - You'll create a simple user model class to encapsulate user data and common operations. This can improve code organization and readability.

4. **User Controller:**

   - You'll create a separate controller file to handle user-related logic in your Express application. This controller will define functions (routes) for CRUD (Create, Read, Update, Delete) operations on users.

5. **CRUD Operations for Users:**

   - Implement functions within the User controller and User model to handle:
     - **Create:** Allow users to register by creating new user entries in the database using `INSERT` statements.
     - **Read:** Retrieve user information based on specific criteria (e.g., user ID, username) using `SELECT` statements with appropriate WHERE clauses.
     - **Update:** Enable users to modify their profile information using `UPDATE` statements.
     - **Delete:** Allow users to delete their accounts using `DELETE` statements (consider security measures).

6. **Linking User and Book Models:**
   - We'll establish a relationship between the User and Book models using raw SQL queries. Here are two approaches:
     - **Nested Queries:** You can write nested SQL queries to retrieve user data and then perform additional queries to fetch associated book information based on the retrieved user ID.
     - **Joins:** Utilize join operations (e.g., `INNER JOIN`) in your SQL queries to retrieve user information along with their associated book data in a single query, depending on your table structure and relationship design.

**Building on Week 4 & 5 Practicals:**

We'll assume you have a functional book management application built in Week 4 using Express and the `mssql` package for interacting with your MSSQL database. This week's practical extends that application by adding user functionalities and establishing relationships between users and books.

**Next Steps:**

In the following steps, we'll delve deeper into each task, providing code examples and explanations to guide you through the process of building user management with raw SQL and relationships for your MSSQL database.
