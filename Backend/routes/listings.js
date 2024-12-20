// routes/listings.js
const express = require("express");           // Import the express library to create the server
const router = express.Router();              // Create a new router object to handle routes in an Express application
const Listing = require("../models/Listing"); // Import the Listing model
const Booking = require('../models/Booking'); // Import the Booking model

/**
 * REQUEST: GET /api/listings
 * USE: Route to fetch all listings
 * LINK: http://localhost:5000/api/listings/
 * RESULT: Fetches all listings
 * STATUS: 200 OK
 */
router.get("/listings", async (req, res) => {
  try {
    const listings = await Listing.find();           // Retrieve all listings from the database
    res.status(200).json(listings);                  // Respond with the listings
  } catch (error) {
    res.status(500).json({ error: "Fetch Failed" }); // Handle errors
  }
});

/**
 * REQUEST: GET /api/listings/:id
 * USE: Route to fetch a listing by ID
 * LINK: http://localhost:5000/api/listings/1
 * RESULT: Fetches the listing details by ID
 * STATUS: 200 OK / 404 Not Found
 */
router.get("/listings/:listingId", async (req, res) => {
  try {
    const listing = await Listing.findOne({ listingId: req.params.listingId }); // Find a listing by listingId
    if (listing) {
      res.status(200).json(listing);                                            // Respond with the found listing
    } else {
      res.status(404).json({ error: "Listing Not Found" });                     // Handle case where listing is not found
    }
  } catch (error) {
    res.status(500).json({ error: "Listing Not Found" });                       // Handle errors
  }
});

/**
 * REQUEST: GET /api/listings/location/:location
 * USE: Route to fetch listings by location
 * LINK: http://localhost:5000/api/listings/location/Toronto
 * RESULT: Fetches listings for the specified location
 * STATUS: 200 OK 
 */
router.get("/listings/location/:location", async (req, res) => {
  try {
    const listings = await Listing.find({ location: req.params.location });  // Find listings by location
    res.status(200).json(listings);                                          // Respond with the found listings
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings by location" }); // Handle errors
  }
});

/**
 * REQUEST: GET /api/listings/category/:category
 * USE: Route to fetch listings by category
 * LINK: http://localhost:5000/api/listings/category/Budget
 * RESULT: Fetches listings for the specified category
 * STATUS: 200 OK 
 */
router.get("/listings/category/:category", async (req, res) => {
  try {
    const listings = await Listing.find({ category: req.params.category });  // Find listings by category
    res.status(200).json(listings);                                          // Respond with the found listings
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings by category" }); // Handle errors
  }
});

module.exports = router; // Export the router to use in other parts of the application