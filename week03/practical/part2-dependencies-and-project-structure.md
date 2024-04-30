## Step 2: Setting Up Dependencies and Project Structure (20 mins)

**2.1. Install Express:**

- In your terminal within the project directory (`books-api-mvc`), install the Express framework using npm:

```bash
npm install express
```

**2.2. Create Project Structure:**

- We'll organize our code using the MVC pattern for better maintainability. Create the following directory structure within your project directory:

```
books-api-mvc/
  models/ (folder to store model files)
  controllers/ (folder to store controller files)
  app.js (main entry point)
```

**Explanation:**

- We've installed `express` as a dependency for building the web API.
- The project structure separates code based on its functionality:
  - `models/` will contain files representing data structures (e.g., `book.js`).
  - `controllers/` will house functions that handle API requests and interact with models.
  - `app.js` remains the main entry point for the application.

**Next Steps:**

In the following steps, we'll create the `Book` model in the `models` directory and implement basic CRUD operations within controllers. We'll focus on server-side logic for now, assuming an in-memory data store (we can explore database interaction in future practicals).
