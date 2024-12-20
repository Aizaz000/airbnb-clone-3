// models/Client.js
const mongoose = require("mongoose"); // Import mongoose library to interact with MongoDB

const clientSchema = new mongoose.Schema({                  // Define the schema for the Client model
  clientId: { type: Number, required: true },               // Client identifier, required
//clientId: { type: Number, required: true, unique: true }, // Unique client identifier, required and must be unique
  clientName: { type: String, required: true },             // The name of the client, required field
  email: { type: String, required: true, unique: true },    // The client's email, required and must be unique
  cell: { type: String, required: true },                   // The client's phone number, required field
  pass: { type: String, required: true },                   // The client's password, required field
  location: { type: String, required: true },               // The client's location, required field
  admin: { type: Boolean, default: false},                  // Admin
});

module.exports = mongoose.model("Client", clientSchema); // Export the "Client" model based on defined schema for use in other parts of the application