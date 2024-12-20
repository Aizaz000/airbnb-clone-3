// models/Booking.js
const mongoose = require("mongoose"); // Import mongoose library to interact with MongoDB

const bookingSchema = new mongoose.Schema({     // Define the schema for the Booking model
  listingId: { type: Number, required: true },  // The ID of the listing being booked, required field
  title: { type: String, required: true },      // The title of the booking, required field
  clientId: { type: Number, required: true },   // The ID of the client making the booking, required field
  clientName: { type: String, required: true }, // The name of the client, required field
  checkin: { type: Date, required: true },      // The check-in date for the booking, required field
  checkout: { type: Date, required: true },     // The checkout date for the booking, required field
  duration: { type: Number, required: true },   // The duration of the booking in days, required field
  totalPrice: { type: Number, required: true }, // The total price of the booking, required field
});

module.exports = mongoose.model("Booking", bookingSchema); // Export the "Booking" model based on the defined schema for use in other parts of the application