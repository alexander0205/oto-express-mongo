# Oto Express Mongo TypeScript Boilerplate

This boilerplate provides a foundational setup for an Express application interfacing with MongoDB, all written in TypeScript.

## Project Structure

```
📂 src
│
├── 📂 controllers       # Controllers to handle business logic
│
├── 📂 models            # Mongoose models for MongoDB interaction
│
├── 📂 routes            # Application routes or endpoints
│
├── 📂 interfaces        # TypeScript interfaces for type definitions
│
├── 📂 middlewares       # Middlewares for validation and formatting
│
├── 📂 utils             # Utilities, like the database connection
│
└── 📄 server.ts         # Main file to boot up the server
```

## Running the Project

### 1. Start MongoDB using Docker Compose

To streamline the process, we've included a `docker-compose.yml` file that allows you to spin up a MongoDB instance without having it installed on your machine.

To start MongoDB, simply run:

```bash
docker-compose up -d
```

This will start MongoDB on port `27017`. No authentication is required for this development instance.

### 2. Install Dependencies and Run the Server

First, install the project dependencies:

```bash
npm install
```

Then, you can start the server with:

```bash
npm start
```

The server will boot up on port `3000` (or whichever port you've set in your environment variables).
