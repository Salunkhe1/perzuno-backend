const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

const app = express();

// MongoDB connect
connectDB();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend चालू आहे! MongoDB connect झाले आहे.');
});

// User routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server चालू आहे Port: ${PORT}`));
