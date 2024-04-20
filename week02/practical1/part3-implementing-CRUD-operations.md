### Part 3: Implementing CRUD Operations (50 mins)

**1. Add the Route for Creating a Book (POST /books):**

```
app.post('/books', (req, res) => {
 const newBook = req.body; // Get the new book data from the request body
 newBook.id = books.length + 1; // Assign a unique ID
 books.push(newBook); // Add the new book to the array
 res.status(201).json(newBook); // Send created book with status code 201
});
```

**Explanation:**

- We use the POST method (app.post) to define a route for creating a new book.
- The request body contains the new book data in JSON format.
- We extract the new book data using req.body.
- We assign a unique ID to the new book based on the current array length.
- The new book is added to the books array.
- We send a response with status code 201 (Created) and the newly created book data.

**2. Route for Getting a Single Book (GET /books/:id):**

```
  app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id); // Get book ID from URL parameter
  const book = books.find(book => book.id === bookId);

  if (book) {
    res.json(book); // Send the book data if found
  } else {
    res.status(404).send('Book not found'); // Send error for non-existent book
  }
  });
```

**Explanation:**

- We use the GET method (app.get) to define a route for retrieving a single book.
- The route takes an ID parameter (/:id) to identify the book to be retrieved.
- We extract the book ID from the URL parameter using req.params.id and convert it to a number with parseInt.
- We use the find method on the books array to locate a book with the matching ID.
- If the book is found (stored in the book variable), we send the book data as a JSON response using res.json.
- If the book is not found (book is null), we send a response with status code 404 (Not Found) and an error message indicating the book wasn't found.

**3. Route for Updating a Book (PUT /books/:id):**

```
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id); // Get book ID from URL parameter
  const updatedBook = req.body; // Get updated book data from request body

  const bookIndex = books.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    updatedBook.id = bookId;
    books[bookIndex] = updatedBook; // Update book data in the array
    res.json(updatedBook); // Send updated book data
  } else {
    res.status(404).send('Book not found'); // Send error for non-existent book
  }
});
```

**Explanation:**

- We use the PUT method (app.put) to define a route for updating a book.
- Similar to the GET route for a single book, we extract the book ID from the URL parameter.
- The request body contains the updated book data in JSON format.
- We use findIndex to locate the index of the book with the matching ID in the books array.
- If the book is found (index is not -1), we update the book data in the array at the corresponding index using the provided data in req.body. We then send the updated book data as a JSON response.
- If the book is not found, we send a response with status code 404 (Not Found) and an error message.

**4. Route for Deleting a Book (DELETE /books/:id):**

```
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id); // Get book ID from URL parameter

  const bookIndex = books.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1); // Remove book from the array
    res.status(204).send(); // Send empty response with status code 204 (No Content)
  } else {
    res.status(404).send('Book not found'); // Send error for non-existent book
  }
});
```

**Explanation:**

- We use the DELETE method (app.delete) to define a route for deleting a book.
- Similar to PUT and GET for a single book, we extract the book ID from the URL parameter.
- We use findIndex to locate the index of the book with the matching ID.
- If the book is found, we use splice to remove the book from the books array at the corresponding index.
- We send an empty response with status code 204 (No Content) to indicate successful deletion.
- If the book is not found, we send a response with status code 404 (Not Found) and an error message.
