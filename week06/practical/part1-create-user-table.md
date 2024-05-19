## Week 6 Practical - Step 1: Create the User Database Table (Without Password Hash)

In this first step, we'll create a table in your MSSQL database to store basic user information for our book management application. We'll utilize SQL Server Management Studio (SSMS) to execute the script and create the `Users` table.

**1.1. Generate the SQL Script:**

Here's the SQL script defining the User table structure:

```sql
CREATE TABLE Users (
  id INT PRIMARY KEY IDENTITY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE
);
```

**Explanation:**

- The script checks if the `Users` table already exists. If not, it creates the table with the following columns:
  - `id`: An integer column with auto-incrementing primary key behavior for unique user identification.
  - `username`: A varchar column with a maximum length of 50 characters, marked as `NOT NULL` and `UNIQUE` for distinct usernames.
  - `email`: A varchar column with a maximum length of 100 characters, marked as `NOT NULL` and `UNIQUE` for distinct email addresses.

**1.2. Execute the Script in SSMS:**

1. Open Microsoft SQL Server Management Studio (SSMS).
2. Connect to your MSSQL database server using your login credentials.
3. In the Object Explorer window, navigate to the `bed_db` database.
4. Right-click on the database name and select "New Query" to open a query window.
5. Paste the provided SQL script into the query window.
6. Click the "Execute" button (or press F5) to run the script.

**Verification:**

- A successful execution will display a message like "Command completed successfully" in the SSMS Messages window.
- You can also verify the table creation by right-clicking on the database name, selecting "Refresh," and then expanding the "Tables" folder to see the newly created "Users" table listed.

**Important Note:**

While this step creates a basic User table, it's crucial to implement secure password hashing and storage mechanisms in a production environment. We'll address user authentication and password management in future practicals.
