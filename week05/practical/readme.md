## Week 5 Practical: Building a View for the Books API with Express & Front-end Development

This practical focuses on creating a user interface (UI), which acts as the "view" in the Model-View-Controller (MVC) architectural pattern, for your existing Books API built with Express.js. You'll leverage Express's static file serving to host the front-end files within the project.

### Project Goals:

- Develop a view using HTML, CSS, and JavaScript to display book data retrieved from the Books API (Model).
- Implement functionalities like fetching book data and dynamically displaying book information in the view.
- Utilize Express's static file serving to host the front-end files within the public folder (Controller plays a role here by configuring static file serving).
- Thoroughly test the application to ensure data fetching and UI updates work as expected.

## Technical Skills Covered:

- **Front-end Development:** HTML, CSS, JavaScript (Fetch API, DOM manipulation)
- **Express.js:** Static file serving
- **MVC Architecture:** Implementing the View layer
- **Testing:** Manual testing of application functionalities

**What we'll be doing in this practical:**

- Ensure your Books API is functioning correctly within your Express application.
- Modify the Express app to serve static files from the `public` folder using `app.use(express.static('public'))`.
- Create a folder named `public` within your Express project directory to hold your front-end view files:
  - `index.html`: The main HTML page for your application (View).
  - `styles.css`: Styles for the user interface (View).
  - `script.js`: JavaScript logic for fetching data and manipulating the DOM (View).
- Design the HTML structure in `index.html` to display book information (title, author, etc.) (View).
- Implement styles in `styles.css` to format the UI elements (View).
- Utilize JavaScript's Fetch API in `script.js` to fetch book data from your API endpoints (e.g., `/books`) (View).
- Parse the JSON response and dynamically populate the HTML elements with retrieved book information (View).
- Test your application thoroughly to ensure data fetching and UI updates work as expected.

### Additional Tips:

- Use a CSS framework like Bootstrap or Materialize to simplify styling (optional).
- Break down complex functionalities into smaller, manageable tasks.
- Test each step of the development process to identify and fix issues early on.

This practical allows you to solidify your understanding of the View layer in the MVC architecture and how it interacts with the existing Books API (Model) through the Controller by utilizing Express functionalities. By building a functional UI, you'll enhance the user experience of interacting with your Books API.
