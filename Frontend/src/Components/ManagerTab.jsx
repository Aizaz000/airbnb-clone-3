import React from 'react';                      // Import React and useContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate to enable navigation

const ManagerTab = () => { // Categories component: renders a category bar with functional category tabs

    const handleBackToHomeClick = () => { // Function to handle card click
        navigate('/');                    // Navigate to home page
    }

    const handleManageListingsClick = () => { // Function to handle card click
        navigate('/ManageListings');          // Navigate to manage listings page
    }
    
    const handleBookedListingsClick = () => { // Function to handle card click
        navigate('/BookedListings');          // Navigate to booked listings page
    }
    
    const handleAddListingsClick = () => { // Function to handle card click
        navigate('/AddListings');          // Navigate to add listings page
    }

    const navigate = useNavigate(); // Add navigate inside the component

  return (
    <div>
        <div style={styles.center}> {/* Center the logo container */}
            <img                    // Logo for form
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170606.png" 
            alt="logo" 
            style={styles.logo} 
            />
        </div>
        <div style={styles.bar}> {/* Category tabs container: each tab navigates to specific page */}
        <div style={styles.tab} onClick={handleBackToHomeClick}>Back to Home</div>
        <div style={styles.tab} onClick={handleManageListingsClick}>Manage Listings</div>
        <div style={styles.tab} onClick={handleBookedListingsClick}>View Bookings</div>
        <div style={styles.tab} onClick={handleAddListingsClick}>Add New</div>
        </div>
    </div>
  );
};

const styles = { // Styles object for the layout and design of ManagerTab component
    center: {
        display: 'flex',           // Use flexbox to align child elements
        justifyContent: 'center',  // Center the items horizontally
        flexWrap: 'wrap',          // Allow tabs to wrap to the next line if necessary
        padding: '10px',           // Padding around the container
    },
    logo: {
        height: 'auto',            // Maintain aspect ratio of the logo
        width: '250px',            // Set a fixed width for the logo
    },
    bar: {
        display: 'flex',          // Use flexbox to display category tabs in a row
        justifyContent: 'center', // Center align the tabs horizontally
        flexWrap: 'wrap',         // Allow tabs to wrap to the next line if necessary
        overflow: 'auto',         // Allow overflow if the tabs exceed the container width
        padding: '20px',          // Add padding around the container
        gap: '20px',              // Add space between individual tabs
    },
    tab: {
        width: '180px',           // Set width for each category tab
        minWidth: '100px',        // Ensure each tab has a minimum width for responsiveness
        padding: '10px',          // Padding inside each tab
        border: '1px solid #ccc', // Light gray border color around each tab
        borderRadius: '8px',      // Rounded corners for each tab
        fontSize: '16px',         // Font size for the tab text
        textAlign: 'center',      // Center the text inside the tab
        cursor: 'pointer',        // Display a pointer cursor on hover to indicate the tab is clickable
    },
};

export default ManagerTab; // Export the Categories component for use in other parts of the application