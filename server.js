const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Import routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

// Connect to MongoDB

connectDB();

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to the Blog App!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
