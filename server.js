const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Logging MongoDB connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB database'));

// Sync Mongoose models to the MongoDB database
const User = require('./models/User');
const Thought = require('./models/Thought');
const Reaction = require('./models/Reaction');

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
