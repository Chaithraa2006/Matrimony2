import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';
import '../styles/freeHoroscope.css';

const FreeHoroscope = () => {
    return (
        <>
            <Navbar />
            <Login />
            <div className="app-promo-container">
                <div className="app-promo-content">
                    <div className="app-promo-text">
                        <h2>Find Your Perfect</h2>
                        <h1>LIFE PARTNER ON THE GO</h1>
                        <p className="stats">40+ Different Languages | 480+ Castes | 3200 Cities</p>
                        <div className="store-buttons">
                            <a href="#" className="store-link">
                                <img src="images\app-store.png" alt="Download on App Store" />
                            </a>
                            <a href="#" className="store-link">
                                <img src="images\google-play.png" alt="Get it on Google Play" />
                            </a>
                        </div>
                    </div>
                    <div className="app-promo-image">
                        <img src="images\mobileplaysoteandappstore.webp" alt="Mobile App Preview" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FreeHoroscope;
