// routes/admin.js
const express = require("express");           // Import the express library to create the server
const router = express.Router();              // Create a new router object to handle routes in an Express application
const Listing = require("../models/Listing"); // Import the Listing model
const Booking = require("../models/Booking"); // Import the Booking model

/**
 * REQUEST: GET /api/admin/listings
 * USE: Route to fetch all listings for admin
 * LINK: http://localhost:5000/api/admin/listings
 * RESULT: Fetches all listings
 * STATUS: 200 OK
 */
router.get("/listings", async (req, res) => {
  try {
    const listings = await Listing.find();                       // Retrieve all listings from the database
    res.status(200).json(listings);                              // Respond with the listings
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings" }); // Handle errors
  }
});

/**
 * REQUEST: POST /api/admin/listings
 * USE: Route to add a new listing for admin
 * LINK: http://localhost:5000/api/admin/listings
 * BODY:
{
  "listingId": 100,
  "clientId": 1,
  "title": "Luxury Condo",
  "type": "Apartment",
  "category": "Luxury",
  "location": "Miami",
  "pricing": 500,
  "description": "A beautiful luxury condo",
  "image": "image.jpg"
}
 * RESULT: Adds a new listing
 * STATUS: 201 Created
 */
router.post("/listings", async (req, res) => {
  const listing = new Listing(req.body);                             // Create a new Listing instance with data from the request body
  try {
    await listing.save();                                            // Save the new listing to the database
    res.status(201).json({ message: "Listing added successfully" }); // Respond with success message
  } catch (error) {
    res.status(500).json({ error: "Failed to add listing" });        // Handle errors
  }
});

/**
 * REQUEST: DELETE /api/admin/listings/:id
 * USE: Route to delete a listing by its ID
 * LINK: http://localhost:5000/api/admin/listings/100
 * RESULT: Deletes the specified listing
 * STATUS: 200 OK / 404 Not Found
 */
router.delete("/listings/:id", async (req, res) => {
  try {
    await Listing.deleteOne({ listingId: req.params.id });             // Delete the listing with the given listingId
    res.status(200).json({ message: "Listing deleted successfully" }); // Respond with success message
  } catch (error) {
    res.status(500).json({ error: "Failed to delete listing" });       // Handle errors
  }
});

/**
 * REQUEST: GET /api/admin/bookings
 * USE: Route to fetch all bookings for admin
 * LINK: http://localhost:5000/api/admin/bookings
 * RESULT: Fetches all bookings
 * STATUS: 200 OK
 */
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();                       // Retrieve all bookings from the database
    res.status(200).json(bookings);                              // Respond with the bookings
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" }); // Handle errors
  }
});

/**
 * REQUEST: GET /api/admin/bookings/:clientId 
 * USE: Route to fetch bookings for a specific client
 * LINK: http://localhost:5000/api/admin/bookings/20
 * RESULT: Fetches the client's bookings 
 * STATUS: 200 OK / 404 Not Found
 */
router.get("/bookings/:clientId", async (req, res) => {
  try {
    const bookings = await Booking.find({ clientId: req.params.clientId }); // Find bookings by clientId
    res.status(200).json(bookings);                                         // Respond with the bookings for the specified client
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings by client" });  // Handle errors
  }
});

/**
 * REQUEST: POST /api/bookings
 * USE: Route to create a new booking and save it to the database
 * LINK: http://localhost:5000/api/admin/bookings
 * BODY:
{
  "listingId": 100,
  "title": "Sample Listing",
  "clientId": 1,
  "clientName": "John Doe",
  "checkin": "2024-12-20",
  "checkout": "2024-12-25",
  "duration": 5,
  "totalPrice": 500
}
 * RESULT: Creates a booking
 * STATUS: 201 Created
 */
router.post("/bookings", async (req, res) => {
  const booking = new Booking(req.body);                             // Create a new Booking instance with data from the request body
  try {
    await booking.save();                                            // Save the new booking to the database
    res.status(201).json({ message: "Booking added successfully" }); // Respond with success message
  } catch (error) {
    res.status(500).json({ error: "Failed to add booking" });        // Handle errors
  }
});

module.exports = router; // Export the router to be used in the main application