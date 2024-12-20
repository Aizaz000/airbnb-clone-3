import React, { useState } from 'react';        // Import React useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate to enable navigation
import axios from 'axios';                      // Import axios for making API calls

const AddListings = ( ) => { // AddListings component: Adds a new listing in the data base

    const [title, setTitle] = useState('');             // State for storing title
    const [type, setType] = useState('');               // State for storing type
    const [category, setCategory] = useState('');       // State for storing category
    const [locations, setLocation] = useState('');      // State for storing location
    const [details, setDetails] = useState('');         // State for storing details
    const [pricing, setPricing] = useState('');         // State for storing pricing
    const [description, setDescription] = useState(''); // State for storing description
    const [image, setImage] = useState('');             // State for storing image url
    const [error, setError] = useState('');             // State for storing error message
    const navigate = useNavigate();                     // Add navigate inside the component

    const validateListing = () => { // Function: validates user information
        if ( title === '') {       // Validate title
            setError(' * Title cannot be empty');
            return false;
        }
        if ( type === '') {        // Validate type
            setError(' * Type cannot be empty');
            return false;
        }
        if ( category === '') {    // Validate category
            setError(' * Category cannot be empty');
            return false;
        }
        if ( locations === '') {   // Validate locations
            setError(' * Locations cannot be empty');
            return false;
        }
        if ( pricing === '') {     // Validate pricing
            setError(' * Pricing cannot be empty');
            return false;
        }
        setError('');              // Otherwise clear the error message
        return true;               // And return true
    };

    const handleAddListingClick = () => { // Function to handle SignUp button click
        if (validateListing()) {                                     // Proceeds only if credentials are valid
            axios.post('http://localhost:5000/api/admin/listings', { // Make mock POST request to the server
                listingId: Math.floor(Math.random() * 1000 + 100),   // Generates a random ID
                title: title,
                type: type,
                category: category,
                location: locations,
                details: details,
                pricing: pricing,
                description: description,
                image: image,
            })
            .then((response) => {            // Handle a successful response
                navigate('/ManageListings'); // Navigate to the manage listings page if addition successful  
            })
            .catch((error) => {              // Handle request errors
                alert('Operation Failed');   // Notify user of failure
                console.error(error);        // Log error details to the console
            });
        }
    };
    
    return (
        <div style={styles.center}>   {/* Center the form container */}
            <div style={styles.form}> {/* SignUp form */}
                <input
                    type="text"
                    placeholder="Title"                        // Placeholder for title
                    value={title}                              // Controlled input bound to state
                    onChange={(e) => setTitle(e.target.value)} // Update state on change
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Type"                        // Placeholder for type
                    value={type}                              // Controlled input bound to state
                    onChange={(e) => setType(e.target.value)} // Update state on change
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Category"                        // Placeholder for category
                    value={category}                              // Controlled input bound to state
                    onChange={(e) => setCategory(e.target.value)} // Update state on change
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Location"                        // Placeholder for locations
                    value={locations}                             // Controlled input bound to state
                    onChange={(e) => setLocation(e.target.value)} // Update state on change
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Details"                        // Placeholder for details
                    value={details}                              // Controlled input bound to state
                    onChange={(e) => setDetails(e.target.value)} // Update state on change
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Pricing"                        // Placeholder for pricing
                    value={pricing}                              // Controlled input bound to state
                    onChange={(e) => setPricing(e.target.value)} // Update state on change
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Description"                        // Placeholder for description
                    value={description}                              // Controlled input bound to state
                    onChange={(e) => setDescription(e.target.value)} // Update state on change
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Image URL"                    // Placeholder for image url
                    value={image}                              // Controlled input bound to state
                    onChange={(e) => setImage(e.target.value)} // Update state on change
                    style={styles.input}
                />
                {error && <p style={styles.error}>{error}</p>}                                     {/* Display error message if form is invalid */}
                <div style={styles.SignUpButton} onClick={handleAddListingClick}>Add Listing</div> {/* Button for SignUp */}
            </div>
        </div>
    );
};

const styles = { // Style object for the AddListings component
    center: {
        display: 'flex',           // Use flexbox to align child elements
        justifyContent: 'center',  // Center the items horizontally
        flexWrap: 'wrap',          // Allow tabs to wrap to the next line if necessary
        padding: '10px',           // Padding around the container
    },
    form: {
        width: '400px',            // Fixed width for the form container
        display: 'flex',           // Use flexbox for layout
        flexDirection: 'column',   // Stack form inputs vertically
        gap: '10px',               // Space between form elements
        padding: '10px',           // Padding around the form
        border: '1px solid #ccc',  // Light gray border for the form
    },
    input: {
        padding: '10px',           // Padding inside the input field
        border: '1px solid #ccc',  // Light gray border for the input field
        fontSize: '16px',          // Font size for the input text
    },
    error: {
        fontSize: '14px',          // Font size for error text
        color: 'red',              // Red text for error messages
    },
    SignUpButton: {
        padding: '10px',           // Padding inside the button
        backgroundColor: 'salmon', // Salmon color for the button background
        fontSize: '18px',          // Font size for the button text
        textAlign: 'center',       // Aligns the text in center of the button
        color: 'white',            // White text color for the button
        cursor: 'pointer',         // Pointer cursor on hover for better UX
    },
};

export default AddListings; // Export the AddListings component for use elsewhere