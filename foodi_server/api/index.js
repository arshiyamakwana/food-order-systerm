const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const app = express();

// CORS Configuration for Vercel
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://*.vercel.app'
    ],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

// middleware
app.use(cors(corsOptions));
app.use(express.json());

// mongodb configuration using mongoose
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@complete-foodi-client.yr1ytfb.mongodb.net/`
    )
    .then(() => {
        console.log("MongoDB Connected Successfully!")
    })
    .catch((error) => console.log("Error connecting to MongoDB", error));

// jwt authentication
app.post('/jwt', async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
    })
    res.send({ token });
})

//   import routes here
const menuRoutes = require('./routes/menuRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes')
app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes);
app.use('/users', userRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello Foodi Client Server! 🎉",
        status: "Server is running successfully ✅",
        api: "Ready to accept requests",
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint for Vercel
app.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy" });
});

module.exports = app;
