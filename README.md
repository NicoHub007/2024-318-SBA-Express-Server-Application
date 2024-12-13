
# **G!M | Grilling Inventory Management System**

This application is a **Node.js-based inventory management system** for tracking meats, vegetables, and drinks. It provides **RESTful routes** for CRUD operations, uses **JSX** for views, and has a robust middleware setup for handling static files and data processing.

---

## **Features**

- **RESTful API** routes for managing inventory (**meats, vegetables, drinks**)
- **JSX-based view rendering** for dynamic web pages
- Middleware for:
  - Parsing request bodies
  - Method overriding
  - Serving static files
- Error handling and logging
- Modular code structure for scalability

---
## Base URL

The API is hosted on `localhost:3000`.

## Routes Overview

### Index Route
`GET /`
- Renders the home page (`index` view).

### Meat Routes

#### Index
`GET /api/meats`
- Fetches all meats and renders the `meats/index` view.

#### New
`GET /api/meats/new`
- Renders a form to add a new meat (`meats/New` view).

#### Create
`POST /api/meats`
- Adds a new meat to the database.

#### Edit
`GET /api/meats/:id/edit`
- Renders a form to edit an existing meat (`meats/Edit` view).

#### Update
`PUT /api/meats/:id`
- Updates an existing meat in the database.

#### Delete
`DELETE /api/meats/:id`
- Deletes a meat from the database.

#### Show
`GET /api/meats/:id`
- Displays details of a single meat (`meats/Show` view).

---

### Vegetable Routes

#### Index
`GET /api/vegetables`
- Fetches all vegetables and renders the `vegetables/index` view.

#### New
`GET /api/vegetables/new`
- Renders a form to add a new vegetable (`vegetables/New` view).

#### Create
`POST /api/vegetables`
- Adds a new vegetable to the database.

#### Edit
`GET /api/vegetables/:id/edit`
- Renders a form to edit an existing vegetable (`vegetables/Edit` view).

#### Update
`PUT /api/vegetables/:id`
- Updates an existing vegetable in the database.

#### Delete
`DELETE /api/vegetables/:id`
- Deletes a vegetable from the database.

#### Show
`GET /api/vegetables/:id`
- Displays details of a single vegetable (`vegetables/Show` view).

---

### Drink Routes

#### Index
`GET /api/drinks`
- Fetches all drinks and renders the `drinks/index` view.

#### New
`GET /api/drinks/new`
- Renders a form to add a new drink (`drinks/New` view).

#### Create
`POST /api/drinks`
- Adds a new drink to the database. The `caffeine` field is handled as a boolean.

#### Edit
`GET /api/drinks/:id/edit`
- Renders a form to edit an existing drink (`drinks/Edit` view).

#### Update
`PUT /api/drinks/:id`
- Updates an existing drink in the database. The `caffeine` field is handled as a boolean.

#### Delete
`DELETE /api/drinks/:id`
- Deletes a drink from the database.

#### Show
`GET /api/drinks/:id`
- Displays details of a single drink (`drinks/Show` view).

---

## Error Handling

Each route has error handling to respond with an appropriate status code (e.g., `500` for server errors, `400` for client errors) and log the error message to the console.

---

## Usage

Open your browser and navigate to http://localhost:3000.
Use the specified API routes for CRUD operations on meats, vegetables, and drinks.

---

## Dependencies

The API uses the following technologies (NPM modules):
- **Express**
- **Body-parser**
- **JSX**
- **Jsx-view-Engine**
- **Method-Override**
- **Path**

Ensure you have the required models (`meats`, `drinks`, and `vegetables`) set up in the `models` folder.

