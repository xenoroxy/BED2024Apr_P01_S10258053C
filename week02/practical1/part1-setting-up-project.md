### Part 1: Setting Up the Project (10 mins)

**1. Create a Project Directory:** Open your terminal and create a new directory for your project.

```
mkdir books-api
cd books-api
```

**2. Create an app.js file:** This will be our main server file.

**3. Initialize npm project:** Run npm init -y to create a package.json file for your project.

We require both express and body-parser packages.

**4. Install Express:** Use `npm install express` to install the Express framework.

**5. Install body-parser:** `Use npm install body-parser` to install the body-parser middleware.

At this point, You should have a package.json similar to this:

```
{
  "name": "book-api",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.19.2"
  }
}
```

**Note that we have both express and body-parser listed in the dependencies.**

Great! Now we are ready to move on to Part 2 of this practical.
