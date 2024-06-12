
# Todo App Backend

This is the backend of the Todo application built using Node.js, Express, Prisma ORM, and PostgreSQL. It provides API endpoints for user authentication and todo management.

## Features

- User Authentication (Register/Login)
- CRUD operations for Todos
- JWT-based Authentication
- Middleware for protected routes

## Technologies Used

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Tokens)

## Project Structure

  ```
    ├── controllers
    │ ├── authController.js
    │ └── todoController.js
    ├── middleware
    │ └── auth.js
    ├── models
    │ └── prisma.schema
    ├── routes
    │ ├── authRoutes.js
    │ └── todoRoutes.js
    ├── config
    │ └── db.config.js
    ├── .env
    ├── package.json
    ├── prisma
    │ ├── migrations
    │ ├── schema.prisma
    └── server.js
  ```



## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:raushankcse/techaxlabs-backend.git
   cd backend

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up the database:**
   Ensure PostgreSQL is installed and running. Create a new database for the project.
  
4. **Configure environment variables:**
   ```bash
   DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database_name>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000

5. **Run Prisma migrations:**
   ```bash
   npx prisma migrate dev --name init

6. Start the server:
   ```bash
   npm start

