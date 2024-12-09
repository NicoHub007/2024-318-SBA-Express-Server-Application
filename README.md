# G!M | Grilling Inventory Management System

This application is a Node.js-based inventory management system for tracking meats, vegetables, and drinks. It provides RESTful routes for CRUD operations, uses JSX for views, and has a robust middleware setup for handling static files and data processing.

## Features

- RESTful API routes for managing inventory (meats, vegetables, drinks)
- JSX-based view rendering for dynamic web pages
- Middleware for:
  - Parsing request bodies
  - Method overriding
  - Serving static files
- Error handling and logging
- Modular code structure for scalability

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NicoHub007/2024-318-SBA-Express-Server-Application.git
   cd 2024-318-SBA-Express-Server-Application

Install dependencies found for package.json file.
   
Access the application at http://localhost:3000.

Usage
Adding New Items
Navigate to /api/meats/new, /api/vegetables/new, or /api/drinks/new to add new items.
Viewing Items
Visit /api/meats, /api/vegetables, or /api/drinks to view the respective inventory.
Editing Items
Use /api/meats/:id/edit, /api/vegetables/:id/edit, or /api/drinks/:id/edit to edit existing items.
Deleting Items
Submit a DELETE request to /api/meats/:id, /api/vegetables/:id, or /api/drinks/:id.
API Routes
Method	Endpoint	Description
GET	/api/meats	View all meats
GET	/api/vegetables	View all vegetables
GET	/api/drinks	View all drinks
POST	/api/meats	Add a new meat
PUT	/api/meats/:id	Update a meat by ID
DELETE	/api/meats/:id	Delete a meat by ID
Similarly, routes are available for vegetables and drinks.

Views
The application uses JSX for rendering views. Each category (meats, vegetables, drinks) has:

index.jsx: Lists all items.
new.jsx: Form for adding a new item.
edit.jsx: Form for editing an existing item.
show.jsx: Details for a specific item.
A shared default layout is defined in views/layouts/default.jsx.

Technologies Used
Node.js: Backend runtime environment.
Express.js: Web framework.
JSX View Engine: For server-side rendering.
body-parser: Parsing request bodies.
method-override: Support for HTTP verbs like PUT and DELETE.
JavaScript: Programming language.
