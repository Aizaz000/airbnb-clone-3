import React, { useState } from 'react';        // Import React useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate to enable navigation
import axios from 'axios';                      // Import axios for making API calls

const SignUp = ( ) => { // SignUp component: Registers the user

  const [username, setUsername] = useState(''); // State for storing username
  const [email, setEmail] = useState('');       // State for storing email
  const [cell, setCell] = useState('');         // State for storing cellphone
  const [password, setPassword] = useState(''); // State for storing password
  const [location, setLocation] = useState(''); // State for storing location
  const [error, setError] = useState('');       // State for storing error message
  const navigate = useNavigate();               // Add navigate inside the component

  const validateSignup = () => { // Function: validates user information
    if (username === '') {       // Validate username
        setError(' * Username cannot be empty');
        return false;
    }
    if (email === '') {          // Validate username
      setError(' * Email address cannot be empty');
      return false;
    }
    if (cell === '') {           // Validate username
    setError(' * Cell phone cannot be empty');
    return false;
    }
    if (password === '') {       // Validate password
        setError(' * Password cannot be empty');
        return false;
    }
    if (location === '') {       // Validate username
      setError(' * Location cannot be empty');
      return false;
    }
    setError('');                // Otherwise clear the error message
    return true;                 // And return true
  };

  const handleSignupClick = () => { // Function to handle SignUp button click
    if (validateSignup()) {                                   // Proceeds only if credentials are valid
      axios.post('http://localhost:5000/api/auth/register', { // Make mock POST request to the server
        clientId: Math.floor(Math.random() * 1000),           // Generates a random ID
        clientName: username,
        email: email,
        cell: cell,
        pass: password,
        location: location,
      })
      .then((response) => {     // Handle a successful response
        navigate('/Login');     // Navigate to the manage listings page if admin log in    
      })
      .catch((error) => {       // Handle request errors
        alert('SignUp Failed'); // Notify user of failure
        console.error(error);   // Log error details to the console
      });
    }
  };

  const handleLoginClick = () => { // Function to handle login button click
    navigate('/Login');            // Navigate to the login page
  };

  const handleLogoClick = () => { // Function to handle logo click
    navigate('/');                // Navigate to the homepage
  };

  return (
    <div>
      <div style={styles.center}> {/* Center the logo container */}
        <img                    // Logo for form
        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170606.png" 
        alt="logo" 
        style={styles.logo}
        onClick={handleLogoClick}
        />
      </div>
      <div style={styles.center}>   {/* Center the form container */}
        <div style={styles.form}> {/* SignUp form */}
          <input
            type="text"
            placeholder="Username"                        // Placeholder for username
            value={username}                              // Controlled input bound to state
            onChange={(e) => setUsername(e.target.value)} // Update state on change
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Email Address"                // Placeholder for email address
            value={email}                              // Controlled input bound to state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Cell Phone"                  // Placeholder for cell phone
            value={cell}                              // Controlled input bound to state
            onChange={(e) => setCell(e.target.value)} // Update state on change
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Password"                        // Placeholder for password
            value={password}                              // Controlled input bound to state
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Location"                        // Placeholder for location
            value={location}                              // Controlled input bound to state
            onChange={(e) => setLocation(e.target.value)} // Update state on change
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}                                            {/* Display error message if form is invalid */}
          <div style={styles.SignUpButton} onClick={handleSignupClick}>Signup</div>                 {/* Button for SignUp */}
          <div style={styles.loginText} onClick={handleLoginClick}>Already a user? Login now!</div> {/* Button for signup */}
        </div>
      </div>
    </div>
  );
};

const styles = { // Style object for the SignUpcomponent
  center: {
    display: 'flex',           // Use flexbox to align child elements
    justifyContent: 'center',  // Center the items horizontally
    flexWrap: 'wrap',          // Allow tabs to wrap to the next line if necessary
    padding: '10px',           // Padding around the container
  },
  logo: {
    height: 'auto',            // Maintain aspect ratio of the logo
    width: '250px',            // Set a fixed width for the logo
    cursor: 'pointer',         // Pointer cursor on hover for better UX
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
  loginText: {
    padding: '10px',           // Padding inside the button
    fontSize: '18px',          // Font size for the button text
    textAlign: 'center',       // Aligns the text in center of the button
    color: 'salmon',           // White text color for the button
    cursor: 'pointer',         // Pointer cursor on hover for better UX
  },
};

export default SignUp; // Export the SignUp component for use elsewhere