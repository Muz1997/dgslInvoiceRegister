
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();



const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For JSON body parsing

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err=>console.log(err));


