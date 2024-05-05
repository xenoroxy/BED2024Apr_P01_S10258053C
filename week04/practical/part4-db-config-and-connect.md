## Step 4: Database Configuration and Connection Management

This step focuses on creating a configuration file for your database credentials and setting up connection logic within your Node.js application:

**1. Create dbConfig.js:**

In the root directory of your project (`books-api-mvc-db`), create a file named `dbConfig.js` with the following content:

```javascript
module.exports = {
  user: "username", // Replace with your SQL Server login username
  password: "password", // Replace with your SQL Server login password
  server: "localhost",
  database: "bed_db",
  trustServerCertificate: true,
  options: {
    port: 1433, // Default SQL Server port
    connectionTimeout: 60000, // Connection timeout in milliseconds
  },
};
```

**Explanation:**

- This file defines an object containing your database connection details.
- Replace the placeholder values (`"username"`, etc.) with your actual SQL Server login credentials, server name, and database name.
- The `trustServerCertificate` option is set to `true` for development purposes. In production environments, consider using a more secure approach for certificate validation.
- The `options` object specifies the port (default for SQL Server) and a connection timeout value.

**2. Import and Connect in app.js:**

Import the `dbConfig` object in your `app.js` file and use it to establish the database connection during server startup:

```javascript
const express = require("express");
const sql = require("mssql"); // Assuming you've installed mssql
const dbConfig = require("./dbConfig");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port

app.listen(port, async () => {
  try {
    // Connect to the database
    await sql.connect(dbConfig);
    console.log("Database connection established successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    // Terminate the application with an error code (optional)
    process.exit(1); // Exit with code 1 indicating an error
  }

  console.log(`Server listening on port ${port}`);
});

// Close the connection pool on SIGINT signal
process.on("SIGINT", async () => {
  console.log("Server is gracefully shutting down");
  // Perform cleanup tasks (e.g., close database connections)
  await sql.close();
  console.log("Database connection closed");
  process.exit(0); // Exit with code 0 indicating successful shutdown
});
```

**Explanation:**

- We import `dbConfig` to access the database credentials.
- Inside the `app.listen` callback, we use `sql.connect(dbConfig)` to establish a connection to the database using the configuration details.
- The code attempts to connect asynchronously. If successful, it logs a confirmation message.
- An error handler is included to catch any connection errors and gracefully terminate the application with an appropriate exit code.

**3. Graceful Shutdown:**

The code utilizes the `SIGINT` signal handler to manage graceful shutdown. This signal is typically sent when you terminate the application using `Ctrl+C`.

- Upon receiving the signal, the code logs a message indicating shutdown.
- It then calls `sql.close()` to close the connection pool, releasing database resources.
- Finally, it exits the process with code 0, signifying a clean shutdown.

**Important Considerations:**

- Remember to replace the placeholder values in `dbConfig.js` with your actual credentials.
- For production environments, consider using environment variables to store sensitive information like passwords.
- You can further enhance the `dbConfig` object to include connection pooling options provided by the `mssql` package.

By implementing these steps, you've established a mechanism for configuring your database connection and managing its lifecycle within your Node.js application. This ensures a smooth connection process and proper resource cleanup during shutdown.

**4. Project Structure:**

Your project directory should now look something like this:

```
Week_04/
  books-api-mvc-db/
    package.json  # npm project configuration file
    app.js         # Main entry point for your Node.js application
    dbConfig.js   # configuration file for your database credentials
```

**5. Running the Application (node app.js):**

- In your terminal window, navigate to the root directory of your project (`books-api-mvc-db`).
- Run the following command to start your Node.js application:

```bash
node app.js
```

- If the database connection is successful, you should see the following messages in your terminal:

```
Database connection established successfully
Server listening on port 3000 (or your specified port)
```

**6. Verifying Graceful Shutdown (Ctrl+C):**

- Once you see the server listening message, press `Ctrl+C` on your keyboard to terminate the Node.js application.

- If the graceful shutdown logic works correctly, you should observe the following messages in your terminal:

```
Server is gracefully shutting down
Database connection closed
```

**Troubleshooting Tips:**

- **Connection Errors:**
  - Ensure your SQL Server instance is running and accessible from your development machine.
  - Verify that the provided database credentials (username, password) are correct and have appropriate permissions.
  - Double-check the server name and database name in your `dbConfig.js` file.
- **Firewall:**
  - Make sure your firewall allows connections to the SQL Server port (default 1433) if necessary.

If you encounter any errors during connection or shutdown, refer to the console output for clues.

By following these steps and addressing any potential issues, the learners can confirm a successful database connection and graceful shutdown functionality in their Node.js application.
