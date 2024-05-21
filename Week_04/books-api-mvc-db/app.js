const express = require("express");
const booksController = require("./controllers/booksController");
const sql = require("mssql");
const dbConfig = require("./dbConfig");
const bodyParser = require("body-parser");
const usersController = require("./controllers/usersController");

const app = express();
const port = process.env.PORT || 3000;
const staticMiddleware = express.static("public");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(staticMiddleware);

app.get("/books", booksController.getAllBooks);
app.get("/books/:id", booksController.getBookById);
app.post("/books", validateBook, booksController.createBook);
app.put("/books/:id", booksController.updateBook);
app.delete("/books/:id", booksController.deleteBook);

app.post("/users", usersController.createUser);
app.get("/users", usersController.getAllUsers);
app.get("/users/:id", usersController.getUserById);
app.put("/users/:id", usersController.updateUser);
app.delete("/users/:id", usersController.deleteUser);

app.get("/users/search", usersController.searchUsers);
app.get("/users/with-books", usersController.getUsersWithBooks);

module.exports = router;

app.listen(port, async () => {
    try {
        await sql.connect(dbConfig);
        console.log("Database connection astablised successfully");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1)
    }

    console.log(`Server listening on port ${port}`);
});

process.on("SIGINT", async () => {
    console.log("Server is gracefully shutting down");
    await sql.close();
    console.log("Database connection closed");
    process.exit(0);
});

app.post("/books", validateBook, booksController.createBook); // POST for creating books (can handle JSON data)
app.put("/books/:id", validateBook, booksController.updateBook);