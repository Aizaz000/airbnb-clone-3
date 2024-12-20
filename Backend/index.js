// index.js
require("dotenv").config();           // Load environment variables from .env file into process.env
const express = require("express");   // Import the express library to create the server
const mongoose = require("mongoose"); // Import mongoose to interact with MongoDB
const cors = require("cors");         // Import the cors library to enable cross-origin requests

// Import the route handlers for different API endpoints
const authRoutes = require("./routes/auth");        // Authentication-related routes
const listingRoutes = require("./routes/listings"); // Listing-related routes
const adminRoutes = require("./routes/admin");      // Admin-related routes

const app = express(); // Create an instance of the express application

// Middlewares
app.use(cors());         // Enable Cross-Origin Resource Sharing (CORS) to allow requests from different domains
app.use(express.json()); // Parse incoming requests with JSON payloads

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Connect to MongoDB using the URI from environment variables
  .then(() => console.log("Connected to MongoDB"))                                     // Log success message on successful connection
  .catch((err) => console.log("Database connection error:", err));                     // Log error message in case of connection failure

// Routes
app.use("/api/auth", authRoutes);   // Route for authentication-related endpoints (e.g., login, register)
app.use("/api", listingRoutes);     // Route for listing-related endpoints (e.g., view listings, create booking)
app.use("/api/admin", adminRoutes); // Route for admin-related endpoints (e.g., manage listings, view bookings)

// Start the server
const PORT = 5000;                                                  // Set the port number to 5000
app.listen(PORT, () => console.log('Server running on port 5000')); // Start the server and log the port it's running on