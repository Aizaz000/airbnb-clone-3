import React from 'react';                      // Import React
import { useNavigate } from 'react-router-dom'; // Import useNavigate to enable navigation

const AboutUs = () => { // About Us Component: Renders a simple about us page
  
  const navigate = useNavigate(); // Add navigate inside the component

  const handleClick = () => { // Function to handle back to home button click
    navigate('/');            // Navigate to the homepage
  };

  return (
    <div>
      <div style={styles.center}>                                                {/* Support tab container */}
        <div style={styles.description}>                                         {/* Support tab details */}
          <h2 style={styles.heading}>Support</h2>                                {/* Support tab heading */}
          <p style={styles.text}>
            Airbnb’s team offers help 24/7 to ensure your experience is seamless. From managing bookings to resolving unexpected issues, we’re committed to delivering reliable, prompt assistance. Rest assured, our priority is your satisfaction, and we’ll go the extra mile to provide a secure and enjoyable experience every step of the way, wherever you go. Airbnb’s team offers help 24/7 to ensure your experience is seamless. From managing bookings to resolving unexpected issues, we’re committed to delivering reliable, prompt assistance. Rest assured, our priority is your satisfaction, and we’ll go the extra mile to provide a secure and enjoyable experience every step of the way, wherever you go. Airbnb’s team offers help 24/7 to ensure your experience is seamless. From managing bookings to resolving unexpected issues, we’re committed to delivering reliable, prompt assistance. Rest assured, our priority is your satisfaction, and we’ll go the extra mile to provide a secure and enjoyable experience every step of the way, wherever you go.
          </p>
        </div>
        <img                                                                     // Support tab image
          style={styles.image}
          src="https://www.shutterstock.com/image-photo/paris-france-november-30-2023-600nw-2395408901.jpg"
          alt="Support Image"
        />
      </div>
      <div style={styles.center}>                                                {/* Community tab container */}
        <div style={styles.description}>                                         {/* Community tab details */}
          <h2 style={styles.heading}>Community</h2>                              {/* Community tab heading */}
          <p style={styles.text}>
          At Airbnb, we celebrate diversity and foster connections. Our global community thrives on shared experiences and mutual respect. Whether hosting or traveling, you’ll feel at home. Together, we build relationships, bridge distances, and create a network of trust and understanding that enriches lives across the world. At Airbnb, we celebrate diversity and foster connections. Our global community thrives on shared experiences and mutual respect. Whether hosting or traveling, you’ll feel at home. Together, we build relationships, bridge distances, and create a network of trust and understanding that enriches lives across the world. At Airbnb, we celebrate diversity and foster connections. Our global community thrives on shared experiences and mutual respect. Whether hosting or traveling, you’ll feel at home. Together, we build relationships, bridge distances, and create a network of trust and understanding that enriches lives across the world. 
          </p>
        </div>
        <img                                                                     // Community tab image
          style={styles.image}
          src="https://miracuves.com/wp-content/uploads/2023/12/Airbnb.jpg"
          alt="Community Image"
        />
      </div>
      <div style={styles.center}>                                                {/* Hosting tab container */}
        <div style={styles.description}>                                         {/* Hosting tab details */}
          <h2 style={styles.heading}>Hosting</h2>                                {/* Hosting tab heading */}
          <p style={styles.text}>
            Hosting with Airbnb lets you earn while sharing your space and hospitality. From cozy rooms to luxurious homes, connect with global travelers and deliver exceptional stays. With comprehensive tools, dedicated resources, and expert support, Airbnb empowers hosts to create unique experiences while fostering trust and comfort for every guest. Hosting with Airbnb lets you earn while sharing your space and hospitality. From cozy rooms to luxurious homes, connect with global travelers and deliver exceptional stays. With comprehensive tools, dedicated resources, and expert support, Airbnb empowers hosts to create unique experiences while fostering trust and comfort for every guest. Hosting with Airbnb lets you earn while sharing your space and hospitality. From cozy rooms to luxurious homes, connect with global travelers and deliver exceptional stays. With comprehensive tools, dedicated resources, and expert support, Airbnb empowers hosts to create unique experiences while fostering trust and comfort for every guest.
          </p>
        </div>
        <img                                                                     // Hosting tab image
          style={styles.image}
          src="https://cdn.dribbble.com/users/5032986/screenshots/14309014/airbnb2.0__1_.png"
          alt="Hosting Image"
        />
      </div>
      <div style={styles.center}>                                                {/* About tab container */}
        <div style={styles.description}>                                         {/* About tab details */}
          <h2 style={styles.heading}>About</h2>                                  {/* About tab heading */}
          <p style={styles.text}>
            Founded to make everyone feel they belong, Airbnb connects travelers and hosts worldwide. We inspire meaningful journeys by enabling shared experiences and cultural discovery. Through innovation and community, we’ve grown from a small idea to a global platform, enriching lives and redefining the way the world travels and connects. Founded to make everyone feel they belong, Airbnb connects travelers and hosts worldwide. We inspire meaningful journeys by enabling shared experiences and cultural discovery. Through innovation and community, we’ve grown from a small idea to a global platform, enriching lives and redefining the way the world travels and connects. Founded to make everyone feel they belong, Airbnb connects travelers and hosts worldwide. We inspire meaningful journeys by enabling shared experiences and cultural discovery. Through innovation and community, we’ve grown from a small idea to a global platform, enriching lives and redefining the way the world travels and connects.
          </p>
        </div>
        <img                                                                     // About tab image
          style={styles.image}
          src="https://fiu-original.b-cdn.net/fontsinuse.com/use-images/21/21747/21747.jpeg?filename=bnb_billboard_01-2000x1125.jpg"
          alt="About Image"
        />
      </div>
      <div style={styles.center}>                                                {/* Button container */}
        <div style={styles.button} onClick={handleClick}>Back to Home Page</div> {/* Back to home button */}
      </div>
    </div>
  );
};

const styles = { // Styles object
  center: {
    display: 'flex',               // Use flexbox for centering elements in the container
    justifyContent: 'center',      // Horizontally center the container elements
    flexWrap: 'wrap',              // Allow tabs to wrap to the next line if necessary
  },
  heading:{
    color: "salmon",               // Apply heading color
  },
  image: {
    height: "auto",                // Set auto height to maintain aspect ratio
    maxHeight: "250px",            // Set max height to maintain proportion
    width: "250px",                // Set the width of image
    margin: '50px 10px 10px 10px', // Set proper margins around the image
  },
  description: {
    height: "auto",                // Set auto height to maintain aspect ratio
    maxWidth: "750px",             // Set the width of description container
    margin: '10px',                // Set margins around the description container
  },
  text: {
    textAlign: 'justify',          // justify the text alignment 
  },
  button: {
    width: '225px',                // Set the width of the button
    margin: '10px',                // Set margins
    padding: '10px',               // Padding inside the login button
    border: '2px solid salmon',    // Border around the button with a salmon color
    color: 'white',                // Text color inside the button
    backgroundColor: 'salmon',     // Background color of the login button
    fontSize: '20px',              // Font size for the login text
    textAlign: 'center',           // justify the text alignment 
    textDecoration: 'none',        // Set text decoration to none; remove underline from links
    cursor: 'pointer',             // Pointer cursor on hover
  },
}

export default AboutUs;