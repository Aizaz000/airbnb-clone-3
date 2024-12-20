// models/Listing.js
const mongoose = require("mongoose"); // Import mongoose library to interact with MongoDB

const listingSchema = new mongoose.Schema({                  // Define the schema for the Listing model
  listingId: { type: Number, required: true },               // Identifier for the listing
//listingId: { type: Number, required: true, unique: true }, // Unique identifier for the listing, required and must be unique
  clientId: { type: Number, default: 1 },                    // The ID of the client who owns the listing
  available: { type: Boolean, default: true },               // Availability status of the listing, default is true (available)
  title: { type: String, required: true },                   // The title of the listing, required field
  type: { type: String, required: true },                    // The type of the listing (e.g., apartment, house, etc.), required field
  category: { type: String, required: true },                // The category of the listing (e.g., budget, luxury), required field
  location: { type: String, required: true },                // The location of the listing, required field
  rating: { type: String, default: "4.5" },                  // The rating of the listing (optional field, could be a string like "5 stars")
  details: { type: String },                                 // Additional details about the listing (optional field)
  pricing: { type: Number, required: true },                 // The pricing of the listing, required field
  description: { type: String },                             // A description of the listing (optional field)
  image: { type: String },                                   // URL or path to an image of the listing (optional field)
});

module.exports = mongoose.model("Listing", listingSchema); // Export the "Listing" model based on the defined schema for use in other parts of the application