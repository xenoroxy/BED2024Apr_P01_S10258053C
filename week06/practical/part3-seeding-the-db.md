## Week 6 Practical - Step 3: Seeding the Database with Books, Users, and BooksUsers (Using SSMS)

In this step, we'll populate your MSSQL database with sample data for testing purposes. We'll use three tables:

- **Books:** Stores information about books (title, author)
- **Users:** Stores user information (username, email)
- **UserBooks (Junction Table):** Establishes the many-to-many relationship between users and books (user_id, book_id)

**3.1. Seeding Script:**

Create a new file named `seed.sql` in your project's root directory. This file will contain the SQL queries to insert sample data:

```sql
-- Insert sample books
INSERT INTO Books (title, author)
VALUES
  ('To Kill a Mockingbird', 'Harper Lee'),
  ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams'),
  ('Dune', 'Frank Herbert'),
  ('The Great Gatsby', 'F. Scott Fitzgerald');

-- Insert sample users
INSERT INTO Users (username, email)
VALUES
  ('user1', 'user1@example.com'),
  ('user2', 'user2@example.com'),
  ('user3', 'user3@example.com');

-- Insert relationships between users and books
INSERT INTO UserBooks (user_id, book_id)
VALUES
  (1, 1),  -- User 1 has book 1
  (1, 2),  -- User 1 has book 2
  (1, 4),  -- User 1 has book 4
  (2, 3),  -- User 2 has book 3
  (2, 5),  -- User 2 has book 5
  (3, 1),  -- User 3 has book 1
  (3, 6);  -- User 3 has book 6
```

**Explanation:**

- We've added more books (including titles and authors) to the `Books` table.
- We've increased the number of users in the `Users` table.
- The `UserBooks` table now reflects the relationships between users and the books they have. Make sure the user IDs and book IDs correspond to existing entries in their respective tables.

**3.2. Running the Script in SSMS:**

1. **Open SQL Server Management Studio (SSMS).**
2. **Connect to your MSSQL database server** using your login credentials.
3. **Navigate to the `bed_db` database** in the Object Explorer window (usually on the left side).
4. **Right-click on the database name** and select "New Query" to open a query window.
5. **Copy and paste the entire contents of your `seed.sql` file** into the query window.
6. **Click the "Execute" button** (or press F5) to run the script.

**Errors encountered and troubleshooting**

You might encounter the following error:

```
The INSERT statement conflicted with the FOREIGN KEY constraint "FK__UserBooks__book___412EB0B6".
The conflict occurred in database "bed_db", table "dbo.Books", column 'id'.
```

- Make sure that when you insert data into UserBooks table, the user id and books id do exist!

**Verification:**

- You can verify if the data has been inserted successfully by executing queries to view the contents of each table:

```sql
SELECT * FROM Books;
SELECT * FROM Users;
SELECT * FROM UserBooks;
```

We'll move on to building the User controller in the next step, where we'll implement functionalities to manage users and potentially explore options for retrieving associated books using SQL queries.
