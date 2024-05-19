## Week 6 Practical - Step 2: Designing the User-Book Relationship

In relational databases, a many-to-many relationship arises when a single record in one table can be associated with multiple records in another table, and vice versa. This is often the case for users and books. A user can have many books in their collection, and a single book can be owned or favored by multiple users.

**2.1. Representing Many-to-Many Relationships with Junction Tables:**

The primary approach to model many-to-many relationships in a relational database is by creating a separate table to represent the relationship between the two tables. This junction table typically has two foreign keys, one referencing the primary key of the user table and another referencing the primary key of the book table.

**2.2. Junction Table Design:**

For this practical, we'll focus on the junction table approach. Here's an example of a table named `UserBooks` to represent the many-to-many relationship between users and books:

```sql
CREATE TABLE UserBooks (
  id INT PRIMARY KEY IDENTITY,
  user_id INT FOREIGN KEY REFERENCES Users(id),
  book_id INT FOREIGN KEY REFERENCES Books(id)
);
```

**Explanation:**

- The `UserBooks` table has three columns:
  - `id`: An integer column with auto-incrementing primary key behavior for unique identification of each relationship record.
  - `user_id`: An integer foreign key referencing the `id` column of the `Users` table, establishing a connection between a specific user and the books associated with them.
  - `book_id`: An integer foreign key referencing the `id` column of the `Books` table (assuming you have a separate Books table), establishing a connection between a specific book and the users who have it.

**Benefits of Junction Table:**

- Explicit representation of relationships: The junction table clearly depicts the many-to-many association between users and books.
- Scalability: It's easier to manage and scale the relationship as the number of users or books increases.
- Additional Attributes (Optional): You can add additional columns to the junction table to store attributes specific to the relationship, such as reading status or rating for a user-book association.

For most scenarios involving many-to-many relationships, a junction table offers a well-understood and manageable approach.

**2.3. Execute the Script in SSMS:**

Follow these steps to create the `UserBooks` table in your `bed_db` database:

1. Open Microsoft SQL Server Management Studio (SSMS).
2. Connect to your MSSQL database server using your login credentials.
3. In the Object Explorer window, navigate to the desired database.
4. Right-click on the database name and select "New Query" to open a query window.
5. Paste the provided SQL script for the `UserBooks` table into the query window.
6. Click the "Execute" button (or press F5) to run the script.

**Note:**

In this practical, understanding the concept of junction tables is essential for modeling complex relationships in relational databases.

We'll populate your MSSQL database with sample data in the next step.
