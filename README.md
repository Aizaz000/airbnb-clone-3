# Airbnb-Inspired Full-Stack Application - Phase 3

## Project Overview
This project is a full-stack Airbnb-inspired application developed as part of a web development course. The project was completed in three phases, with the third phase focusing on MongoDB integration, user authentication, and admin panel. This README covers Phase 3 implementation.

## Features Implemented in Phase 3
### Database Integration
- MongoDB database integration using Mongoose.
- Dynamic schemas for Listings, Bookings, and Clients.

### User Authentication
- Secure login and registration
- Role-based access for Admin and regular users.

### Backend API Enhancements
- **Authentication API Endpoints**:
```bash
   http://localhost:5000/api/auth/register               | POST /api/auth/register              | User registration
   http://localhost:5000/api/auth/login                  | POST /api/auth/login                 | User login
   http://localhost:5000/api/auth/login/Jane/password123 | GET /api/auth/login/:name/:pass      | Fetch user by name and password
```
- **Listings API Endpoints**:
```bash
   http://localhost:5000/api/listings/                   | GET /api/listings                    | Fetch all listings from the database.
   http://localhost:5000/api/listings/1                  | GET /api/listings/:id                | Fetch a specific listing by ID from the database.
   http://localhost:5000/api/listings/location/Toronto   | GET /api/listings/location/:location | Fetch a specific listing by location from the database.
   http://localhost:5000/api/listings/category/Budget    | GET /api/listings/category/:category | Fetch a specific listing by category from the database.
```
- **Admin API Endpoints**:
```bash
   http://localhost:5000/api/admin/listings              | GET /api/admin/listings              | Fetch all listings (admin view)
   http://localhost:5000/api/admin/listings              | POST /api/admin/listings             | Add a new listing
   http://localhost:5000/api/admin/listings/100          | DELETE /api/admin/listings/:id       | Delete a listing by Id
   http://localhost:5000/api/admin/bookings              | GET /api/admin/bookings              | View all bookings (admin overview)
   http://localhost:5000/api/admin/bookings/20           | GET /api/bookings/:clientId          | View all bookings by clientId
   http://localhost:5000/api/admin/bookings              | POST /api/bookings                   | Create a booking and save it to the database
```

### Frontend Components and Pages
- **User Authentication**:
  - Login and Signup pages with form validation.
- **Listings Management**:
  - Admin panel for managing listings and bookings.
  - Form/Page for adding and deleting listings.
- **Booking Management**:
  - User-specific bookings displayed in the profile page.
  - Real-time price calculation based on booking duration.

### Bonus Features Implemented
- Role-based registration (User/Admin).
- Simple admin dashboard.

## Project Structure
``` bash
airbnb-3/
├── Backend/                          # Contains all backend-related files and directories
│   │
│   ├── models/                       # Directory for defining database schemas
│   │   ├── Bookings.js               # Schema for managing booking details in the database
│   │   ├── Client.js                 # Schema for managing client/user information in the database
│   │   └── Listing.js                # Schema for managing property/listing details in the database
│   │
│   ├── routes/                       # Directory for defining backend API routes
│   │   ├── admin.js                  # Routes for admin functionalities (e.g. managing listings, viewing bookings)
│   │   ├── auth.js                   # Routes for authentication (e.g. login, signup)
│   │   └── listings.js               # Routes for handling property-related API calls (e.g. fetching listings)
│   │
│   ├── .env                          # Environment variables file (MongoDB URI)
│   ├── index.js                      # Main entry point for the backend server
│   ├── package.json                  # Package metadata and dependencies for the backend
│   └── package-lock.json             # Exact versions of dependencies used in the backend
│
├── Frontend/                         # Contains all frontend-related files and directories
│   │
│   ├── src/                          # Source code for the React application
│   │   │
│   │   ├── Components/               # Directory for React components
│   │   │   │
│   │   │   ├── AboutUs.jsx           # About Us page component
│   │   │   ├── AddListings.jsx       # Form component for adding new property listings
│   │   │   ├── BookedListings.jsx    # Component for displaying all booked listings (admin view)
│   │   │   ├── BookingCard.jsx       # Component for displaying individual booking details
│   │   │   ├── BookingPage.jsx       # Booking page component with form and booking details
│   │   │   ├── Categories.jsx        # Component for rendering property categories (e.g. Luxury, Budget)
│   │   │   ├── Footer.jsx            # Footer component for the website
│   │   │   ├── ListingCard.jsx       # Component for rendering individual property details in a card format
│   │   │   ├── ListingDetails.jsx    # Detailed view component for a specific property
│   │   │   ├── Listings.jsx          # Component for displaying a collection of listings
│   │   │   ├── Login.jsx             # Login page component
│   │   │   ├── ManagerCard.jsx       # Component for rendering individual manager-related actions
│   │   │   ├── ManagerListings.jsx   # Page component for managing listings (admin view)
│   │   │   ├── ManagerTab.jsx        # Component for navigation tabs in the admin section
│   │   │   ├── Navbar.jsx            # Navigation bar component
│   │   │   ├── SearchBar.jsx         # Search bar component for filtering listings
│   │   │   └── SignUp.jsx            # Signup page component
│   │   │
│   │   ├── context/                  # Directory for React Context API implementation
│   │   │   │
│   │   │   └── GlobalContext.js      # Global state management for the React application
│   │   │
│   │   ├── App.js                    # Root component for the React application
│   │   ├── index.js                  # Entry point for the React application
│   │   └── index.css                 # Global CSS styles for the application
│   │
│   ├── public/                       # Directory for public/static files (e.g. index.html, icons)
│   ├── package.json                  # Package metadata and dependencies for the frontend
│   ├── package-lock.json             # Exact versions of dependencies used in the frontend
│   └── .gitignore                    # Git ignore file for excluding unnecessary files and directories from version control
│
└── README.md                         # Documentation file for the project
```

## Setup Instructions

### Prerequisites
- Node.js and npm installed.
- MongoDB Atlas account or local MongoDB instance.

### Backend Setup
1. Navigate to the `Backend/` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add a `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```

### Frontend Setup
1. Navigate to the `Frontend/` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```

### Accessing the Application
- Visit `http://localhost:3000` for the frontend.
- Backend API runs on `http://localhost:5000`.

## Technologies Used
- **Frontend**: React, React Router, Axios.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose.

## Developer Notes
- Ensure MongoDB is connected before starting the backend server.
- Use environment variables to manage sensitive data securely.
- Follow the folder structure for seamless integration and scalability.
