// routes/auth.js
const express = require("express");         // Import the express library to create the server
const router = express.Router();            // Create a new router object to handle routes in an Express application
const Client = require("../models/Client"); // Import the Client model to interact with the database

/**
 * REQUEST: POST /api/auth/register
 * USE: Route to register a new client
 * LINK: http://localhost:5000/api/auth/register
 * BODY:
{
  "clientId": 3,
  "clientName": "Zain",
  "email": "zain@example.com",
  "cell": "123-456-789",
  "pass": "Pass",
  "location": "New York"
}
 * RESULT: Registers a new client
 * STATUS: 201 Created
 * NOTE: unique clientId & email
 */
router.post("/register", async (req, res) => {
  const { clientId, clientName, email, cell, pass, location } = req.body;             // Extract user data from the request body
  try {
    const client = new Client({ clientId, clientName, email, cell, pass, location }); // Create a new Client instance with the provided data
    await client.save();                                                              // Save the new client to the database
    res.status(201).json({ message: "Registeration Successful" });                // Respond with success message
  } catch (error) {
    res.status(500).json({ error: "Registeration Failed" });                          // Handle errors and send a failure response
  }
});

/**
 * REQUEST: POST /api/auth/login
 * USE: Route to log in a client
 * LINK: http://localhost:5000/api/auth/login
 * BODY:
{
  "clientName": "User",
  "pass": "Pass"
}
 * RESULT: Returns the client details
 * STATUS: 200 OK
 */
router.post("/login", async (req, res) => {
  const { clientName, pass } = req.body;                       // Extract login credentials from the request body
  try {
    const client = await Client.findOne({ clientName, pass }); // Find a client in the database matching the provided email and password
    if (client) {
      res.status(200).json(client);                            // Respond with the client data if found
    } else {
      res.status(401).json({ error: "Login Failed" });         // Respond with an error if not found
    }
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });           // Handle errors and send a failure response
  }
});

/**
 * REQUEST: GET /api/auth/login/:name/:pass
 * USE: Route to fetch a client based on client name and password
 * LINK: http://localhost:5000/api/auth/login/Jane/password123
 * RESULT: Fetches the client details
 * STATUS: 200 OK / 404 Not Found
 */
router.get("/login/:name/:pass", async (req, res) => {
  const { name, pass } = req.params;                                 // Extract credentials from the URL parameters
  try {
    const client = await Client.findOne({ clientName: name, pass }); // Find a client in the database matching the provided clientName and password
    if (client) {
      res.status(200).json(client);                                  // Respond with the client data if found
    } else {
      res.status(404).json({ error: "Not Found" });                  // Respond with an error if not found
    }
  } catch (error) {
    res.status(500).json({ error: "Not Found" });                    // Handle errors and send a failure response
  }
});

module.exports = router; // Export the router to use in other parts of the application