import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Banner from './../Banner/Banner';
// import About from '../About/About';
// import Services from '../Services/Services';
// import Contacts from '../Contacts/Contacts';

 const Home = () => {
	return (
		<div id="home">
			<Banner></Banner>
             <AboutUs></AboutUs> 
			<Services></Services>
 			<Contact></Contact> 
 		</div>
 	);
 };

export default Home;