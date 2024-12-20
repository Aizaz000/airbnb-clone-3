import React, { useContext, useEffect, useState } from 'react';            // Import React useContext useEffect useState
import { GlobalContext } from './context/GlobalContext';                   // Import GlobalContext for using shared states
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router Route Routes from react-router-dom
import axios from 'axios';                                                 // Import axios for API calls

// Import the components used in the app
import Navbar from './Components/Navbar';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import SearchBar from './Components/SearchBar';
import Categories from './Components/Categories';
import Listings from './Components/Listings';
import ListingDetails from './Components/ListingDetails';
import BookingPage from './Components/BookingPage';
import ManagerTab from './Components/ManagerTab';
import ManagerListings from './Components/ManagerListings';
import BookedListings from './Components/BookedListings';
import AddListings from './Components/AddListings';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';

function App() {

  // Text data for headers
  const HomePageHeading="Welcome Home";
  const HomePageText="Welcome to our platform, where unforgettable travel moments and unique experiences await. Whether you're looking to explore new destinations or enjoy immersive activities from the comfort of your home, we connect you with passionate local hosts and experts. From local tours and hands-on workshops to live virtual events, our mission is to make every adventure meaningful, memorable, and accessible. Start your journey today and discover something extraordinary!";
  const ExpPageHeading="Experiences Like Never Before";
  const ExpPageText="Our curated experiences are designed to immerse you in the heart of local culture, providing authentic opportunities to connect with the community. Whether it’s learning to cook a traditional dish, embarking on a scenic hike, or taking part in a hands-on art workshop, each activity is led by passionate hosts who share their expertise and stories. These experiences transform a regular trip into something truly memorable, giving you the chance to discover hidden gems and create lasting connections.";
  const OnlinePageHeading="Online Experiences";
  const OnlinePageText="Experience the world from anywhere with our diverse range of online activities, all designed to bring people together virtually. From interactive cooking lessons with renowned chefs to live, guided tours of famous landmarks, each online experience is led by knowledgeable hosts eager to share their passions. Whether you’re exploring new hobbies, learning a skill, or connecting with others across the globe, our virtual experiences make it easy to engage, learn, and discover without leaving your home.";


  const { Search } = useContext(GlobalContext);       // Retrieve the global Search state from GlobalContext
  const { Category } = useContext(GlobalContext);     // Retrieve the global Category state from GlobalContext
  const { Id } = useContext(GlobalContext);           // Retrieve the global Id state from GlobalContext
  const { clientId } = useContext(GlobalContext);     // Retrieve the global clientId state from GlobalContext

  const [HomeItems, setHomeItems] = useState([]);                 // State to hold the homepage items based on the selected Keyword
  const [ExpItems, setExpItems] = useState([]);                   // State to hold the experiences items
  const [OnlineItems, setOnlineItems] = useState([]);             // State to hold the online experiences items
  const [IdItem, setIdItem] = useState([]);                       // State to hold the item retrieved by id
  const [userBookedItems, setUserBookedItems] = useState([]);     // State to hold user booked listings
  const [adminViewItems, setAdminViewItems] = useState([]);       // State to hold admin view items
  const [adminViewBookings, setAdminViewBookings] = useState([]); // State to hold admin view bookings

  useEffect(() => {                                                            // useEffect hook to load/filter the items whenever Search state changes
    if (Search) {                                                              // If there is a search word, fetch filtered items based on the search
      axios.get('http://localhost:5000/api/listings/location/' + Search)
      .then((response) => {setHomeItems(response.data); })                     // Update the Home Items state with fetched data
      .catch((error) => {console.error('Error fetching Listings:', error); }); // Otherwise prompt error
    }
    else {                                                                     // If there is no search then fetch all items
      axios.get('http://localhost:5000/api/listings')
      .then((response) => {setHomeItems(response.data); })                     // Update the Home Items state with fetched data
      .catch((error) => {console.error('Error fetching Listings:', error); }); // Otherwise prompt error
    }
  }, [Search]);                                                                // Runs every time the Search state changes

  useEffect(() => {                                                            // useEffect hook to load/filter the items whenever Category state changes
    if (Category) {                                                            // If there is a selected category, fetch filtered items based on the category
      axios.get('http://localhost:5000/api/listings/category/' + Category)
      .then((response) => {setHomeItems(response.data); })                     // Update the Home Items state with fetched data
      .catch((error) => {console.error('Error fetching Listings:', error); }); // Otherwise prompt error
    }
    else {                                                                     // If there is no selected category then fetch all items
      axios.get('http://localhost:5000/api/listings')
      .then((response) => {setHomeItems(response.data); })                     // Update the Home Items state with fetched data
      .catch((error) => {console.error('Error fetching Listings:', error); }); // Otherwise prompt error
    }
  }, [Category]);                                                              // Runs every time the Category state changes

  useEffect(() => {                                                            // useEffect hook to load Experience Listings
    axios.get('http://localhost:5000/api/listings/category/Experience')
    .then((response) => {setExpItems(response.data); })                        // Update the Experience Items state with fetched data
    .catch((error) => {console.error('Error fetching Listings:', error); });   // Otherwise prompt error
  }, []);                                                                      // Runs only once, after the initial render

  useEffect(() => {                                                            // useEffect hook to load Online Experience Listings
    axios.get('http://localhost:5000/api/listings/category/Online Experience')
    .then((response) => {setOnlineItems(response.data); })                     // Update the Online Experience Items state with fetched data
    .catch((error) => {console.error('Error fetching Listings:', error); });   // Otherwise prompt error
  }, []);                                                                      // Runs only once, after the initial render

  useEffect(() => {                                                            // useEffect hook to load/filter the items whenever Id state changes
    axios.get('http://localhost:5000/api/listings/' + Id)
    .then((response) => {setIdItem(response.data); })                          // Update the IdItem state with fetched data
    .catch((error) => {console.error('Error fetching Listings:', error); });   // Otherwise prompt error
  }, [Id]);                                                                    // Runs every time the Id state changes

  useEffect(() => {                                                            // useEffect hook to load user booked items
    axios.get('http://localhost:5000/api/admin/bookings/' + clientId)
    .then((response) => {setUserBookedItems(response.data); })                 // Update the userBookedItems state with fetched data
    .catch((error) => {console.error('Error fetching Listings:', error); });   // Otherwise prompt error
  });                                                                          // Runs after every render

  useEffect(() => {                                                            // useEffect hook to load admin view items
    axios.get('http://localhost:5000/api/admin/listings')
    .then((response) => {setAdminViewItems(response.data); })                  // Update the adminViewItems state with fetched data
    .catch((error) => {console.error('Error fetching Listings:', error); });   // Otherwise prompt error
  });                                                                          // Runs after every render

  useEffect(() => {                                                            // useEffect hook to load admin view bookings
    axios.get('http://localhost:5000/api/admin/bookings')
    .then((response) => {setAdminViewBookings(response.data); })               // Update the adminViewBookings state with fetched data
    .catch((error) => {console.error('Error fetching Listings:', error); });   // Otherwise prompt error
  });                                                                          // Runs after every render

  return (
    <Router>
      <Routes>
      <Route // Login page
          path="/Login"
          element={
            <>
            <LogIn/>  {/* Login page */}
            </>
          }
        />
        <Route // Signup page
          path="/Signup"
          element={
            <>
            <SignUp/> {/* Signup page */}
            </>
          }
        />   
        <Route // Homepage
          path="/"
          element={ 
            <>
            <Navbar/>                                                                   {/* Navbar component */}
            <SearchBar/>                                                                {/* SearchBar component */}
            <Categories/>                                                               {/* Categories component */}
            <Listings data={HomeItems} heading={HomePageHeading} text={HomePageText} /> {/* Listings component to display the filtered items */}
            </>
          }
        />
        <Route // Experiences
          path="/Experiences"
          element={
            <>
            <Navbar/>                                                                {/* Navbar component */}
            <Listings data={ExpItems} heading={ExpPageHeading} text={ExpPageText} /> {/* Listings component to display the experience items */}
            </>
          }
        />
        <Route // Online experiences
          path="/Online"
          element={
            <>
            <Navbar/>                                                                         {/* Navbar component */}
            <Listings data={OnlineItems} heading={OnlinePageHeading} text={OnlinePageText} /> {/* Listings component to display the online experience items */}
            </>
          }
        />
        <Route // Keyword details page
          path="/Details"
          element={ 
            <>
              <Navbar/>                        {/* Navbar component */}
              <ListingDetails data={IdItem} /> {/* Listing details page */}
            </>
          }
        />
        <Route // Booking page
          path="/Booking"
          element={ 
            <>
            <Navbar/>                    {/* Navbar component */}
            <BookingPage data={IdItem}/> {/* Book listing page */}
            </>
          }
        />
        <Route // Booking page
          path="/UserBookings"
          element={ 
            <>
            <Navbar/>                                 {/* Navbar component */}
            <BookedListings data={userBookedItems} /> {/* Booked listings page */}
            </>
          }
        />
        <Route // Manage listings page
          path="/ManageListings"
          element={ 
            <>
            <ManagerTab/>                             {/* Manager tab bar component */}
            <ManagerListings data={adminViewItems} /> {/* Manager listing page */}
            </>
          }
        />
        <Route // Booked listings page
          path="/BookedListings"
          element={ 
            <>
            <ManagerTab/>                              {/* Manager tab bar component */}
            <BookedListings data={adminViewBookings}/> {/* Booked listings page */}
            </>
          }
        />
        <Route // Add listings page
          path="/AddListings"
          element={ 
            <>
            <ManagerTab/>  {/* Manager tab bar component */}
            <AddListings/> {/* Add listings page */}
            </>
          }
        />
        <Route // Support Community Hosting About page
          path="/AboutUs"
          element={
            <>
            <Navbar/>  {/* Navbar component */}
            <AboutUs/> {/* About us page */}
            </>
          }
        />
      </Routes>
      <Footer/> {/* Footer component */}
    </Router>
  );
}

export default App; // Export the App component for use in other parts of the application