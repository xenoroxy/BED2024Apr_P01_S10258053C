### Part 4: Starting the Server (10 mins)

**1. Start the server:** In your app.js file, add the following code to start the server.

```
   app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
   });
```

**2. Run the application:** In your terminal, run `node app.js`.

**3. Testing the API:**

Use tools like ==Postman== or curl to send requests to your API and test its functionality for each CRUD operation.

- **GET /books** - This should retrieve all books in the books array.
- **POST /books** - Send a JSON object with book data to create a new book.
- **PUT /books/\:id** - Replace the existing data for a specific book by sending an updated JSON object with the book ID in the URL.
- **DELETE /books/\:id** - Delete a book by providing the book ID in the URL.

**Remember: This is a simplified example using an in-memory array. In a real-world scenario, you would use a database to store book data persistently.**
