import React from 'react'; // Import React and useContext

const BookingCard = ({ listingId, title, clientId, clientName, checkin, checkout, duration, totalPrice, image}) => { // BookingCard component: Displays a listing with an image, title, clientName, checkin, checkout, duration, totalPrice

  return (
    <div style={styles.card}>                                 {/* Main container for the booking card */}
      <img style={styles.image} src={image} alt="Image..." /> {/* Display the image of the listing */}
      <div style={styles.title}>                              {/* Container for title */}
        <h3>{title}</h3>                                      {/* Display the title of the listing */}
      </div>
      <div style={styles.details}>                            {/* Container for listing details */}
        <p><b>Client: </b>{clientName}</p>                    {/* Display client name */}
        <p><b>Check in: </b>{checkin}</p>                     {/* Display check in date */}
        <p><b>Check out: </b>{checkout}</p>                   {/* Display check out date */}
        <p><b>Book Duration: </b>{duration}</p>               {/* Display booking duration */}
        <p><b>Booking Price: </b>$ {totalPrice}</p>           {/* Display booking price*/}
      </div>
    </div>
  );
};

const styles = { // Styles object to define the appearance and layout of the BookingCard component
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
    cursor: 'pointer',               // Change cursor to pointer when hovering over the card (indicating interactivity)
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
};

export default BookingCard; // Export the BookingCard component for use in other parts of the application