class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

module.exports = Book;

const books = [
    { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 2, title: "Pride and Prejudice", author: "Jane Austen" },
  ];
  
  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  
    static async getAllBooks() {
      return books; 
    }
  
    static async getBookById(id) {
      const books = await this.getAllBooks(); 
      const book = books.find((book) => book.id === id);
      return book;
    }
  
    static async createBook(newBookData) {
      const books = await this.getAllBooks(); 
      const newBook = new Book(
        books.length + 1,
        newBookData.title,
        newBookData.author
      );
      books.push(newBook); 
      return newBook;
    }
  
    static async updateBook(id, newBookData) {
      const books = await this.getAllBooks(); 
      const existingBookIndex = books.findIndex((book) => book.id === id);
      if (existingBookIndex === -1) {
        return null;
      }
  
      const updatedBook = {
        ...books[existingBookIndex],
        ...newBookData,
      };
  
      books[existingBookIndex] = updatedBook;
      return updatedBook;
    }
  
    static async deleteBook(id) {
      const books = await this.getAllBooks(); 
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) {
        return false; 
      }
  
      books.splice(bookIndex, 1);
      return true;
    }
  }
  
  module.exports = Book;