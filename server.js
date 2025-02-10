// importing packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
//importing db config
const connectDB = require('./config/db');
//importing routes
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/documents');

dotenv.config();
connectDB();

const app = express();
//const server = http.createServer(app);

// Configure CORS for HTTP requests
//CORS - cross origin resource sharing
app.use(cors({
    origin: ['http://localhost:3000/register','http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

// Middleware and routes
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/documents', documentRoutes);

//default routes 
app.get('/',(req,res)=>{
    res.send('API is running ... ');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
