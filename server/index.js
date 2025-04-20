const express = require('express');
const cors = require('cors');
const AuthorRouter = require('./routes/AuthorRouter')
require('dotenv').config();

const mongoose  = require("mongoose")

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("MongoDB connected");
})

// Use the router correctly
app.use('/author', AuthorRouter); 

const PORT = process.env.PORT || 8080; // Get port from .env if available
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
