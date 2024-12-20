import React, { useState, useContext} from 'react';       // Import React useState useContext
import { GlobalContext } from '../context/GlobalContext'; // Import GlobalContext for shared clientName and clientId state
import { useNavigate } from 'react-router-dom';           // Import useNavigate to enable navigation
import axios from 'axios';                                // Import axios for making API calls

const LogIn = ( ) => { // LogIn component: logins the user upon entering correct credentials
    
    const { setClientName } = useContext(GlobalContext); // Accessing the setClientName function from GlobalContext
    const { setClientId } = useContext(GlobalContext);   // Accessing the setClientId function from GlobalContext

    const [username, setUsername] = useState(''); // State for storing username
    const [password, setPassword] = useState(''); // State for storing password
    const [error, setError] = useState('');       // State for storing error message
    const navigate = useNavigate();               // Add navigate inside the component

    const validateLogin = () => { // Function: validates user credentials
        if (username === '') {    // Validate username
            setError(' * Username cannot be empty');
            return false;
        }
        if (password === '') {    // Validate password
            setError(' * Password cannot be empty');
            return false;
        }
        setError('');             // Otherwise clear the error message
        return true;              // And return true
    };

    const handleLogInClick = () => { // Function to handle login button click
        if (validateLogin()) {                                   // Proceeds only if credentials are valid
            axios.post('http://localhost:5000/api/auth/login', { // Make POST request to the server
                clientName: username,
                pass: password,
            })
            .then((response) => {                                      // Handle a successful response
                const { clientName, clientId, admin } = response.data; // Destructure data from response
                setClientName(clientName);                             // Set the shared clientName state to the clientName retrieved from the database
                setClientId(clientId);                                 // Set the shared clientId state to the clientId retrieved from the database
                if (admin === true) {
                    navigate('/ManageListings');                       // Navigate to the manage listings page if admin log in    
                } else {
                    navigate('/');                                     // Otherwise navigate to the home page
                }
            })
            .catch((error) => {                                        // Handle request errors
                alert('Login Failed');                                 // Notify user of failure
                console.error(error);                                  // Log error details to the console
            });
        }
    };

    const handleSignUpClick = () => { // Function to handle signup button click
        navigate('/Signup');          // Navigate to the signup page
    };

    const handleLogoClick = () => { // Function to handle logo click
        navigate('/');              // Navigate to the homepage
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
                <div style={styles.form}> {/* Login form */}
                    <input
                        type="text"
                        placeholder="Username"                        // Placeholder for username
                        value={username}                              // Controlled input bound to state
                        onChange={(e) => setUsername(e.target.value)} // Update state on change
                        style={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Password"                        // Placeholder for password
                        value={password}                              // Controlled input bound to state
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                        style={styles.input}
                    />
                    {error && <p style={styles.error}>{error}</p>}                                                      {/* Display error message if form is invalid */}
                    <div style={styles.loginButton} onClick={handleLogInClick}>Login</div>                              {/* Button for login */}
                    <div style={styles.signupText} onClick={handleSignUpClick}>Don't have an account? Signup now!</div> {/* Button for signup */}
                </div>
            </div>
        </div>
    );
};

const styles = { // Style object for the LogIn component
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
    loginButton: {
        padding: '10px',           // Padding inside the button
        backgroundColor: 'salmon', // Salmon color for the button background
        fontSize: '18px',          // Font size for the button text
        textAlign: 'center',       // Aligns the text in center of the button
        color: 'white',            // White text color for the button
        cursor: 'pointer',         // Pointer cursor on hover for better UX
    },
    signupText: {
        padding: '10px',           // Padding inside the button
        fontSize: '18px',          // Font size for the button text
        textAlign: 'center',       // Aligns the text in center of the button
        color: 'salmon',           // White text color for the button
        cursor: 'pointer',         // Pointer cursor on hover for better UX
    },
};

export default LogIn; // Export the LogIn component for use elsewhere