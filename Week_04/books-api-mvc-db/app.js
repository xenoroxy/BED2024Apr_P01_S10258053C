const express = require("express");
const booksController = require("./controllers/booksController");
const sql = require("mssql");
const dbConfig = require("./dbConfig");

const app = express();
const port = process.env.PORT || 3000;

app.get("/books", booksController.getAllBooks);
app.get("/books/:id", booksController.getBookById);

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
