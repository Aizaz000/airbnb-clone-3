import React from 'react'; // Import React
import axios from 'axios'; // Import axios for making API calls

const ManagerCard = ({ listingId, clientId, available, title, type, category, location, rating, details, pricing, description, image}) => { // ListingCard component: Displays a listing with an image, title, rating, type, details, and pricing
    
    const handleDeleteClick = () => { // Function to handle delete button click
        axios.delete('http://localhost:5000/api/admin/listings/' + listingId, { // Make DELETE request to the server
        })
        .then((response) => {          // Handle a successful response
            alert('Listing Deleted');  // Inform user of success
        })
        .catch((error) => {            // Handle request errors
            alert('Operation Failed'); // Notify user of failure
            console.error(error);      // Log error details to the console
        });
    }

  return (
    <div style={styles.card}>                                 {/* Main container for the booking card */}
      <img style={styles.image} src={image} alt="Image..." /> {/* Display the image of the listing */}
      <div style={styles.title}>                              {/* Container for title and rating */}
        <h3>{title}</h3>                                      {/* Display the title of the listing */}
        <p>{rating}</p>                                       {/* Display the rating */}
      </div>
      <div style={styles.details}>                            {/* Container for listing details */}
        <p>{type} | {location}</p>                            {/* Display the type and location of the listing */}
        <p>{details}</p>                                      {/* Display additional details of the listing */}
        <p>$ {pricing}</p>                                    {/* Display pricing information */}
      </div>
      <div style={styles.deleteText} onClick={handleDeleteClick}>Delete Listing</div> {/* Delete listing button */}
    </div>
  );
};

const styles = { // Styles object to define the appearance and layout of the ManagerCard component
    card: {
        height: 'auto',                  // Allow card height to adjust based on content
        width: 'auto',                   // Allow card width to adjust based on content
        maxWidth: '350px',               // Limit the maximum width of the card to 350px
        padding: '8px',                  // Padding inside the card for spacing
        border: '1px solid #ccc',        // Light gray border around the card
        borderRadius: '8px',             // Rounded corners for the card
        backgroundColor: 'snow',         // Set background color of the card to a light snow color
        fontSize: '12px',                // Set a small font size for the content
        lineHeight: '1',                 // Set line height to adjust spacing between lines (for better text density)
    },
    image: {
        height: '170px',                 // Set fixed height for the image
        width: '100%',                   // Make the image width span the full width of the card
        borderRadius: '8px',             // Round the corners of the image for a smoother look
    },
    title: {
        display: 'flex',                 // Use flexbox to position title and rating side by side
        justifyContent: 'space-between', // Add space between the title and the rating
        margin: '3px',                   // Margin around the title container
    },
    details: {
        margin: '3px',                   // Margin around the details section of the card
    },
    deleteButton: {
        padding: '10px',                 // Padding inside the button
        backgroundColor: 'salmon',       // Salmon color for the button background
        fontSize: '18px',                // Font size for the button text
        textAlign: 'center',             // Aligns the text in center of the button
        color: 'white',                  // White text color for the button
        cursor: 'pointer',               // Pointer cursor on hover for better UX
    },
    deleteText: {
        padding: '10px',                 // Padding inside the button
        fontSize: '18px',                // Font size for the button text
        textAlign: 'center',             // Aligns the text in center of the button
        color: 'salmon',                 // White text color for the button
        cursor: 'pointer',               // Pointer cursor on hover for better UX
    },
};

export default ManagerCard; // Export the ListingCard component for use in other parts of the application