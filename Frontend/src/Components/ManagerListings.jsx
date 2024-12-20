import React from 'react';               // Import React
import ManagerCard from './ManagerCard'; // Import ManagerCard to render each listing

const ManagerListings = ({ data }) => { // ManagerListings component: Displays a list of property listings using the ManagerCard component
  return (
    <div style={styles.center}>                      {/* Container to center the listings */}
        <div style={styles.listings}>                {/* Grid container for all listings */}
            {data.map((listing, index) => (          // Map over the listing array
            <ManagerCard key={index} {...listing} /> // Render a card for each listing, spreading listing properties as props
            ))}
        </div>
    </div>
  );
};

const styles = { // Styles object: Defines the layout and design of the ManageListings component
  center: {
    display: 'flex',                                             // Use flexbox for centering the listings container
    justifyContent: 'center',                                    // Horizontally center the listings container
    padding: '10px',                                             // Padding around the listings container
  },
  listings: {
    display: 'grid',                                             // Use CSS Grid to layout the individual listing cards
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Automatically adjust the number of columns based on available space; each column has a minimum width of 200px
    width: '100%',                                               // Ensure listings container spans the full width of the parent container
    maxWidth: '1000px',                                          // Limit the maximum width of the listings container to 1000px
    gap: '30px',                                                 // Add spacing between individual listing cards
  },
};

export default ManagerListings; // Export the Listings component for use in other parts of the application