## Step 3: Project Setup and Dependencies

This step guides you through setting up the project structure, initializing the project, and installing necessary dependencies for your Node.js application:

**1. Create Project Folder:**

- Open a terminal or command prompt window.
- Navigate to your BED Student Github development directory (e.g. BEDAPR2024_P0X_SXXXXXXXX).
- Create a folder for this week's practical:

```bash
mkdir Week_04
cd Week_04
```

- Inside the `Week_04` folder, create another folder for your Books API code with database integration:

```bash
mkdir books-api-mvc-db
cd books-api-mvc-db
```

**2. Initialize npm Project:**

- Initialize a new npm project in the current directory:

```bash
npm init -y
```

The `-y` flag tells npm to accept the default options for project initialization.

**3. Create Main Entry Point:**

- Create a file named `app.js` to serve as the main entry point for your Node.js application.

**4. Install Dependencies:**

- Use npm to install the required packages for your API:

```bash
npm install express body-parser joi mssql
```

Here's a breakdown of the installed packages:

- **express:** A popular Node.js framework for building web applications and APIs.
- **body-parser:** Middleware for parsing incoming request bodies (usually for handling form data or JSON payloads).
- **joi:** A validation library for ensuring data integrity in your API requests.
- **mssql:** The core package for connecting to and interacting with Microsoft SQL Server databases from Node.js.
  **More about the `mssql` package**

### The mssql Package for Node.js and SQL Server Integration

The `mssql` package is a popular and well-maintained Node.js library that facilitates communication between your Node.js application and Microsoft SQL Server databases. Here's a breakdown of its key aspects:

**Functionality:**

- Provides an API for connecting to SQL Server instances using various authentication methods (e.g., SQL Server logins, Windows Authentication).
- Enables execution of SQL queries (SELECT, INSERT, UPDATE, DELETE) against your SQL Server database.
- Supports parameterized queries to prevent SQL injection vulnerabilities.
- Offers functionalities for handling transactions, stored procedures, and result sets.
- Provides connection pooling to manage database connections efficiently.

**Benefits:**

- Simplifies interaction with SQL Server from your Node.js application.
- Promotes secure database access through parameterized queries and authentication options.
- Offers a robust API for various database operations.
- Manages connections efficiently with connection pooling.

**Official Package:**

You can find the official `mssql` package on the npm registry: [https://www.npmjs.com/package/mssql](https://www.npmjs.com/package/mssql)

**5. Project Structure:**

Your project directory should now look something like this:

```
Week_04/
  books-api-mvc-db/
    package.json  # npm project configuration file
    app.js         # Main entry point for your Node.js application
```

This step establishes the foundation for building your enhanced Books API with SQL Server integration in the following steps.
