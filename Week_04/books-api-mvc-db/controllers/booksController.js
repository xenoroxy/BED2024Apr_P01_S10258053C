const Book = require("../models/book");

const getAllBooks = async (req, res) => {
    try{
        const books = await Book.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving books");
    }
};

const getBookById = async (req, res) => {
    const bookId = parseInt(req.params.id);
    try{
        const book = await Book.getBookById(bookId);
        if (!book) {
            return res.status(404).send("Book not found");
        }
        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving book");
    }
};

module.exports = {
    getAllBooks,
    getBookById
}