# Blog App

This is a simple blog application built with Node.js, Express, and MongoDB.

## API Routes

### Users
- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `PUT /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

### Posts
- `POST /posts` - Create a new post
- `GET /posts` - Get all posts
- `GET /posts/:id` - Get a post by ID
- `PUT /posts/:id` - Update a post by ID
- `DELETE /posts/:id` - Delete a post by ID

### Comments
- `POST /comments` - Create a new comment
- `GET /comments` - Get all comments
- `GET /comments/:id` - Get a comment by ID
- `PUT /comments/:id` - Update a comment by ID
- `DELETE /comments/:id` - Delete a comment by ID

## Running the Application

1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. Open your browser and go to `http://localhost:3000`

## Sample Data

- Users: 5 sample users
- Posts: 10 sample posts
- Comments: 20 sample comments
