## Step 1: Project Setup (15 mins)

**1.1. Create Project Directory:**

- Open your terminal or command prompt.
- Navigate to your local Github repository directory where you store your weekly practicals
- Create a new directory for this week practical using the command:

```bash
mkdir Week_03
```

- Navigate into the newly created directory:

```bash
cd Week_03
```

**Explanation:**

- The `mkdir` command creates a new directory named `Week_03` directory.
- The `cd` command allows you to navigate into that directory.

**1.2. Initialize Project:**

- Create a new directory for your project under `Week_03` using the command:

```bash
mkdir books-api-mvc
```

- Navigate into the newly created project directory:

```bash
cd books-api-mvc
```

- Initialize a new Node.js project using `npm init`:

```bash
npm init -y
```

**Explanation:**

- `npm init -y` initializes a new Node.js project and creates a `package.json` file with basic project information. The `-y` flag automatically accepts default values for prompts.

**Next Steps:**

In the following steps, we'll install the required dependency (Express) and set up the project structure for the MVC pattern. We'll focus on building the model (`Book`) and controllers for CRUD operations in this session.

**Note:** We'll cover input validation and error handling functionalities in separate practical parts to keep the focus clear on MVC implementation for now.
