const sql = require("mssql");
const dbConfig = require("../dbConfig");

class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    static async getAllBooks() {
        const connection = await sql.connect(dbConfig);
        const sqlQuery = `SELECT * FROM Books`;

        const request = connection.request();
        const result = await request.query(sqlQuery);

        connection.close()

        return result.recordset.map(
            (row) => new Book(row.id, row.title, row.author)
        );
    }

    static async getBookById(id) {
        const connection = await sql.connect(dbConfig);
        const sqlQuery = `SELECT * FROM Books WHERE id = @id`;

        const request = connection.request();
        request.input("id", id);
        const result = await request.query(sqlQuery);

        connection.close();

        return result.recordset[0]
        ? new Book(
            result.recordset[0].id,
            result.recordset[0].title,
            result.recordset[0].author
        )
        :null;
    }
}

module.exports = Book;