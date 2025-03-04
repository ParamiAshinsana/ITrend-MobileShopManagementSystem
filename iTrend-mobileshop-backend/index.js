require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1); // Exit process on failure
});

// Import Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes); // Prefix API routes with /api

// Sample Route
app.get('/', (req, res) => {
    res.send('Welcome to Express & MongoDB API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
