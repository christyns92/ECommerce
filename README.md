# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Purpose of Assignment

The purpose of this assignment was to build the back end for an e-commerce site by modifying starter code. I was able to configure a working Express.js API to use Sequelize to interact with a MySQL database.

## How It Works Demo

View the walkthrough demo video here:
https://drive.google.com/file/d/1owsK--fJMu4ieDE0x79MIGnQ_2qoP0za/view


## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Grading Requirements

This homework is graded based on the following criteria: 

### Deliverables: 10%

* The GitHub repository containing your application code.

### Walkthrough Video: 37%

* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

  * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

  * Syncs Sequelize models to a MySQL database on the server start.

  * Includes column definitions for all four models outlined in the homework instructions.

  * Includes model associations outlined in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme with description and a link to a walkthrough video.

