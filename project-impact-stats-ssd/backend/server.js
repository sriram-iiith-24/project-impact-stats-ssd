// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const paperRoutes = require('./routes/paperRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Other middleware and routes
app.use(cors());
app.use(express.json());
app.use('/api', paperRoutes); // Use paper routes

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
