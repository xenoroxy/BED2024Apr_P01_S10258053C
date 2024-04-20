### Part 5: Understanding the concepts used

**Explaining Middleware, RESTful API, HTTP Methods and Status Codes**

**1. Middleware in Express:**

Middleware are functions that are executed in a chain before the actual route handler in Express. They can be used for various purposes like:

- Parsing request data: Middleware like express.json() parses incoming JSON data from requests, making it accessible in the req.body object.
- Authentication and authorization: Middleware can check for user credentials and ensure they have permission to access specific resources.
- Logging requests and responses: Middleware can log details about incoming requests and outgoing responses for debugging and monitoring purposes.
- Error handling: Middleware can handle errors that occur during request processing and send appropriate error responses.

Think of middleware as modular components that add functionality to your Express application before reaching the specific route handler for a request.

**2. RESTful API Specification:**

REST (Representational State Transfer) is an architectural style for designing APIs. It defines a set of guidelines that ensure an API is:

- Client-Server: The server provides resources, and clients request them.
- Stateless: Each request from the client to the server must contain all the information necessary to understand the request, and the server doesn't store information about the client between requests.
- Cacheable: Responses can be cached by clients or intermediate servers to improve performance.
- Layered System: Communication can be layered, allowing intermediaries like proxies or load balancers.
- Uniform Interface: Resources are identified by URIs, and standardized methods (GET, POST, PUT, DELETE) are used to interact with them.

Following these guidelines ensures your API is predictable, easy to understand, and scalable.

**3. HTTP Methods:**

HTTP methods are verbs that specify the intended action on a resource. Here are the common methods used in RESTful APIs:

- GET: Retrieves data from a resource.
- POST: Creates a new resource.
- PUT: Updates an existing resource.
- DELETE: Deletes a resource.
- PATCH: Partially updates an existing resource. (Not used in this example)

The specific method used depends on the desired operation on the resource.

**4. HTTP Status Codes:**

HTTP status codes are three-digit codes that indicate the outcome of an HTTP request. Here are some common codes used in our API:

- 200 OK: The request was successful.
- 201 Created: A new resource was created successfully. (Used in POST)
- 204 No Content: The request was successful, but there is no content to send back. (Used in DELETE)
- 400 Bad Request: The request was invalid or malformed.
- 404 Not Found: The requested resource was not found. (Used for non-existent books in PUT and DELETE)
- 500 Internal Server Error: An unexpected error occurred on the server.

By understanding these status codes, you can interpret the server's response to your API requests.

### Understanding req.body and req.params in Express

In Express applications, `req.body` and `req.params` are two important properties of the req (request) object that provide access to different parts of the incoming HTTP request data. Here's a breakdown of each:

**1. req.body:**

- Purpose: Contains the data sent in the request body. This data is typically sent using the POST, PUT, or PATCH methods and is usually formatted in JSON (JavaScript Object Notation).
- Access: Use req.body to access the request body data as a JavaScript object.

- In this example below, the POST request to /users likely includes user data in the request body (e.g., name, email). We access this data using req.body and store it in the newUser variable.

  ```
  app.post('/users', (req, res) => {
     const newUser = req.body; // newUser will be an object containing user data
     // Process newUser data (e.g., name, email)
     res.json(newUser);
  });
  ```

**2. req.params:**

- Purpose: Contains dynamic values captured from the URL path. These values are defined using route parameters with a colon (\:) prefix in your Express routes.
- Access: Use req.params as an object where each key corresponds to a parameter name defined in the route, and the value is the captured value from the URL.
- Here, the GET request to /products/:productId captures the product ID dynamically. We access this captured value using req.params.productId.

  ```
  app.get('/products/:productId', (req, res) => {
     const productId = req.params.productId; // productId will contain the value from the URL
     // Find product by id and send details
     res.json(productDetails);
  });
  ```

**Key Differences:**

| Feature       | req.body                      | req.params                                     |
| ------------- | ----------------------------- | ---------------------------------------------- |
| Purpose       | Data sent in the request body | Dynamic values captured from URL path          |
| Access method | req.body as an object         | req.params as an object with key-value pairs   |
| Typical usage | POST, PUT, PATCH requests     | paths with dynamic segments (e.g., /users/:id) |
| Data format   | Usually JSON                  | String values                                  |

**Choosing the Right Property:**

- Use req.body when your application expects data to be sent in the request body, typically for creating, updating, or patching resources.
- Use req.params when your route definition includes dynamic segments in the URL path to identify specific resources.

**Remember:**

- Middleware like express.json() is often used to parse incoming JSON data and populate req.body.
  req.params works directly with the URL path structure defined in your routes.
- By understanding req.body and req.params, you can effectively handle different types of data sent with HTTP requests in your Express applications.

These explanations provide a basic understanding of these concepts. As you continue learning about backend development, you'll delve deeper into each topic and explore their advanced functionalities.

### That's it for the practical!

_This practical is developed with the assistance of large language models_
